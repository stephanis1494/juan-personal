import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'

const GameBoard = styled.div`
    width: 280px;
    height: 190px;
    border: 1px solid black;
    background: white;
    overflow: hidden;
`

const CharacterJump = keyframes`
    0%{top: 130px;}
    30%{top: 100px}
    70%{top: 100px}
    100%{top: 150px}
`
const Character = styled.div`
    width: 50px;
    height: 50px;
    background: yellow;
    position: relative;
    top: 140px;
    animation: ${CharacterJump} 500ms  infinite;
       // animation: ${props => props.characterJump ? ${CharacterJump} 500ms  infinite}
`

const AnimateBlock = keyframes`
    0%{left: 240px;}
    100%{left: -20px;}
`
const Block = styled.div`
    width: 20px;
    height: 20px;
    background: blue;
    position: relative;
    top: 120px;
    left: 260px;
    animation: ${AnimateBlock} 1.2s infinite;
    `

function jumpNow() {

}

const Dinosaur = () => {
    const [characterJump, setCharacterJump] = useState(false)
    return (
        <GameBoard onTouchStart={(e)=>{setCharacterJump(true)}}>
            <Character characterJump={characterJump}></Character>
            <Block />
        </GameBoard>
    )
}

export default Dinosaur
