const MAX_INPUT_LENGTH = 20;
const MIN_INPUT_LENGTH = 1;

class MaximumAccumulator{
    private numbers:number[] = [];

    constructor(input:string){
        this.validateInput(input);
    }

    private validateInput(input:string){
        this.validateInputStringLength(input);
    }

    private validateInputStringLength(input:string){
        if(!((input.length >= MIN_INPUT_LENGTH) && (input.length <= MAX_INPUT_LENGTH))){
            throw new Error("옳바른 길이를 입력하세요."+MIN_INPUT_LENGTH +"이상, "+MAX_INPUT_LENGTH+"미만");
        }
    }

    private validateCorrectNumberInput(input:string){
        [...input].forEach((value)=>{
            let integer = parseInt(value);

            if(isNaN(integer)){
                throw new Error("숫자를 입력하세요! " + value + "는 숫자가 아닙니다.");
            }
            
            this.numbers.push(integer);
        })
    }
}