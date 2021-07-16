export default (theContext, theCanvas, paddleProps, ballObject) => {
    class Paddle {
      constructor(x) {
        this.x = x;
        this.y = theCanvas.height - paddleProps.height;
        this.height = paddleProps.height;
        this.width = paddleProps.width;
        this.colors = [paddleProps.color,];
      }
      move() {
        theContext.beginPath();
        theContext.fillStyle = this.colors[0];
        theContext.rect(this.x, this.y, this.width, this.height);
        // theContext.strokeRect(this.x, this.y, this.width, this.height);
        theContext.fill();
      }
    }

    let paddle = new Paddle(paddleProps.x);

    paddle.move();

    if(ballObject.y + ballObject.rad > theCanvas.height-paddleProps.height) {
      if(ballObject.x >= paddleProps.x && ballObject.x <= paddleProps.x + paddleProps.width) {
        ballObject.dy *= -1;
      }
    }

    if (paddleProps.x <= 0) {
      paddleProps.x = 0;
    } else if (paddleProps.x + paddleProps.width >= theCanvas.width) {
      paddleProps.x = theCanvas.width - paddleProps.width;
    }
  };