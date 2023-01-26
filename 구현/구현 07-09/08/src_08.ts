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

        let alphabets:string[] = [];
        let numbers:number[] = [];

        return "";
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

    private getOnlyAlphabets(originalInput:string):string[]{
        return [...originalInput].reduce((result:string[], currentValue:string):string[]=>{
            if(this.checkAlphabet(currentValue)){
                result.push(currentValue);
            }

            return result;
        }, []);
    }

    private checkAlphabet(value:string):boolean{
        return (value.charCodeAt(0) >= ALPHABET_A_ASCII && value.charCodeAt(0) <= ALPHABET_Z_ASCII);
    }
}

RearrangeParser.parse("K1KA5CB7");
RearrangeParser.parse("AJKDLSI412K4JSJ9D");