import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { motion } from 'framer-motion'

const GameBoard = styled.div`
  width: 280px;
  height: 190px;
  border: 1px solid black;
  background: white;
  overflow: hidden;
  position: relative;
`

const BlueSquare = styled(motion.div)`
  height: 16px;
  width: 16px;
  background: blue;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid rgba(0, 0, 0, 0.1);
`

const OtherBlueSquare = styled(motion.div)`
  height: 16px;
  width: 16px;
  background: blue;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid rgba(0, 0, 0, 0.1);
`

const YellowSquare = styled(motion.div)`
  height: 32px;
  width: 32px;
  background: yellow;
  position: absolute;
  bottom: 0;
  left: 8px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

const Dinosaur = () => {
  const [characterJump, setCharacterJump] = useState(false)
  const [reset, setReset] = useState(false)
  const [jump, setJump] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setReset(!reset)
    }, 1750)

    return () => clearInterval(interval)
  }, [reset])

  const handleKeyDown = (e) => {
    console.log({ e })
    if (e.code === 'KeyZ') {
      setJump(true)
    }
  }

  useEffect(() => {
    if (jump) {
      setTimeout(() => setJump(false), 300)
    }
  }, [jump])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => document.addEventListener('keydown', handleKeyDown)
  }, [jump])

  return (
    <GameBoard
      onTouchStart={(e) => {
        setCharacterJump(true)
      }}
    >
      <YellowSquare
        animate={{ y: jump ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {reset ? (
        <BlueSquare
          initial={{ x: 32 }}
          animate={{ x: -302 }}
          transition={{ duration: 2 }}
        />
      ) : (
        <OtherBlueSquare
          initial={{ x: 32 }}
          animate={{ x: -302 }}
          transition={{ duration: 2 }}
        />
      )}
    </GameBoard>
  )
}

export default Dinosaur
