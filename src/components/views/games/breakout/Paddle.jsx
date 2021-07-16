export default (theContext, theCanvas, paddleProps, ballObject) => {
    class Paddle {
      constructor(x) {
        this.x = x;
        this.y = theCanvas.height - 12;
        this.height = 10;
        this.width = paddleProps.width;
        this.colors = ["red", "#FFA62B"];
      }
      move() {
        theContext.beginPath();
        theContext.rect(this.x, this.y, this.width, this.height);
        theContext.fillStyle = this.broke ? "white" : this.colors[1];
        theContext.strokeStyle = this.broke ? "white" : "red";
        theContext.lineWidth = 1;
        theContext.fillStyle = this.broke ? "white" : this.colors[1];
        theContext.shadowBlur = 0;
        theContext.shadowColor = "blue";
        theContext.strokeRect(this.x, this.y, this.width, this.height);
        theContext.fill();
      }
    }
  
    let paddle = new Paddle(paddleProps.x);

    paddle.move();

    if(ballObject.y + ballObject.rad > theCanvas.height) {
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