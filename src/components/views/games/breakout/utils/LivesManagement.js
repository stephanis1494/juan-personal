export default function LivesManagement(theCanvas, theContext, playerObject) {
    let xPositionAdd = 10
    for(let i = 1; i<=playerObject.livesRemaining; i++) {
        theContext.fillStyle = 'white';
        theContext.beginPath();
        theContext.arc((theCanvas.width - 200)+xPositionAdd, 25, 5, 0, Math.PI*2, true); 
        theContext.fill();
        xPositionAdd+=25
    }
}