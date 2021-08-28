import React from 'react'
import data from '../data'

let { playerObject } = data

export default function ResetGame() { ////
    playerObject.livesRemaining = 3
    playerObject.level = 1
    playerObject.score = 0
    
} ////