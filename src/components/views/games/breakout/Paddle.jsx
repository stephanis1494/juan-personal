export default (theContext, theCanvas, paddleObject, ballObject) => {
  class Paddle {
    constructor(x) {
      this.x = x;
      this.y = theCanvas.height - paddleObject.PADDLE_THICKNESS - paddleObject.paddleY;
      this.height = paddleObject.PADDLE_THICKNESS;
      this.width = paddleObject.PADDLE_WIDTH;
    }
    drawPaddle() {
      theContext.fillStyle = 'white'; ////
      theContext.beginPath();
      theContext.fillRect(this.x, this.y, this.width, this.height); ////
      theContext.fill();
    }
    
  }

  let paddle = new Paddle(paddleObject.paddleX);

  paddle.drawPaddle();

};