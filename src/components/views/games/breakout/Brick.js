export default function Brick(level, bricks, brick, theCanvas) {
    
    const BRICKS_PER_ROW = 5
    const SPACE_BETWEEN_BRICKS = 5
    brick.width = theCanvas.width / BRICKS_PER_ROW - SPACE_BETWEEN_BRICKS - 5
    
    let newBricks = []

    if(!bricks) {
        return []
    }
    
    // if all the levels are filled don't add any more bricks
    if(bricks.lenght >= BRICKS_PER_ROW*level) {
        return
    }

    for(let i = 0;  i < BRICKS_PER_ROW * level; i++) {
        let newBrick = new SingleBrick(
            brick.x += (brick.width + SPACE_BETWEEN_BRICKS),
            brick.y,
            brick.width,
            brick.height,
            brick.colors
        )

        newBricks.push(newBrick)

        if(brick.x + brick.width >= theCanvas.width) {
            brick.x = SPACE_BETWEEN_BRICKS
            brick.y += brick.height + SPACE_BETWEEN_BRICKS
        }
    }

    return newBricks

}

class SingleBrick {
    constructor(x, y, w, h, c) {
        this.x = x - w;
        this.y = y;
        this.width = w;
        this.height = h;
        this.colors = c;
        this.broke = false;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.broke ? "rgba(19, 73, 89, 0)" : this.colors[1];
  
      ctx.lineWidth = 1;
      ctx.strokeStyle = this.broke ? "rgba(19, 73, 89, 0)" : "transparent";
      // ctx.globalCompositeOperation = "destination-atop";
      // ctx.shadowBlur = 0;
      // ctx.shadowColor = "blue";
      ctx.fill();
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}
  
