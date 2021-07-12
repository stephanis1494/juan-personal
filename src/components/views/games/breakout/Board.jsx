import React, { useRef, useEffect } from 'react'
import styled from "styled-components"
import data from './data'
import { BallMovement } from './BallMovement'

let x = 0;
const canvasWidth = 800
const canvasHeight = 600

export default function Board() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const render = () => {
            const TheCanvas = canvasRef.current
            const TheContext = TheCanvas.getContext('2d')
            
            let { ballObject } = data

            TheContext.clearRect(0, 0, canvasWidth, canvasHeight);

            // Handle Ball Movement
            BallMovement(TheContext, ballObject);

            requestAnimationFrame(render)
        }

        render()
    })

    return <Canvas ref={ canvasRef }></Canvas>
}

const Canvas = styled.canvas`
    width: ${canvasWidth+'px'};
    height: ${canvasHeight+'px'};
    border: 3px solid red;
    background-color: #134959;
`