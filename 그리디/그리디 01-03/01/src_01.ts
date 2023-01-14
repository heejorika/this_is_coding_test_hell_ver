const MAX_ADVENTURER_COUNT = 100_000;
const MIN_ADVENTURER_COUNT = 1;

class GameGroupCounter{
    
    constructor(private adventurerCount:number, private fears: number []){
        this.validateInput(adventurerCount, fears);
    }

    setAdventurerFears(adventurerCount: number, fears:number[]): GameGroupCounter {
        this.validateInput(adventurerCount, fears);
        return this;
    }

    countMaxGroup(): GameGroupCounter{
        return this;
    }

    getGroupCount(): number{
        return 0;
    }

    private ascendingArray(): void{
        
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
