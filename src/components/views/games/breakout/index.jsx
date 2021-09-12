import React, { useEffect, useState } from 'react'
import Board from './Board'
import styled, { keyframes } from 'styled-components'
import data from './data'

const GameContainer = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

export default function Breakout() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)

  const [playerName, setPlayerName] = useState('')
  const [nameSubmit, setNameSubmit] = useState(false)


  const handlePlayerName = (e) => {
    e.preventDefault()
    data.playerObject.name = playerName
    setNameSubmit(true)
    // alert(data.playerObject.name)
    console.log(nameSubmit)
  }

  const handleKeyDown = (e) => {
    if (e.code === 'Space' && !gameStarted) {
      e.stopPropagation()
      e.preventDefault()
      setGameEnded(false)
      setGameStarted(true)
    } 
  }

  const handleGameEnd = () => {
    setGameEnded(true)
    setGameStarted(false)
  }


  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
  return (
    <GameContainer>
      {gameEnded ? (
        <StartScreen>
          <h1>Game ended Amigo</h1>
          <p>Press Spacebar to Start</p>

        </StartScreen>
      ) : gameStarted ? (
        <Board setGameEnded={handleGameEnd} />
      ) : (
        <StartScreen>
          <h1>Break the Heck Out </h1>
          <NameDisplay>
            <Form action="#" onSubmit={handlePlayerName} nameSubmit={nameSubmit}>
              <input type="text" value={playerName} onChange={event => setPlayerName(event.target.value)}/>
              <button>set name</button>
            </Form>
          </NameDisplay>
          <WelcomePlayer nameSubmit={nameSubmit}>
            <p>Welcome, {playerName}. You ready to rock?</p>
          </WelcomePlayer>
          <p>Press Spacebar to Start</p>
        </StartScreen>
      )}
    </GameContainer>
  )
}

const StartScreen = styled.div`
  font-weight: 600;
  font-family: 'Press Start 2P', cursive;
  color: white;

  height: 500px;
  width: 800px;
  background: #000d1a;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NameDisplay = styled.div`
  display: flex;
  flex-direction: column;

`

const blinkIt = keyframes`
  50%  {
    opacity: 0;
  }
 
`

const WelcomePlayer = styled.div`
display: ${ p => p.nameSubmit ? 'flex' : 'none' };

animation: ${blinkIt} 1.5s linear infinite;

`

const Form = styled.form`
  display: ${ p => p.nameSubmit ? 'none' : 'flex' }
`
