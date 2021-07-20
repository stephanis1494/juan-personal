/* eslint-disable import/no-anonymous-default-export */

export default (theContext, theCanvas, bricksetObject, brickGrid, ballObject) => {

    class Brickset {
        constructor() {
            this.BRICK_WIDTH = theCanvas.width/10;
            this.BRICK_HEIGHT = bricksetObject.BRICK_HEIGHT;
            this.BRICK_GAP = bricksetObject.BRICK_GAP;
            this.BRICK_COLUMNS = bricksetObject.BRICK_COLUMNS;
            this.BRICK_ROWS = bricksetObject.BRICK_ROWS;
        }
    
        drawBricks(theContext) { ////

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

        breakAndBounceOffBrickAtPixelCoord(pixelX,pixelY) { ////
            let tileCol = pixelX / bricksetObject.BRICK_WIDTH; ////
            let tileRow = pixelY / bricksetObject.BRICK_HEIGHT; ////
            
            // we'll use Math.floor to round down to the nearest whole number ////
            tileCol = Math.floor( tileCol ); ////
            tileRow = Math.floor( tileRow ); ////
        
            // first check whether the ball is within any part of the brick wall
            if(tileCol < 0 || tileCol >= bricksetObject.BRICK_COLUMNS || ////
               tileRow < 0 || tileRow >= bricksetObject.BRICK_ROWS) { ////
               return; // bail out of function to avoid illegal array position usage ////
            } ////
            
            let brickIndex = brickTileToIndex(tileCol, tileRow); ////

            if(brickGrid[brickIndex] == 1) { ////
                // ok, so we know we overlap a brick now. ////
                // let's backtrack to see whether we changed rows or cols on way in ////
                let prevBallX = ballObject.ballX-ballObject.ballSpeedX; ////
                let prevBallY = ballObject.ballY-ballObject.ballSpeedY; ////
                let prevTileCol = Math.floor(prevBallX / bricksetObject.BRICK_WIDTH); ////
                let prevTileRow = Math.floor(prevBallY / bricksetObject.BRICK_HEIGHT); ////

                let bothTestsFailed = true; ////

                if(prevTileCol != tileCol) { // must have come in horizontally ////
                    ballObject.ballSpeedX *= -1; ////
                    bothTestsFailed = false; ////
                } ////

                if(prevTileRow != tileRow) { // must have come in vertically ////
                    ballObject.ballSpeedY *= -1; ////
                    bothTestsFailed = false; ////
                } ////

                    // we hit an "armpit" on the inside corner, this blocks going into it ////
                    if(bothTestsFailed) { ////
                        ballObject.ballSpeedX *= -1; ////
                        ballObject.ballSpeedY *= -1; ////
                    } ////

                    brickGrid[brickIndex] = 0;
                    bricksetObject.bricksLeft--
            } ////

        } ////
    
    }

    function brickTileToIndex(tileCol, tileRow) { ////
        return (tileCol + bricksetObject.BRICK_COLUMNS*tileRow); ////
      } ////

    function isBrickAtTileCoord(brickTileColumn, brickTileRow) { ////

        let brickIndex = brickTileToIndex(brickTileColumn, brickTileRow); ////
        return (brickGrid[brickIndex] == 1); ////

    } ////

    let brickset = new Brickset()

    brickset.breakAndBounceOffBrickAtPixelCoord(ballObject.ballX, ballObject.ballY)
    brickset.drawBricks(theContext)

}

