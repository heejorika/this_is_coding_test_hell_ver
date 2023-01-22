const MIN_BALL_COUNT:number = 1;
const MAX_BALL_COUNT:number = 1_000;

const MIN_BALL_WEIGTH:number = 1;
const MAX_BALL_WEIGHT:number = 10;

class BowlingBallMatcher{
    private balls:number[];

    constructor(ballCount:number, maxBallWeight:number, balls:number[]){
        this.validate(ballCount, maxBallWeight, balls);
        this.balls = balls;
    }

    private validate(ballCount:number, maxBallWeight:number, balls:number[]):void{
        this.validateBallCondition(ballCount, maxBallWeight);
        this.validateBall(ballCount, maxBallWeight, balls);
    }

    private validateBallCondition(ballCount:number, maxBallWeight:number):void{
        this.validateBallCountCondition(ballCount);
        this.validateMaxBallWeightCondition(maxBallWeight);
    }

    private validateBallCountCondition(ballCount:number):void{
        if(!(ballCount >= MIN_BALL_COUNT && ballCount <= MAX_BALL_COUNT)){
            throw new Error(MIN_BALL_COUNT + "~"+ MAX_BALL_COUNT + "개 사이의 볼링공을 입력해주세요");
        }
    }

    private validateMaxBallWeightCondition(maxBallWeight:number):void{
        if(!(maxBallWeight >= MIN_BALL_WEIGTH && maxBallWeight <= MAX_BALL_WEIGHT)){
            throw new Error(MIN_BALL_WEIGTH + "~"+ MAX_BALL_WEIGHT + " 사이의 볼링공 무게를 입력해주세요");
        }
    }

    private validateBall(ballCount:number, maxBallWeight:number, balls:number[]):void{
        this.validateBallCount(ballCount, balls);
        this.validateBallWeight(maxBallWeight, balls);
    }

    private validateBallCount(ballCount:number, balls:number[]):void{
        if(balls.length != ballCount){
            throw new Error(ballCount + "개의 볼링공을 입력해주세요.");
        }
    }

    private validateBallWeight(maxBallWeight:number, balls:number[]){
        balls.forEach((ballWeight:number, currentIndex:number)=>{
            if(!(ballWeight >= MIN_BALL_WEIGTH && ballWeight <= maxBallWeight)){
                throw new Error(currentIndex+ "번째 볼링공의 무게가 범위를 초과하였습니다. \n 입력한 공의 무게: "+ballWeight);
            }
        })
    }
}

let q5_t1 = new BowlingBallMatcher(5,3,[1,3,2,3,2]);