import React, { useRef, useEffect } from 'react'
import styled from "styled-components"
import { BallMovement } from './Ball'
import data from './data'
import Paddle from './Paddle'
import WallCollision from './utils/WallCollision'
import Brickset from './Brick'
import ResetTheBricks from './utils/ResetTheBricks'
import ResetTheBall from './utils/ResetTheBall'
import DrawUiText from './utils/DrawUiText'
import LivesManagement from './utils/LivesManagement'


let { ballObject, paddleObject, bricksetObject, playerObject } = data

// const FRAMES_PER_SECOND = 30

export default function Board() {
    const canvasRef = useRef(null)

    let brickGrid = new Array(bricksetObject.BRICK_COLUMNS * bricksetObject.BRICK_ROWS)
    // let bricksLeft = bricksetObject.BRICK_COLUMNS * bricksetObject.BRICK_ROWS
    
    useEffect(() => {
        
        const theCanvas = canvasRef.current
        const theContext = theCanvas.getContext('2d')
        
        const render = () => {
            
            // clear the game view
            theContext.clearRect(0, 0, theCanvas.width, theCanvas.height);
            
            DrawUiText(theCanvas, theContext, `Left to go: ${bricksetObject.bricksLeft}`, 50, 30)
            DrawUiText(theCanvas, theContext, `Score: ${playerObject.score}`, 250, 30)

            LivesManagement(theCanvas, theContext, playerObject)
            Brickset(theContext, theCanvas, bricksetObject, brickGrid, ballObject, playerObject)
            WallCollision(ballObject, theCanvas, theContext, paddleObject, bricksetObject, brickGrid, playerObject)
            BallMovement(theContext, ballObject)
            Paddle(theContext, theCanvas, paddleObject, ballObject)
            
            if(playerObject.livesRemaining >= 0) {
                requestAnimationFrame(render)

            } else {
                return
            }
            
        }
        
        ResetTheBricks(bricksetObject, brickGrid)
        ResetTheBall(theCanvas, theContext,ballObject)
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