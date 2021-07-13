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

        this.x++
    }
}

let data = new Ball(0, 100, 10)

export function BallMovement(TheContext, ballObject) {
    data.draw(TheContext)
}
