const MAX_ADVENTURER_COUNT = 100_000;
const MIN_ADVENTURER_COUNT = 1;

class GameGroup{
    private adventurerFears:number[];
    private isComplete: boolean;

    constructor(){
        this.adventurerFears = [];
        this.isComplete = false;
    }

    pushNewAdventurerFear(fear:number){
        if(!this.isComplete) {
            this.adventurerFears.push(fear);
        }
        this.checkGroupIsCompleted(fear);
    }

    private checkGroupIsCompleted(fear:number): void{
        let lastFear:number = fear;

        if(this.adventurerFears.length === lastFear){
            this.isComplete = true;
        }
        this.isComplete = false;
    }

    isCompleteGroup(): boolean{
        return this.isComplete;
    }
}

class GameGroupCounter{

    private groups:GameGroup[];
    
    constructor(private adventurerCount:number, private fears: number []){
        this.validateInput(adventurerCount, fears);
        this.ascendingFearArray();
    }

    setAdventurerFears(adventurerCount: number, fears:number[]): GameGroupCounter {
        this.validateInput(adventurerCount, fears);
        this.ascendingFearArray();
        return this;
    }

    countMaxGroup(): GameGroupCounter{
        return this;
    }

    getGroupCount(): number{
        return this.groups.length;
    }

    private ascendingFearArray(): void{
        let tempArray: number[];
        // sort() 메서드를 통해서 쉽게 정렬할 수 있지만, reduce 매서드 적응을 위해 아래와 같이 구현
        this.fears = this.fears.reduce((tempArray:number[], currentValue:number)=>{
            let index = 0;
            while(index < tempArray.length && currentValue > tempArray[index]) index++;
            tempArray.splice(index, 0, currentValue);
            return tempArray;
        }, []);
    }

    private validateInput(adventurerCount: number, fears:number[]): void{
        this.validateAdventurerCount(adventurerCount);
        this.validateFears(fears);
    }

    private validateAdventurerCount(adventurerCount:number): void{
        if(!((adventurerCount >= MIN_ADVENTURER_COUNT) && (adventurerCount <= MAX_ADVENTURER_COUNT))){
            throw new Error(MIN_ADVENTURER_COUNT + "이상, " + MAX_ADVENTURER_COUNT + " 이하의 모험가 수를 입력해주세요");
        }
        this.adventurerCount = adventurerCount;
    }

    private validateFears(fears:number[]): void{
        if(fears.length != this.adventurerCount){
            throw new Error(this.adventurerCount+" 명이 공포심을 입력해주세요");
        }
        this.fears = fears;
    }
}