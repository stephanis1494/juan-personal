import React, { useEffect, useState } from 'react'
import Board from './Board'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import data from './data'
import { AiOutlineSend } from 'react-icons/ai'

const GameContainer = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

export default function Breakout() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)

  const [playerName, setPlayerName] = useState('')
  const [nameSubmit, setNameSubmit] = useState(false)

  const [highScores, setHighScores] = useState([])

  /*  const getScores = async() => {
      try {
          const response = await fetch('http://localhost:5000/get_top_three')

          const jsonData = await response.json()

          // console.log(jsonData)
          setHighScores(jsonData)
      } catch (error) {
          console.error(error.message)
      }
    }*/


  const handlePlayerName = (e) => {
    e.preventDefault()

    if(playerName.length > 2) {
      data.playerObject.name = playerName
      setNameSubmit(true)
      // alert(data.playerObject.name)
      // console.log(nameSubmit)
    }
  }

  const handleKeyDown = (e) => {
    if (e.code === 'Space' && !gameStarted && nameSubmit) {
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

    // is it okay to do the call here?
    // getScores()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])


  return (
    <GameContainer id='game-container'>
      {gameEnded ? (
        <StartScreen>
          <h1>Game ended Amigo</h1>
          <WelcomePlayer nameSubmit={nameSubmit}>Your score is: {data.playerObject.score}</WelcomePlayer>
          <PressSpace>Press Spacebar to Restart</PressSpace>

        </StartScreen>
      ) : gameStarted ? (
        <Board setGameEnded={handleGameEnd} />
      ) : (
        <StartScreen>
          <Title>Break the Heck Out </Title>

          <NameDisplay>
            <Form action="#" onSubmit={handlePlayerName} nameSubmit={nameSubmit}>
              <Input type="text"
                value={playerName}
                onChange={event => setPlayerName(event.target.value)}
                maxLength="5"
                placeholder='Type a name, e.g. Juan'
              />
              <Button>
                <AiOutlineSend
                  style={{
                    transform: 'scale(2)',
                    color: playerName ? '#ffffff' : '#fefefe60'
                  }}
                />
              </Button>
            </Form>
          </NameDisplay>
          <WelcomePlayer nameSubmit={nameSubmit}>
            <p>Welcome, <RedGlitch>{playerName}.</RedGlitch> You ready to rock?</p>
          </WelcomePlayer>

          <PressSpace>
            {nameSubmit ? 'Press Spacebar to Start' : 'Give me your best name'}
          </PressSpace>

          <GlobalStyle/>
          <Top3Table>
            <tbody>
            <tr>
              <th>Player</th>
              <th>Score</th>
              <th>Level</th>
            </tr>
            </tbody>
          {
            highScores.map(highScore => (
              <tr>
                <td>{highScore.player_name}</td>
                <td>{highScore.score}</td>
                <td>{highScore.level ? highScore.level : 'unknown'}</td>
              </tr>
            ))
          }
          </Top3Table>
        </StartScreen>
      )}
    </GameContainer>
  )
}

const StartScreen = styled.div`
  font-weight: 600;
  font-family: 'Press Start 2P', cursive;
  color: #fff;

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

// global style
// specific style
// global important style
// specific important style
// inline styling

const Title = styled.h1`
  font-family: 'Press Start 2P', cursive !important;
  font-size: 2em;
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa;
`


const Button = styled.button`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
`

const WelcomePlayer = styled.div`
  display: ${ p => p.nameSubmit ? 'flex' : 'none' };
  font-size: 1.2em;
`

const PressSpace = styled.p`
  animation: ${blinkIt} 1.5s linear infinite;
  font-size: .8em;
`

const RedGlitch = styled.span`
    color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 42px #ff0000,
    0 0 82px #0fa;
`

const Form = styled.form`
  display: ${ p => p.nameSubmit ? 'none' : 'flex' };
`

const Top3Table = styled.table`
  margin-top: 25px;
  font-size: 10px;
`

const GlobalStyle = createGlobalStyle`
  table {
    width: 24%;
    border: none;
    
    th,
    td {
      border: none;
    }
  
    th,
    td,
    tr {
      padding: 5px;
    }
  
    th {
      text-align: left;
    }
  }
`;


const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  &:focus {
    outline: none;
  }
  
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1.5px solid #ffffff;
  
  size: 5;
  
  margin: 0 0;
  
  color: #ffffff;
  padding: ${props => props.padding};
  
  font-size: 1.2em;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 42px #ff0000;

  ::placeholder {
    color: #ffffff;
  }
`
