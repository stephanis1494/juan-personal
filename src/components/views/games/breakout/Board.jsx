import React, { useRef, useEffect } from 'react'
import styled from "styled-components"
import data from './data'
import { BallMovement } from './BallMovement'
import WallCollision from './utils/WallCollision';
import Paddle from './Paddle';
import Brick from './Brick';

let { ballObject, paddleProps, brickObject } = data

let bricks = []

export default function Board() {
    const canvasRef = useRef(null)

    useEffect(() => {

        const TheCanvas = canvasRef.current
        const TheContext = TheCanvas.getContext('2d')
        
        const render = () => {

            // Assign bricks
            let newBrickSet = Brick(2, bricks, brickObject, TheCanvas)
            
            if(newBrickSet && newBrickSet.length > 0) {
                bricks = newBrickSet
            }

            TheContext.clearRect(0, 0, TheCanvas.width, TheCanvas.height);

            bricks.map((brick) => {
                return brick.draw(TheContext)
            })
            // Handle Ball Movement
            BallMovement(TheContext, ballObject)
            
            WallCollision(TheCanvas, ballObject)

            Paddle(TheContext, TheCanvas, paddleProps)

            requestAnimationFrame(render)

            // console.log(TheCanvas.clientX)
            
        }

        render()
        console.table(bricks)
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
    /* width: 800;    
    height: 600; */
    border: 3px solid red;
    background-color: #134959;
`