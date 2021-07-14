import React from 'react'
import Board from './Board'
import styled from "styled-components"

const GameContainer = styled.div`
width: 100%;
`

export default function Breakout() {
    return(
        <GameContainer>
            <Board></Board>
        </GameContainer>
    )
}

