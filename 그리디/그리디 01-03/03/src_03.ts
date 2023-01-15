const CARD_SHAPE: string[] = ["0", "1"];
const MAX_CARD_LENGTH:number = 1_000_000;
const MIN_CARD_LENGTH:number = 0;

class CardFlipGame{
    private cardShapes:string[] = [];
    private continuousCardCount:Map<string, number> = new Map();

    constructor(cards:string){
        this.validateCardInput(cards);
        this.initCardCount();
    }

    private initCardCount():void{
        CARD_SHAPE.forEach((cardShape)=>{
            this.continuousCardCount.set(cardShape, 0);
        })
    }

    private validateCardInput(cards:string): void{
        this.validateCardLength(cards);
        this.validateCardShape(cards);
    }

    private validateCardLength(cards:string):void{
        if(!(MIN_CARD_LENGTH <= cards.length && cards.length <= MAX_CARD_LENGTH)){
            throw new Error("올바른 카드 길이를 입력해주세요");
        }
    }

    private validateCardShape(cards:string):void{
        [...cards].forEach((cardShape:string)=>{
            if(!CARD_SHAPE.includes(cardShape)){
                throw new Error("올바른 카드 모양을 입력해주세요");
            }
            this.cardShapes.push(cardShape);
        })
    }

    getMinumumFlipCount(){
        this.countAllContinuousCardShape();
    }

    private countAllContinuousCardShape(){
        let previousShape = this.cardShapes[0];

        this.countContinuousCardShape(previousShape);

        for(let index = 1; index<this.cardShapes.length; index++){
            let currentShape = this.cardShapes[index];

            if(currentShape != previousShape){
                this.countContinuousCardShape(currentShape);
            }
            
            previousShape = currentShape;
        }
    }

    private countContinuousCardShape(cardShape:string):void{
        this.continuousCardCount.set(cardShape, this.getContinuosCount(cardShape)+1);
    }

    private getContinuosCount(cardShape:string):number{
        let count:number | undefined = this.continuousCardCount.get(cardShape);

        if(count == undefined){
            return 0;
        }
        return count;
    }
}
