export default function WallCollision(ballObject, theCanvas, paddleObject) {

    if(ballObject.ballX < 0) { // if ball has moved beyond the left edge
        ballObject.ballSpeedX *= -1; // reverse ball's horizontal direction
    }

    if(ballObject.ballX > theCanvas.width) { // if ball has moved beyond the right edge
        ballObject.ballSpeedX *= -1; // reverse ball's horizontal direction
    }

    if(ballObject.ballY < 0) { // if ball has moved beyond the top edge
        ballObject.ballSpeedY *= -1; // reverse ball's vertical direction
    }

    if(ballObject.ballSpeedY > 0.0) {
        console.log(ballObject.ballSpeedY)
        
        if(ballObject.ballY >= theCanvas.height - (paddleObject.PADDLE_THICKNESS + paddleObject.DISTANCE_FROM_BOTTOM)
           && ballObject.ballY <= theCanvas.height - paddleObject.PADDLE_THICKNESS) 
        {
            if(ballObject.ballX > paddleObject.paddleX 
              && ballObject.ballX < paddleObject.paddleX + paddleObject.PADDLE_WIDTH)
            { // horizontally too?

                ballObject.ballSpeedY *= -1; // reverse ball's vertical direction
                
                let deltaX = ballObject.ballX-(paddleObject.paddleX+paddleObject.PADDLE_WIDTH/2);
                ballObject.ballSpeedX = deltaX * 0.35;

            }         
                
        }

    }
    if(ballObject.ballY > theCanvas.height) { // if ball has moved beyond the bottom edge
        ballObject.ballX = theCanvas.width/2; ////
        ballObject.ballY = theCanvas.height/1.2; ////
        ballObject.ballSpeedY *= -1;
        ballObject.ballSpeedX = 5
      
    }

}