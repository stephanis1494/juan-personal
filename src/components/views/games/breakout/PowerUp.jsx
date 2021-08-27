class PowerUp {
    constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
    }

    drawPowerUp(theContext) {
        // draw a white circle
        theContext.fillStyle = 'red';
        theContext.beginPath();
        theContext.arc(this.x, this.y, this.rad, 0, Math.PI*2, true); 
        theContext.fill();
    }
}

export function PowerUpMovement(theCanvas, theContext, powerUpObject, paddleObject, playerObject) {
    let data = new PowerUp(powerUpObject.x, powerUpObject.y, powerUpObject.rad)
    
    if(powerUpObject.taken == false) {
        powerUpObject.y += powerUpObject.speedY; // move the ball based on its current horizontal speed 
        data.drawPowerUp(theContext)

            // console.log(powerUpObject.x) 
            // console.log(powerUpObject.y) 
            if(powerUpObject.y >= theCanvas.height - (paddleObject.PADDLE_THICKNESS + paddleObject.DISTANCE_FROM_BOTTOM)
            && powerUpObject.y <= theCanvas.height - paddleObject.PADDLE_THICKNESS) 
            {
                if(powerUpObject.x > paddleObject.paddleX 
                && powerUpObject.x < paddleObject.paddleX + paddleObject.PADDLE_WIDTH)
                { // horizontally too?
                    playerObject.livesRemaining += 2
                    powerUpObject.taken = true
                    return
                }         
            }
    }
    


}

