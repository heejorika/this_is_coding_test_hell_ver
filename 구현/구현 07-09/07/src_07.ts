const MIN_POINT_VALUE:number = 10;
const MAX_POINT_VALUE:number = 99_999_999;

const READY_TO_LUCKY_STRAIGHT:string = "LUCKY";
const NOT_READY_TO_LUCKY_STRAIGHT:string = "READY";

interface Character{
    getCurrentPoint():number;
}

class OutBoxer implements Character{
    private point:number;

    constructor(point:number){
        this.validate(point);
        this.point = point;
    }

    private validate(point:number):void{
        this.validatePointValue(point);
    }

    private validatePointValue(point:number):void{
        if(!(point >= MIN_POINT_VALUE && point <= MAX_POINT_VALUE)){
            throw new Error("옳바른 점수를 입력하세요. "+MIN_POINT_VALUE + "~" + MAX_POINT_VALUE);
        }
    }

    public getCurrentPoint():number{
        return this.point;
    }
}

class Game{
    private character!:Character;

    public setCharacter(character:Character):void{
        this.character = character;
    }

    private checkSpicalSkill():boolean{
        let point:number[] = this.numberToList(this.character.getCurrentPoint());

        if(this.checkPointLength(point)){
            console.log("짝수 점수가 아닙니다 점수를 더 모으세요!")
            return false;
        }

        return true;
    }

    private checkPointLength(point:number[]):boolean{
        return point.length % 2 != 0;
    }

    private numberToList(input:number):number[]{
        let result:number[] = [];
    
        while(input > 0){
            result.push(input % 10);
            input = Math.floor(input / 10);
        }

        return result;
    }
}

let outBoxer:OutBoxer = new OutBoxer(1234);