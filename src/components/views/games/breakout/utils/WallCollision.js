import data from "../data";
import ResetTheBall from "./ResetTheBall";
import ResetTheBricks from "./ResetTheBricks";

export default function WallCollision(
    ballObject, 
    theCanvas, 
    theContext, 
    paddleObject, 
    bricksetObject, 
    brickGrid, 
    playerObject, 
    powerUpObject) {

    if(ballObject.ballX < 0 + ballObject.ballRadius) { // if ball has moved beyond the left edge
        ballObject.ballSpeedX *= -1; // reverse ball's horizontal direction
    }

    if(ballObject.ballX > theCanvas.width - ballObject.ballRadius) { // if ball has moved beyond the right edge
        ballObject.ballSpeedX *= -1; // reverse ball's horizontal direction
    }

    if(ballObject.ballY < 0) { // if ball has moved beyond the top edge
        ballObject.ballSpeedY *= -1; // reverse ball's vertical direction
    }

    if(ballObject.ballSpeedY > 0.0) {
        // console.log(ballObject.ballSpeedY)
        
        if(ballObject.ballY >= theCanvas.height - (paddleObject.PADDLE_THICKNESS + paddleObject.DISTANCE_FROM_BOTTOM)
           && ballObject.ballY <= theCanvas.height - paddleObject.PADDLE_THICKNESS) 
        {
            if(ballObject.ballX > paddleObject.paddleX 
              && ballObject.ballX < paddleObject.paddleX + paddleObject.PADDLE_WIDTH)
            { // horizontally too?

                ballObject.ballSpeedY *= -1; // reverse ball's vertical direction

                if(bricksetObject.bricksLeft == 0) { ////
                    data.playerObject.level++
                    ResetTheBricks(playerObject, bricksetObject, brickGrid, powerUpObject) ////
                } ////

                playerObject.comboStatus = false

                let deltaX = ballObject.ballX-(paddleObject.paddleX+paddleObject.PADDLE_WIDTH/2);
                ballObject.ballSpeedX = deltaX * 0.35;

            }         
                
        }

    }
    if(ballObject.ballY > theCanvas.height) { // if ball has moved beyond the bottom edge
        playerObject.livesRemaining--      
        playerObject.ballLaunched = false
        ResetTheBall(theCanvas, theContext, ballObject, playerObject)
    }

}