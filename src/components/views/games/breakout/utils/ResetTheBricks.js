export default function ResetTheBricks(bricksetObject, brickGrid) { ////

    for(let i=0; i<bricksetObject.BRICK_COLUMNS * bricksetObject.BRICK_ROWS; i++) { ////
        brickGrid[i] = 1; ////
    } ////

} ////