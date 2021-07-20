export default function DrawUiText(theCanvas, theContext, theFillText, x, y) {
    theContext.font = '20px Arial'
    theContext.fillText(`${theFillText}`, x, y )
}