export default function BrickCollision(ballObject, bricksPerRow, level, bricks) {

    // console.log(bricks)
    for(let c=0; c<bricksPerRow * level; c++) {

        let b = bricks[c];

        console.table(bricks)

        if(b.broke == false) {
            if(ballObject.x > b.x && ballObject.x < b.x+b.width && ballObject.y > b.y && ballObject.y < b.y+b.height) {
                ballObject.dy = -ballObject.dy;
                b.broke = true;
            }
        }

    }

}
