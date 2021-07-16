import React, { useRef, useEffect } from 'react'
import styled from "styled-components"
import data from './data'
import { BallMovement } from './BallMovement'
import WallCollision from './utils/WallCollision';
import Paddle from './Paddle';
import Brick from './Brick';
import BrickCollision from './utils/BrickCollision';

let { ballObject, paddleProps, brickObject, player } = data

let bricks = []

export default function Board() {
    const canvasRef = useRef(null)

    useEffect(() => {
        
        const TheCanvas = canvasRef.current
        const TheContext = TheCanvas.getContext('2d')
        
        // Assign bricks
        let newBrickSet = Brick(4, bricks, brickObject, TheCanvas)
        
        const render = () => {

            if(newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet
            }

            TheContext.clearRect(0, 0, TheCanvas.width, TheCanvas.height);

            bricks.map((brick) => {
                // console.log(brick)
                if(!brick.broke) {
                    return brick.draw(TheContext)
                }
            })

            TheContext.font = "30px Arial";
            TheContext.fillText(player.lives, 10, 50); 
            
            // Handle Ball Movement
            BallMovement(TheContext, ballObject)

                        // the ball, bricks per row, level, bricks
            BrickCollision(ballObject, 5, 4, bricks)

            WallCollision(TheCanvas, ballObject, player)

            Paddle(TheContext, TheCanvas, paddleProps, ballObject)

            if(player.lives > 0){
                requestAnimationFrame(render)
            }

            // console.log(TheCanvas.clientX)
            
        }

        render()
        
    })

    // function getMousePosition(canvas, event) {
    //     let rect = canvas.getBoundingClientRect();
    //     let x = event.clientX - rect.left;
    //     let y = event.clientY - rect.top;
    //     console.log("Coordinate x: " + x, 
    //                 "Coordinate y: " + y);
    // }
    
    return <Canvas 
                height='500px'
                width='800px'
                onMouseMove = {(event) => paddleProps.x = event.clientX - paddleProps.width / 2}
                ref={ canvasRef }
            />
}

const Canvas = styled.canvas`
    background-color: #134959;
`