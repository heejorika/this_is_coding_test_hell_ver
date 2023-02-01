const MIN_FOOD_COUNT:number = 1;
const MAX_FOOD_COUNT:number = 200_000;

const MIN_FOOD_TIMES:number = 1;
const MAX_FOOD_TIMES:number = 1_000_000_000;

const MIN_BRODCAST_ERROR_TIME:number = 1;
const MAX_BRODCAST_ERROR_TIME:number = 2 * Math.pow(10,23);

const ALL_FOOD_FINISHED_RESULT:number = -1;

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

    public isTableFinished():boolean{
        let result:boolean = true;

        this.foods.forEach((food:number)=>{
            if(!this.isFinishedFood(food)){
                result = false;
            }
        });

        return result;
    }

    public turnFoodTableToEableFood():void{
        this.turnTable();

        if(this.isFinishedFood(this.foods[this.currentTableIndex])){
            this.turnFoodTableToEableFood();
        }
    }

    private turnTable():void{
        if(this.currentTableIndex == this.foods.length -1){
            this.currentTableIndex = 0;
            return;
        }
        this.currentTableIndex++;
    }

    public eatCurrentFood():void{
        this.foods[this.currentTableIndex]--;
    }

    public getCurrentTableIndex():number{
        if(this.isTableFinished()){
            return ALL_FOOD_FINISHED_RESULT;
        }
        return this.currentTableIndex+1;
    }
}

class MukBangFoodFinder{
    private brodcastErrorTime:number;
    private currentTime:number = 0;
    private foodTable!:FoodTable;

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

    private checkBrodcastError():boolean{
        return this.currentTime === this.brodcastErrorTime;
    }

    public ininMukBang(brodcastErrorTime:number):MukBangFoodFinder{
        this.brodcastErrorTime = brodcastErrorTime;
        this.currentTime = 0;
        return this;
    }   

    public startMukBang(){
        while(!this.checkBrodcastError() && !this.foodTable.isTableFinished()){
            this.foodTable.eatCurrentFood();
            this.foodTable.turnFoodTableToEableFood();

            this.currentTime++;
            //진행 상황 확인용 로그
            console.log(this.foodTable);
        }
    }
}


let q6_table1:FoodTable = new FoodTable([3,1,2]);
let q6_table2:FoodTable = new FoodTable([8,6,4]);

let mukBang:MukBangFoodFinder = new MukBangFoodFinder(5).setFoodTable(q6_table1);
mukBang.startMukBang();

mukBang.ininMukBang(15).setFoodTable(q6_table2).startMukBang();

// answer is 1
console.log(q6_table1.getCurrentTableIndex() === 1);
// answer is 2
console.log(q6_table2.getCurrentTableIndex() === 2);