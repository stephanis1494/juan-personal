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
import ResetGame from './utils/ResetGame'
let { ballObject, paddleObject, bricksetObject, playerObject, powerUpObject } =
  data

// const FRAMES_PER_SECOND = 30

/*const registerScore = async e => {
  // pass to a function later
  try {
    const body = {
      "score": playerObject.score,
      "player_name": playerObject.name,
      "level": playerObject.level
    }
    const response = await fetch('http://localhost:5000/new_score', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })

    //  console.log(response)
    // window.location = '/'
  } catch (error) {
      console.error(error.message)
  }
}*/

export default function Board({ setGameEnded = () => {}, }) {

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

        // the offset to compensate for the X position where the CANVAS begins
        paddleObject.paddleXOffset = canvasPosition?.x || 0

        // clear the game view
        theContext.clearRect(0, 0, theCanvas.width, theCanvas.height)

        DrawUiText(
            theCanvas,
            theContext,
            `bricks: ${bricksetObject.bricksLeft}`,
            50,
            30
        )
        DrawUiText(theCanvas, theContext, playerObject.name, 50, theCanvas.height-10)
        DrawUiText(theCanvas, theContext, `scr: ${playerObject.score}`, 280, 30)
        DrawUiText(theCanvas, theContext, `lvl: ${playerObject.level}`, 380, 30)

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
        Paddle(theContext, theCanvas, paddleObject, ballObject)

        if (bricksetObject.specialBrickDestroyed && powerUpObject.y <= theCanvas.height) {
          PowerUpMovement(
              theCanvas,
              theContext,
              powerUpObject,
              paddleObject,
              playerObject
          )
        }

        if (playerObject.livesRemaining >= 0) {

          if(playerObject.ballLaunched){
            BallMovement(theContext, ballObject)
          }

          if(playerObject.gameStatus === 'run') {
            requestAnimationFrame(render)
          } else if(playerObject.gameStatus === 'paused') {
            DrawUiText(theCanvas, theContext, 'press P to resume', theCanvas.width/2-60, theCanvas.height/2)
          }

        } else {
          // registerScore()
          ResetGame()
          setGameEnded()

        }

    }

    ResetTheBricks(playerObject, bricksetObject, brickGrid, powerUpObject)


    const handleKeyDown = (e) => {
      if(e.code === 'KeyS' && playerObject.ballLaunched === false) {
        ResetTheBall(theCanvas, theContext, ballObject, playerObject)
        playerObject.ballLaunched = true
      }

      if (e.code === 'KeyP') {
        if(data.playerObject.gameStatus == 'paused') {
          data.playerObject.gameStatus = 'run'
          render()
        } else if (data.playerObject.gameStatus == 'run') {

          data.playerObject.gameStatus = 'paused'
          // (theCanvas, theContext, theFillText, x, y)
        }
        // console.log(data.playerObject.gameStatus)
      }
    }

    render()

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Canvas
      height="500px"
      width="800px"
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
