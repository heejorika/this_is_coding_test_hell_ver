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

    public setPoint(point:number):void{
        this.point = point;
    }
}

class Game{
    private character!:Character;

    public setCharacter(character:Character):Game{
        this.character = character;
        return this;
    }

    public isSpicalSkillSatisfied():string{
        if(this.checkSpicalSkill()){
            return READY_TO_LUCKY_STRAIGHT;
        }

        return NOT_READY_TO_LUCKY_STRAIGHT;
    }

    private checkSpicalSkill():boolean{
        let point:number[] = this.numberToList(this.character.getCurrentPoint());

        if(this.checkPointLength(point) || !this.checkSpicalRule(point)){
            return false;
        }

        return true;
    }

    private checkPointLength(point:number[]):boolean{
        return point.length % 2 != 0;
    }


    private checkSpicalRule(point:number[]):boolean{
        let leftPart:number[];
        let rightPart:number[];

        leftPart = point.slice(0, point.length/2);
        rightPart = point.slice(point.length/2);

        return this.getListSum(leftPart) == this.getListSum(rightPart);
    }

    private getListSum(list:number[]):number{
        return list.reduce((result:number, currentValue:number)=>result += currentValue, 0);
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

let outBoxer:OutBoxer = new OutBoxer(123402);
let game:Game = new Game();

let q7_t1 = game.setCharacter(outBoxer).isSpicalSkillSatisfied();

outBoxer.setPoint(7755);

let q7_t2 = game.isSpicalSkillSatisfied();

console.log(q7_t1 === READY_TO_LUCKY_STRAIGHT);
console.log(q7_t2 === NOT_READY_TO_LUCKY_STRAIGHT);