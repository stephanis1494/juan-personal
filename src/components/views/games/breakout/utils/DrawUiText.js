export default function DrawUiText(theCanvas, theContext, theFillText, x, y) {
    theContext.font = '20px Arial'
    theContext.fillColor = 'white'
    theContext.fillText(`${theFillText}`, x, y )
}