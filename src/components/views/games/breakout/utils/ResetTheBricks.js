import brickTileToIndex from './brickTileToIndex'

export default function ResetTheBricks(
  playerObject,
  bricksetObject,
  brickGrid,
  powerUpObject
) {
  ////

  // calculate the number of bricks to count
  let brickRowsMinusEmpty =
    (bricksetObject.BRICK_ROWS - bricksetObject.emptyRows + playerObject.level) *
    bricksetObject.BRICK_COLUMNS

  bricksetObject.bricksLeft = brickRowsMinusEmpty

  // total of bricks, counting the invisible ones in the empty row
  // let totalBricks = bricksetObject.BRICK_ROWS * bricksetObject.BRICK_COLUMNS

  // 
  let totalBricks = bricksetObject.BRICK_ROWS * bricksetObject.BRICK_COLUMNS
  
  let totalInvisibleBricks = bricksetObject.emptyRows * bricksetObject.BRICK_COLUMNS

  let specialBrickIndex = Math.floor(
    totalInvisibleBricks + Math.random() * totalBricks
  )

  // specialBrickIndex = 79
  /////////////////

  bricksetObject.specialBrickDestroyed = false
  powerUpObject.taken = false

  // iterate on each brick's row, even the empty ones
  for (let eachRow = 0; eachRow < bricksetObject.BRICK_ROWS+playerObject.level; eachRow++) {
    ////
    for (let eachCol = 0; eachCol < bricksetObject.BRICK_COLUMNS; eachCol++) {
      
      let brickIndex = brickTileToIndex(eachCol, eachRow, bricksetObject)
      
      if (eachRow >= bricksetObject.emptyRows) {
        if (specialBrickIndex == brickIndex) {
          brickGrid[brickIndex] = 2 //// configurar en 2 luego
          // bricksetObject.bricksLeft++
        } else {
          brickGrid[brickIndex] = 1 ////
          // bricksetObject.bricksLeft++
        }
      }

    }

  } ////
} ////
