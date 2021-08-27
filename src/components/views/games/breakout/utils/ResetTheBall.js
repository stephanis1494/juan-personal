export default function ResetTheBall(theCanvas, theContext, ballObject, playerObject) { ////
    ballObject.ballX = theCanvas.width/2; ////
    ballObject.ballY = theCanvas.height/2.5; ////
    ballObject.ballSpeedY *= 1;
    ballObject.ballSpeedX = ballObject.initialBallSpeedX
    playerObject.comboStatus = false
} ////