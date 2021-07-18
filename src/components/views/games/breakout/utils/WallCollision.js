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

    if(ballObject.ballY > theCanvas.height - paddleObject.paddleY) { // if ball has moved beyond the bottom edge

        if(ballObject.ballX > paddleObject.paddleX && ballObject.ballX < paddleObject.paddleX+paddleObject.PADDLE_WIDTH)
        {
            ballObject.ballSpeedY *= -1; // reverse ball's vertical direction

            var deltaX = ballObject.ballX-(paddleObject.paddleX+paddleObject.PADDLE_WIDTH/2); ////
            ballObject.ballSpeedX = deltaX * 0.15; ////
            console.log(ballObject.ballSpeedY)
            console.log(deltaX)
        } else {
            ballObject.ballX = theCanvas.width/2; ////
            ballObject.ballY = theCanvas.height/1.1; ////
            ballObject.ballSpeedY *= -1;
            ballObject.ballSpeedX = 5
        }
      
    }

}