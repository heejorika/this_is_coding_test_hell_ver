const MIN_FOOD_COUNT:number = 1;
const MAX_FOOD_COUNT:number = 200_000;

const MIN_FOOD_TIMES:number = 1;
const MAX_FOOD_TIMES:number = 1_000_000_000;

const MIN_BRODCAST_ERROR_TIME:number = 1;
const MAX_BRODCAST_ERROR_TIME:number = 2 * Math.pow(10,23);

class MukBangFoodFinder{
    private foods:number[];
    private brodcastErrorTime:number;

    constructor(foods:number[], brodcastErrorTime:number){
        this.validate(foods, brodcastErrorTime);
        this.foods = foods;
        this.brodcastErrorTime = brodcastErrorTime;
    }

    private validate(foods:number[], brodcastErrorTime:number):void{
        this.validateFood(foods);
        this.validateBrodcastErrorTime(brodcastErrorTime);
    }

    private validateFood(foods:number[]):void{
        this.validateFoodCount(foods);
        this.validateFoodTimes(foods);
    }

    private validateFoodCount(foods:number[]):void{
        let inputFoodsCount = foods.length;
        
        if(!(inputFoodsCount >= MIN_FOOD_COUNT && inputFoodsCount <= MAX_FOOD_COUNT)){
            throw new Error(MIN_FOOD_COUNT + " ~ " + MAX_FOOD_COUNT + " 개 사이의 음식을 입력해주세요");
        }
    }

    private validateFoodTimes(foods:number[]):void{
        foods.forEach((food:number)=>{
            if(!(food >= MIN_FOOD_TIMES && food <= MAX_FOOD_TIMES)){
                throw new Error(MIN_FOOD_TIMES + " ~ " + MAX_FOOD_TIMES + " 사이의 음식량을 준비해주세요!");
            }
        })
    }

    private validateBrodcastErrorTime(brodcastErrorTime:number):void{
        if(!(brodcastErrorTime >= MIN_BRODCAST_ERROR_TIME && brodcastErrorTime <= MAX_BRODCAST_ERROR_TIME)){
            throw new Error("정상적인 방송 오류 시간을 입력해주세요");
        }
    }

    private isTableFinished():boolean{
        this.foods.forEach((food:number)=>{
            if(!this.isFinishedFood(food)){
                return false;
            }
        });

        return true;
    }

    private isFinishedFood(food:number):boolean{
        return food == 0;
    }
}

let q6_t1 = new MukBangFoodFinder([3,1,2], 5);