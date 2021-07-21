import brickTileToIndex from "./brickTileToIndex";

export default function ResetTheBricks(bricksetObject, brickGrid) { ////
    
    // bricksetObject.bricksDestroyed = 0
    let brickRowsMinusEmpty = (bricksetObject.BRICK_ROWS-bricksetObject.emptyRows)*bricksetObject.BRICK_COLUMNS

    let totalBricks = (bricksetObject.BRICK_ROWS*bricksetObject.BRICK_COLUMNS)
    let specialBrickIndex = Math.floor(brickRowsMinusEmpty + Math.random() * totalBricks)
    
    for(let eachRow=0; eachRow<bricksetObject.BRICK_ROWS; eachRow++) { ////
        for(let eachCol=0; eachCol<bricksetObject.BRICK_COLUMNS; eachCol++) {
            let brickIndex = brickTileToIndex(eachCol, eachRow, bricksetObject)
            if(eachRow >= bricksetObject.emptyRows) {
                
                // console.log(brickIndex)
                // console.log(specialBrickIndex)
                if(specialBrickIndex == brickIndex) {
                    // brickGrid[brickColor] = 'blue'
                    brickGrid[brickIndex] = 2; //// configurar en 2 luego
                    bricksetObject.bricksLeft++
                } else {
                    brickGrid[brickIndex] = 1; ////
                    bricksetObject.bricksLeft++
                }
            }
        }
    } ////

} ////