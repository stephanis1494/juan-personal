export default function ResetTheBall(theCanvas, theContext, ballObject) { ////
    ballObject.ballX = theCanvas.width/2; ////
    ballObject.ballY = theCanvas.height/1.2; ////
    ballObject.ballSpeedY *= -1;
    ballObject.ballSpeedX = 5
   
} ////