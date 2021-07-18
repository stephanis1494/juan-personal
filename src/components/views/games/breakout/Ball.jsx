class Ball {
    constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
    }

    drawBall(theContext) {
        // draw a white circle
        theContext.fillStyle = 'white';
        theContext.beginPath();
        theContext.arc(this.x, this.y, this.rad, 0, Math.PI*2, true); 
        theContext.fill();
    }
}

export function BallMovement(theContext, ballObject) {
    let data = new Ball(ballObject.ballX, ballObject.ballY, ballObject.ballRadius)

    data.drawBall(theContext)
    ballObject.ballX += ballObject.ballSpeedX; // move the ball based on its current horizontal speed 
    ballObject.ballY += ballObject.ballSpeedY; // same as above, but for vertical
}
