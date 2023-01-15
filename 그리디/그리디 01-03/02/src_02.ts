const MAX_INPUT_LENGTH = 20;
const MIN_INPUT_LENGTH = 1;

class MaximumCumulator{
    private numbers:number[] = [];

    constructor(input:string){
        this.validateInput(input);
    }

    private validateInput(input:string): void{
        this.validateInputStringLength(input);
        this.validateCorrectNumberInput(input);
    }

    private validateInputStringLength(input:string): void{
        if(!((input.length >= MIN_INPUT_LENGTH) && (input.length <= MAX_INPUT_LENGTH))){
            throw new Error("옳바른 길이를 입력하세요."+MIN_INPUT_LENGTH +"이상, "+MAX_INPUT_LENGTH+"미만");
        }
    }

    private validateCorrectNumberInput(input:string): void{
        [...input].forEach((value)=>{
            let integer = parseInt(value);

            if(isNaN(integer)){
                throw new Error("숫자를 입력하세요! " + value + "는 숫자가 아닙니다.");
            }
            
            this.numbers.push(integer);
        })
    }
    calculateMaximumCumulativeValue(): number{
        return this.numbers.reduce((acc:number, currentValue:number, currentIndex:number)=>{
            if(currentIndex === 0){
               return currentValue;
            }
    
            return this.calculate(acc, currentValue);
        }, 0)
    }

    private calculate(acc:number, value:number):number{
        //좌변
        if(acc === 0 || acc === 1){
            acc += value;
            return acc;
        }
        //우변
        if(value === 0 || value ===1){
            acc += value;
            return acc;
        }

        acc *= value;

        return acc;
    }
}
// (((5 * 6) + 0) * 7) == 210
let q2_t1 = new MaximumCumulator("5607").calculateMaximumCumulativeValue();
//((5*6)*7) == 210
let q2_t2 = new MaximumCumulator("567").calculateMaximumCumulativeValue();
//((((0+2)*9)*8)*4) == 576
let q2_t3 = new MaximumCumulator("02984").calculateMaximumCumulativeValue();

console.log(q2_t1 === 210);
console.log(q2_t2 === 210);
console.log(q2_t3 === 576);