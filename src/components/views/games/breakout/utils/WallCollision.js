export default function WallCollision(theCanvas, ballObject, playerObject) {

    if(ballObject.y + ballObject.rad >= theCanvas.height + ballObject.rad) {
        ballObject.dy *= -1
        ballObject.x = theCanvas.width/2
        ballObject.y = theCanvas.height/1.2 -
        playerObject.lives--
    }

    if(
        ballObject.y - ballObject.rad <= 0 
        // || ballObject.y + ballObject.rad >= theCanvas.height
    ) {
        ballObject.dy *= -1
    }
    
    if(
        ballObject.x + ballObject.rad >= theCanvas.width ||
        ballObject.x - ballObject.rad <= 0
    ) {
        ballObject.dx *= -1
    }

}