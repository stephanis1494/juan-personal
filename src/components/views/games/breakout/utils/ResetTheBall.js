export default function ResetTheBall(theCanvas, theContext, ballObject, playerObject) { ////
    
    const rndInt = Math.floor(Math.random() * (theCanvas.width-ballObject.ballRadius*4)) + ballObject.ballRadius*4
    ballObject.ballX = rndInt
    // ballObject.ballX = theCanvas.width/2; ////
    ballObject.ballY = theCanvas.height/2.5; ////
    ballObject.ballSpeedY = ballObject.initialBallSpeedY
    
    // generate a random X speef for the ball between ballX and -ballX
    ballObject.ballSpeedX = Math.floor(Math.random() * ballObject.ballSpeedX) + (ballObject.ballSpeedX *+ -1)
    playerObject.comboStatus = false
} ////