import brickTileToIndex from "./brickTileToIndex";

export default function ResetTheBricks(bricksetObject, brickGrid) { ////
    
    // bricksetObject.bricksDestroyed = 0

    for(let eachRow=0; eachRow<bricksetObject.BRICK_ROWS; eachRow++) { ////
        for(let eachCol=0; eachCol<bricksetObject.BRICK_COLUMNS; eachCol++) {
            let brickIndex = brickTileToIndex(eachCol, eachRow, bricksetObject)
            if(eachRow >= 3) {
                brickGrid[brickIndex] = 1; ////
                bricksetObject.bricksLeft++
            }
        }
    } ////

} ////