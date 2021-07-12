export function BallMovement(TheContext, ballObject) {
    let data = new Ball(ballObject.x, ballObject.y, ballObject.rad)
    data.draw(TheContext)
    ballObject.x += 8
    ballObject.x += ballObject.dx
    // ballObject.y += ballObject.dy
}

class Ball {
    constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
    }

    draw(TheContext) {
        TheContext.beginPath()
            
        TheContext.fillStyle = 'red'
        TheContext.arc(this.x, this.y, this.rad, 0, 2*Math.PI)
        TheContext.strokeStyle = 'black'
        TheContext.strokeWidth = 4
        
        TheContext.fill()
        TheContext.stroke()
    }
}