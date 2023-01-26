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
}

RearrangeParser.parse("K1KA5CB7");
RearrangeParser.parse("AJKDLSI412K4JSJ9D");