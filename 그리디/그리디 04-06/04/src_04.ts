const MIN_N_LENGTH:number = 1;
const MAX_N_LENGTH:number = 1_000;

const MIN_MONEY_UNIT:number = 1;
const MAX_MONEY_UNIT:number = 1_000_000;

class ImpossibleMoneyFinder{
    private moneys:number[] = [];

    constructor(moneys:number[]){
        this.validate(moneys)
    }

    private validate(moneys:number[]):void{
        this.validateInputLength(moneys);
        this,this.validateMoneyUnit(moneys);

        /*
            sort 매서드의 파라미터로 넘겨준 callback 함수가
            리턴하는 값이 0보다 적을 경우 a가 b보다 앞
            리턴하는 값이 0보다 클 경우 b가 a보다 앞
        */
        this.moneys = moneys.sort((v1:number, v2:number)=>{
            return v1 - v2;
        });
    }

    private validateInputLength(moneys:number[]):void{
        if(!(moneys.length >= MIN_N_LENGTH && moneys.length <= MAX_N_LENGTH)){
            throw new Error(MIN_N_LENGTH + "개에서 "+MAX_N_LENGTH+" 개 사이의 화폐를 입력해주세요.");
        }
    }

    private validateMoneyUnit(moneys:number[]):void{
        moneys.forEach((money:number)=>{
            if(!(money >= MIN_MONEY_UNIT && money <= MAX_MONEY_UNIT)){
                throw new Error(money + "는 " + MIN_MONEY_UNIT + " ~ " + MAX_MONEY_UNIT +" 사이 금액이 아닙니다. 다시 입력해주세요.");
            }
        })
    }

    public getImpossibleMoney():number{
        let targetMoney:number = 1;

        this.moneys.forEach((currentMoney:number)=>{
            if(currentMoney > targetMoney){
                return;
            }
            targetMoney += currentMoney;
        })

        return targetMoney;
    }
}
// answer is 8
let q4_t1:number = new ImpossibleMoneyFinder([3,2,1,1,9]).getImpossibleMoney();
//answer is 10
let q4_t2:number = new ImpossibleMoneyFinder([5,2,1,1]).getImpossibleMoney();


console.log(q4_t1 === 8);
console.log(q4_t2 === 10);