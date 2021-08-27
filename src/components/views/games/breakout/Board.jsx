import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
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
let { ballObject, paddleObject, bricksetObject, playerObject, powerUpObject } =
  data

// const FRAMES_PER_SECOND = 30

export default function Board({
  setGameEnded = () => {},
  setGameStarted = () => {},
  gamePaused = () => {}

}) {
  const canvasRef = useRef(null)

  let brickGrid = new Array(
    bricksetObject.BRICK_COLUMNS * (bricksetObject.BRICK_ROWS + playerObject.level)
  )
  // let bricksLeft = bricksetObject.BRICK_COLUMNS * bricksetObject.BRICK_ROWS

  useEffect(() => {
    const theCanvas = canvasRef.current
    const theContext = theCanvas.getContext('2d')

    // let canvasPosition = theCanvas.getBoundingClientRect()
    const render = () => {
  
        let canvasPosition = theCanvas.getBoundingClientRect()

        paddleObject.paddleXOffset = canvasPosition?.x || 0

        // console.log({ ballX: ballObject.ballX, ballY: ballObject.ballY })

        // clear the game view
        theContext.clearRect(0, 0, theCanvas.width, theCanvas.height)

        DrawUiText(
            theCanvas,
            theContext,
            `Left to go: ${bricksetObject.bricksLeft}`,
            50,
            30
        )
        DrawUiText(theCanvas, theContext, `Score: ${playerObject.score}`, 250, 30)
        DrawUiText(theCanvas, theContext, `Level: ${playerObject.level}`, 380, 30)

        LivesManagement(theCanvas, theContext, playerObject)

        Brickset(
            theContext,
            theCanvas,
            bricksetObject,
            brickGrid,
            ballObject,
            playerObject,
            powerUpObject
        )
        WallCollision(
            ballObject,
            theCanvas,
            theContext,
            paddleObject,
            bricksetObject,
            brickGrid,
            playerObject,
            powerUpObject
        )

        BallMovement(theContext, ballObject)
        Paddle(theContext, theCanvas, paddleObject, ballObject)

        if (bricksetObject.specialBrickDestroyed) {
          PowerUpMovement(
              theCanvas,
              theContext,
              powerUpObject,
              paddleObject,
              playerObject
          )
        }

        if (playerObject.livesRemaining >= 0) {
          if(data.playerObject.gameStatus === 'run') {
            requestAnimationFrame(render)
          } else if(data.playerObject.gameStatus === 'paused') {
            DrawUiText(theCanvas, theContext, 'Paused', theCanvas.width/2-30, theCanvas.height/2)
          }
        } else {
          setGameEnded()
        }
      
    }

    ResetTheBricks(playerObject, bricksetObject, brickGrid, powerUpObject)
    ResetTheBall(theCanvas, theContext, ballObject)

    render()

    const handleKeyDown = (e) => {
      if (e.code === 'KeyP') {
        if(data.playerObject.gameStatus == 'paused') {
          data.playerObject.gameStatus = 'run'
          render()
        } else if (data.playerObject.gameStatus == 'run') {
          
          data.playerObject.gameStatus = 'paused'
          // (theCanvas, theContext, theFillText, x, y)
        }
        console.log(data.playerObject.gameStatus)
      }
    }
    
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Canvas
      height="500px"
      width="800px"
      // onKeyPress = {}
      onMouseMove={(event) =>
        (paddleObject.paddleX =
          event.clientX -
          paddleObject.PADDLE_WIDTH / 2 -
          paddleObject.paddleXOffset)
      }
      ref={canvasRef}
    />
  )
}

const Canvas = styled.canvas`
  background-color: #134959;
`
