export default function WallCollision(theCanvas, ballObject) {

    if(
        ballObject.y - ballObject.rad <= 0 ||
        ballObject.y + ballObject.rad >= theCanvas.height
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