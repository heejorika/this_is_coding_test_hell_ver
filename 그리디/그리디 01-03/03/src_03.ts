const CARD_SHAPE: string[] = ["0", "1"];
const MAX_CARD_LENGTH:number = 1_000_000;
const MIN_CARD_LENGTH:number = 0;

class CardFlipGame{
    private cardShapes:string[] = [];

    constructor(cards:string){
        this.validateCardInput(cards);
    }

    private validateCardInput(cards:string): void{
        this.validateCardLength(cards);
    }

    private validateCardLength(cards:string):void{
        if(!(MIN_CARD_LENGTH <= cards.length && cards.length <= MAX_CARD_LENGTH)){
            throw new Error("올바른 카드 길이를 입력해주세요");
        }
    }

    private validateCardShape(cards:string){
        [...cards].forEach((cardShape)=>{
            if(!CARD_SHAPE.includes(cardShape)){
                throw new Error("올바른 카드 모양을 입력해주세요");
            }
            this.cardShapes.push(cardShape);
        })
    }
}