
export default (theContext, theCanvas, bricksetObject) => {

    let brickGrid = new Array(bricksetObject.BRICK_COLUMNS * bricksetObject.BRICK_ROWS).fill(0)

    class Brickset {
        constructor() {
            this.BRICK_WIDTH = theCanvas.width/10;
            this.BRICK_HEIGHT = bricksetObject.BRICK_HEIGHT;
            this.BRICK_GAP = bricksetObject.BRICK_GAP;
            this.BRICK_COLUMNS = bricksetObject.BRICK_COLUMNS;
            this.BRICK_ROWS = bricksetObject.BRICK_ROWS;
        }
    
        drawBricks(theContext) { ////
            // alert('hi')

            for(let eachCol=0; eachCol<this.BRICK_COLUMNS; eachCol++) { // in each column... ////
                                
                for(let eachRow=0; eachRow<this.BRICK_ROWS; eachRow++) { // in each row within that col ////
                   
                    if( isBrickAtTileCoord(eachCol, eachRow) ) {

                        // compute the corner in pixel coordinates of the corresponding brick ////
                        // multiply the brick's tile coordinate by BRICK_W or BRICK_H for pixel distance ////
                        let brickLeftEdgeX = eachCol * this.BRICK_WIDTH; ////
                        let brickTopEdgeY = eachRow * this.BRICK_HEIGHT; ////
        
                        theContext.fillStyle = 'white'; ////
                        theContext.beginPath();
                        
                        theContext.fillRect(brickLeftEdgeX, brickTopEdgeY, this.BRICK_WIDTH-this.BRICK_GAP, this.BRICK_HEIGHT-this.BRICK_GAP); ////
                        theContext.fill();
        
                        // console.log(brickLeftEdgeX)
                    }
            
            } // end of for eachRow ////
        } // end of for eachCol ////
    
        } // end of drawBricks() ////
    
    }

    function isBrickAtTileCoord(brickTileColumn, brickTileRow) { ////

        let brickIndex = brickTileColumn + bricksetObject.BRICK_COLUMS*brickTileRow; ////
        return (brickGrid[brickIndex] !== 1); ////

    } ////

    function resetTheBricks() { ////

        for(let i=0; i<bricksetObject.BRICK_COLUMNS * bricksetObject.BRICK_ROWS; i++) { ////
          if(Math.random() < 0.5) { // only fill in half the bricks, to test display ////
            brickGrid[i] = 1; ////
          } else { ////
            brickGrid[i] = 0; ////
          }
        } ////

      } ////

      
    
    let brickset = new Brickset()

    brickset.drawBricks(theContext)

}

