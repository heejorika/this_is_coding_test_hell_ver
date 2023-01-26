const MIN_POINT_VALUE:number = 10;
const MAX_POINT_VALUE:number = 99_999_999;

const READY_TO_LUCKY_STRAIGHT:string = "LUCKY";
const NOT_READY_TO_LUCKY_STRAIGHT:string = "READY";


class OutBoxer{
    private point:number[] = [];

    constructor(point:number){
        this.validate(point);
    }

    private validate(point:number):void{
        this.validatePointValue(point);
        this.validatePointLength(point);
    }

    private validatePointValue(point:number):void{
        if(!(point >= MIN_POINT_VALUE && point <= MAX_POINT_VALUE)){
            throw new Error("옳바른 점수를 입력하세요. "+MIN_POINT_VALUE + "~" + MAX_POINT_VALUE);
        }
    }

    private validatePointLength(point:number):void{
        let result:number[] = this.numberToList(point);

        if((result.length % 2) != 0){
            throw new Error("짝수 점수를 입력해주세요");
        }
        this.point = result;
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

class Game{

}

let outBoxer:OutBoxer = new OutBoxer(1234);