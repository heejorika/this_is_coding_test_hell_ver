const MIN_PLAIN_TEXT_LENGTH:number = 1;
const MAX_PLAIN_TEXT_LENGTH:number = 1_000;

const LOWCASE_ALPHABET_REGEX:RegExp = /^[a-z]+$/;

class TextCompressor{
    public static compress(plainText:string):number{
        this.validate(plainText);

        let compressResults:Map<string, number> = new Map<string, number>();

        for(let unit=1; unit<= Math.floor(plainText.length/2); unit++){
            
        }

        return 0;
    }

    private static sliceByUnitSize(plainText:string, unit:number):string[]{
        let currentIndex:number = 0;
        let slicedIndex:number = unit;
        let slicedResult:string[] = [];

        while(!(currentIndex >= plainText.length)){
            slicedResult.push(plainText.slice(currentIndex, slicedIndex));
            currentIndex = slicedIndex;
            slicedIndex += unit;
        }

        return slicedResult;
    }

    private static getCompressedText(slicedText:string[]):string{
        let result = ""
        let privousText = slicedText[0];
        let matchCount = 1;

        for(let i =1; i<=slicedText.length; i++){
            if(privousText != slicedText[i]){
                if(matchCount != 1){
                    result += (matchCount+privousText);
                    privousText = slicedText[i]
                    matchCount =1;
                    continue;
                }
                result += privousText;
                privousText = slicedText[i]
                continue;
            }
            matchCount++;
        }

        return result;
    }

    private static validate(plainText:string):void{
        this.validatePlainTextLength(plainText);
        this.validatePlainTextValue(plainText);
    }

    private static validatePlainTextLength(plainText:string):void{
        if(!(plainText.length >= MIN_PLAIN_TEXT_LENGTH && plainText.length <= MAX_PLAIN_TEXT_LENGTH)){
            throw new Error("옳바른 평문의 길이를 입력하세요" + MIN_PLAIN_TEXT_LENGTH + "~" + MAX_PLAIN_TEXT_LENGTH);
        }
    }

    private static validatePlainTextValue(plainText:string):void{
        if(!LOWCASE_ALPHABET_REGEX.test(plainText)){
            throw new Error("소문자 이외의 다른값이 추가되어 있습니다.");
        }
    }
}