const MIN_INPUT_LENGTH:number = 1;
const MAX_INPUT_LENGTH:number = 10_000;

const ALPHABET_A_ASCII:number = 65;
const ALPHABET_Z_ASCII:number = 90;
const NUMBER_0_ASCII:number = 48;
const NUMBER_9_ASCII:number = 57;

const ALPHABET_NUMBER_ONLY_REGEX:RegExp= /^[A-Z0-9]+$/;

class RearrangeParser{
    public static parse(originalInput:string):string{
        this.validate(originalInput);

        let alphabets:string[] = this.getOnlyAlphabets(originalInput).sort();
        let numbers:number[] = this.getOnlyNumber(originalInput).sort();

        let arrangedAlphabets:string = alphabets.join("");
        let cumulatedNumber:number = this.getListSum(numbers);

        return arrangedAlphabets+cumulatedNumber;
    }
    
    private static validate(originalInput:string):void{
        this.validateInputLength(originalInput);
        this.validateInputValueType(originalInput);
    }

    private static validateInputLength(originalInput:string):void{
        if(!(originalInput.length >= MIN_INPUT_LENGTH && originalInput.length <= MAX_INPUT_LENGTH)){
            throw new Error("파싱할 수 있는 길이가 아닙니다.");
        }
    }

    private static validateInputValueType(originalInput:string):void{
        if(!ALPHABET_NUMBER_ONLY_REGEX.test(originalInput)){
            throw new Error("대문자 알파벳과 숫자만 입력해주세요.");
        }
    }   

    private static getOnlyAlphabets(originalInput:string):string[]{
        return [...originalInput].reduce((result:string[], currentValue:string):string[]=>{
            if(this.checkAlphabet(currentValue)){
                result.push(currentValue);
            }

            return result;
        }, []);
    }

    private static getOnlyNumber(originalInput:string):number[]{
        return [...originalInput].reduce((result:number[], currentValue:string):number[]=>{
            if(this.checkNumber(currentValue)){
                result.push(Number.parseInt(currentValue));
            }

            return result;
        }, []);
    }

    private static checkAlphabet(value:string):boolean{
        return (value.charCodeAt(0) >= ALPHABET_A_ASCII && value.charCodeAt(0) <= ALPHABET_Z_ASCII);
    }

    private static checkNumber(value:string):boolean{
        return (value.charCodeAt(0) >= NUMBER_0_ASCII && value.charCodeAt(0) <= NUMBER_9_ASCII);
    }

    private static getListSum(list:number[]){
        return list.reduce((result, currentValue):number=>{
            return result += currentValue;
        }, 0)
    }
}
//answer is ABCKK13
console.log(RearrangeParser.parse("K1KA5CB7") === "ABCKK13");
//answer is ADDIJJJKKLSS20
console.log(RearrangeParser.parse("AJKDLSI412K4JSJ9D") === "ADDIJJJKKLSS20");