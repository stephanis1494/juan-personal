export default function brickTileToIndex(tileCol, tileRow, bricksetObject) {
    return (tileCol + bricksetObject.BRICK_COLUMNS * tileRow)
}