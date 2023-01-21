const MIN_N_LENGTH:number = 1;
const MAX_N_LENGTH:number = 1_000;

const MIN_MONEY_UNIT:number = 1;
const MAX_MONEY_UNIT:number = 1_000_000;

class PlusCombinator{
    
}

class ImpossibleMoneyFinder{
    private moneys:number[];

    constructor(moneys:number[]){
        this.validate(moneys)
    }

    validate(moneys:number[]):void{
        this.validateInputLength(moneys);
        this,this.validateMoneyUnit(moneys);
        this.moneys = moneys;
    }

    validateInputLength(moneys:number[]):void{
        if(!(moneys.length >= MIN_N_LENGTH && moneys.length <= MAX_N_LENGTH)){
            throw new Error(MIN_N_LENGTH + "개에서 "+MAX_N_LENGTH+" 개 사이의 화폐를 입력해주세요.");
        }
    }

    validateMoneyUnit(moneys:number[]):void{
        moneys.forEach((money:number)=>{
            if(!(money >= MIN_MONEY_UNIT && money <= MAX_MONEY_UNIT)){
                throw new Error(money + "는 " + MIN_MONEY_UNIT + " ~ " + MAX_MONEY_UNIT +" 사이 금액이 아닙니다. 다시 입력해주세요.");
            }
        })
    }
}