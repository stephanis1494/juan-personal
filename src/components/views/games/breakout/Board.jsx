import React, { useRef, useEffect, useState, Fragment } from 'react'
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
import { PowerUpMovement } from './PowerUp'
let {
    ballObject,
    paddleObject,
    bricksetObject,
    playerObject,
    powerUpObject,
} = data


// const FRAMES_PER_SECOND = 30

export default function Board() {
    const canvasRef = useRef(null)
    const [gameStarted, setGameStarted] = useState(false)

    let brickGrid = new Array(bricksetObject.BRICK_COLUMNS * bricksetObject.BRICK_ROWS)
    // let bricksLeft = bricksetObject.BRICK_COLUMNS * bricksetObject.BRICK_ROWS

    const handleKeyDown = (e) => {
        if (e.code === 'Space' && !gameStarted) {
            setGameStarted(true)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [gameStarted])

    useEffect(() => {
        if (gameStarted) {
            const theCanvas = canvasRef.current
            const theContext = theCanvas.getContext('2d')

            // let canvasPosition = theCanvas.getBoundingClientRect()
            const render = () => {

                // clear the game view
                theContext.clearRect(0, 0, theCanvas.width, theCanvas.height);

                DrawUiText(theCanvas, theContext, `Left to go: ${bricksetObject.bricksLeft}`, 50, 30)
                DrawUiText(theCanvas, theContext, `Score: ${playerObject.score}`, 250, 30)

                LivesManagement(theCanvas, theContext, playerObject)
                Brickset(theContext, theCanvas, bricksetObject, brickGrid, ballObject, playerObject, powerUpObject)
                WallCollision(ballObject, theCanvas, theContext, paddleObject, bricksetObject, brickGrid, playerObject, powerUpObject)

                BallMovement(theContext, ballObject)
                Paddle(theContext, theCanvas, paddleObject, ballObject)

                if(bricksetObject.specialBrickDestroyed) {
                    PowerUpMovement(theCanvas, theContext, powerUpObject, paddleObject, playerObject)
                }

                if(playerObject.livesRemaining >= 0) {
                    requestAnimationFrame(render)

                } else {
                    return
                }

            }

            ResetTheBricks(bricksetObject, brickGrid, powerUpObject)
            ResetTheBall(theCanvas, theContext,ballObject)

            render()
        }
    }, [gameStarted])

    return (
        <GameContainer>
            {
                gameStarted ?
                    <Canvas
                        height='500px'
                        width='800px'
                        // onKeyPress = {}
                        onMouseMove = {(event) => paddleObject.paddleX = event.clientX - (paddleObject.PADDLE_WIDTH / 2) }
                        ref={ canvasRef }
                    /> :
                    <StartScreen>
                        <h1>BREAK THE HECK OUT!</h1>
                        <p>press spacebar to start</p>
                    </StartScreen>
            }
        </GameContainer>
    )
}

const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Canvas = styled.canvas`
    background-color: #134959;
`

const StartScreen = styled.div`
    font-weight: 600;
    font-family: 'Press Start 2P', cursive;
    color: white;
    
    height: 500px;
    width: 800px;
    background: #134959;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
