import React, { useRef, useEffect } from 'react'
import styled from "styled-components"
import { BallMovement } from './Ball'
import data from './data'
import Paddle from './Paddle'
import WallCollision from './utils/WallCollision'

let { ballObject, paddleObject } = data

// const FRAMES_PER_SECOND = 30

export default function Board() {
    const canvasRef = useRef(null)

    useEffect(() => {
        
        const theCanvas = canvasRef.current
        const theContext = theCanvas.getContext('2d')
        
        const render = () => {

            // clear the game view
            theContext.clearRect(0, 0, theCanvas.width, theCanvas.height);
            
            WallCollision(ballObject, theCanvas, paddleObject)
            BallMovement(theContext, ballObject)
            Paddle(theContext, theCanvas, paddleObject, ballObject)

            requestAnimationFrame(render)

        }

        render()
        
    })

    return <Canvas 
                height='500px'
                width='800px'
                onMouseMove = {(event) => paddleObject.paddleX = event.clientX - (paddleObject.PADDLE_WIDTH / 2) }
                ref={ canvasRef }
            />
}

const Canvas = styled.canvas`
    background-color: #134959;
`