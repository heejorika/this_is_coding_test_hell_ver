const MIN_FOOD_COUNT:number = 1;
const MAX_FOOD_COUNT:number = 200_000;

const MIN_FOOD_TIMES:number = 1;
const MAX_FOOD_TIMES:number = 1_000_000_000;

const MIN_BRODCAST_ERROR_TIME:number = 1;
const MAX_BRODCAST_ERROR_TIME:number = 2 * Math.pow(10,23);

const ALL_FOOD_FINISHED_RESULT = -1;

class FoodTable{
    private foods:number[];
    private currentTableIndex:number = 0;

    constructor(foods:number[]){
        this.validateFood(foods);
        this.foods = foods;
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

    private isFinishedFood(food:number):boolean{
        return food == 0;
    }

    private isTableFinished():boolean{
        this.foods.forEach((food:number)=>{
            if(!this.isFinishedFood(food)){
                return false;
            }
        });

        return true;
    }

    public turnFoodTableToEableFood():void{
        while(this.isFinishedFood(this.currentTableIndex)){
            if(this.currentTableIndex == this.foods.length -1){
                this.currentTableIndex = 0;
            }
            this.currentTableIndex++;
        }
    }

    public eatCurrentFood():void{
        this.foods[this.currentTableIndex]--;
    }

    public getCurrentTableIndex(){
        if(this.isTableFinished()){
            return ALL_FOOD_FINISHED_RESULT;
        }
        return this.currentTableIndex;
    }

}

class MukBangFoodFinder{
    private brodcastErrorTime:number;
    private currentTime:number = 0;
    private foodTable:FoodTable;

    constructor(brodcastErrorTime:number){
        this.validateBrodcastErrorTime(brodcastErrorTime);
        this.brodcastErrorTime = brodcastErrorTime;
    }

    public setFoodTable(foodTable:FoodTable):MukBangFoodFinder{
        this.foodTable = foodTable;
        return this;
    }

    private validateBrodcastErrorTime(brodcastErrorTime:number):void{
        if(!(brodcastErrorTime >= MIN_BRODCAST_ERROR_TIME && brodcastErrorTime <= MAX_BRODCAST_ERROR_TIME)){
            throw new Error("정상적인 방송 오류 시간을 입력해주세요");
        }
    }

    private checkBrodcastError(){
        return this.currentTime === this.brodcastErrorTime;
    }

    private startMukBang(){

    }
}
