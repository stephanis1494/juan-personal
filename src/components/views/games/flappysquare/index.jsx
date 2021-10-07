import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import CONSTANTS from '../../../global_styles/constants';

const FlappySquare = () => {  

    let theCanvas, theContext

   

    useEffect(() => {        
        theCanvas = canvasRef.current
        theContext = theCanvas.getContext('2d')
        
        // startGame()
    }, [])  
            
    // const [clicked, setClicked] = useState(false)

    const canvasRef = useRef(null)
    
    let myGamePiece
    let playerBullets =[]
    let myObstacles = []
    let gameStatus = 'loaded'
    // let gameStatus = ['paused', 'started', 'ended', ]

    function startGame() {
        if(gameStatus === 'loaded') {
            // myObst = new component(60, 60, "yellow", 50, 50)
            myGamePiece = new component(60, 60, "red", 80, (theCanvas.height / 2) - (60/2), 'player', 3);
            myGameArea.start();
            gameStatus = 'started'
        }
    }
        
    let myGameArea = {
        // canvas : document.createElement("canvas"),
        start : function() {
            // this.interval = setInterval(updateGameArea, 20);  
            this.interval = setInterval(() => {
                // console.log('This will run every second!');
                updateGameArea()
            }, 30);      
            this.frameNo = 0
        },
        stop : function() {
            clearInterval(this.interval)
        },
        restart: function() {
            myObstacles = []
        },    
        clear : function() {
            theContext.clearRect(0, 0, theCanvas.width, theCanvas.height)
        }
    }
        
    function component(width, height, color, x, y, type='enemy', lives) {
        this.type = type // player or enemy
        this.width = width
        this.height = height
        this.x = x
        this.y = y  
        this.speedX = 0
        this.speedY = 0
        this.crash = false
        this.lives = type === 'player' ? lives : ''
        // this.gravity = 0.1;
        // this.gravitySpeed = 0;
        
        this.update = function() {
            if(this.type === 'player') {
                DrawUiText(theContext, this.lives, 50, 50)
            }

            theContext.fillStyle = color
            theContext.fillRect(this.x, this.y, this.width, this.height)
        }
        this.newPos = function() {
            // this.gravitySpeed += this.gravity;
            this.x += this.speedX
            this.y += this.speedY // + this.gravitySpeed
            this.hitBottom()
            this.hitTop()
        }
        this.hitBottom = function() {
            let rockbottom = theCanvas.height - this.height;
            if (this.y > rockbottom) {
                this.y = rockbottom
                this.gravitySpeed = 0
                // setClicked(false)
            }
        }
        this.hitTop = function() {
            let rocktop = theCanvas.getBoundingClientRect().top
            if(this.y < rocktop) {
                this.y = 0
                this.gravitySpeed = 0
            }
        }
        this.crashWith = function(otherobj) {
            let myleft = this.x
            let myright = this.x + (this.width)
            let mytop = this.y
            let mybottom = this.y + (this.height)
            let otherleft = otherobj.x
            let otherright = otherobj.x + (otherobj.width)
            let othertop = otherobj.y
            let otherbottom = otherobj.y + (otherobj.height)
            // let crash = this.crash
            // let crash = false
            if ((mybottom > othertop)
                && (mytop < otherbottom)  
                    &&
                (myright > otherleft) && 
                (myleft < otherright)
            ) {
                this.crash = true
            } else {
                this.crash = false
            }
            return this.crash;
        }
    }
        
    function updateGameArea() {
        // could not this be a method or something? 
        myObstacles = myObstacles.filter(obstacle => obstacle.x > theCanvas.width/16)
        playerBullets = playerBullets.filter(bullet => bullet.x < theCanvas.width)
        myObstacles.map((obstacle, i) => {
            
            if(obstacle.crashWith(myGamePiece)) { 
                if(myGamePiece.lives > 0) {
                    // remove the enemy from the game
                    myObstacles = myObstacles.filter(obstacle => obstacle.crash === false)

                    // subtract -1
                    myGamePiece.lives -= 1
                    // console.log('bom ' + obstacle.crash) 
                    // myGameArea.stop()
                    // myGameArea.restart()
                } else if(myGamePiece.lives === 0) {
                    myGameArea.stop()
                    gameStatus = 'ended'
                }
            }     
            
            
            playerBullets.map((bullet, i) => {
                if(obstacle.crashWith(bullet)) {
                    myObstacles = myObstacles.filter(obstacle => obstacle.crash === false) 
                }

                if(bullet.crashWith(obstacle)) {
                    playerBullets = playerBullets.filter(bullet => bullet.crash === false)
                }
            })
        })

        // code for destroying enemies
        // myObstacles = myObstacles.filter(obstacle => obstacle.crash === false)

        myGameArea.clear()
        myGameArea.frameNo += 1

        if (myGameArea.frameNo === 1 || everyinterval(15)) {
        
            let minHeight = 0
            let maxHeight = theCanvas.height - myGamePiece.height
        
            let randomHeight = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight)
            myObstacles.push(new component(60, 60, "yellow", theCanvas.width, randomHeight))
        }

        playerBullets.map((bullet, i) => {
            bullet.x +=20
            bullet.update()
        })

        myObstacles.map((obstacle, i) => {
            obstacle.x -=10
            obstacle.update()
        })
    
        myGamePiece.newPos();
        myGamePiece.update();
    }

    function accelerate(n) {
        myGamePiece.speedY = n;
        // myGamePiece.gravity = n;
    }

    function everyinterval(n) {
        if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
        return false;
    }
    
    const handleShooting = () => {
        playerBullets.push(new component(10, 10, 'green', myGamePiece.x, myGamePiece.y + myGamePiece.height/2 ))
    }

    const handleTouchStart = (e, n) => {
        e.preventDefault()
        accelerate(n)
        // setClicked(true)
    }
    
    const handleTouchEnd = (e, n) => {
        e.preventDefault()
        e.stopPropagation()
        accelerate(n)
        // myGamePiece.shouldJump = true
        // setClicked(false)
    }

    const DrawUiText = (theContext, theFillText, x, y) => {
        theContext.fillColor = 'white'
        theContext.font = '20px Arial'
        theContext.fillText(`${theFillText}`, x, y )
    }
    
    return (
        <GameContainer>
            <Canvas
  
            // onKeyPress = {}
            // onTouchStart = {handleTouchStart(-0.2)}
            // onTouchEnd = {handleTouchEnd(0.1)}
            // onTouchEnd={(e)=>{handleTouchEnd(e, 7)}} 
            // onTouchStart={(e)=>{handleTouchStart(e, -10.2)}} 
            ref={canvasRef}
            />

            <ButtonContainer>
                <DirectionalButtons>

                    <TapButton 
                        onClick={(e)=>{handleTouchStart(e, -8)}} 
                        // onTouchEnd={(e)=>{handleTouchEnd(e, 0.9)}} 
                    >up</TapButton>
                
                    <TapButton 
                        onClick={(e)=>{handleTouchStart(e, 8)}} 
                        // onTouchEnd={(e)=>{handleTouchEnd(e, 0.9)}} 
                    >down</TapButton>
                </DirectionalButtons>
                
                <ActionsButtons>
                    <FireButton onClick={(e) => {handleShooting()}}>fire</FireButton>
                
                    <TapButton 
                        onClick={(e)=>{handleTouchStart(e, 0)}} 
                        // onTouchEnd={(e)=>{handleTouchEnd(e, 0.9)}} 
                        >stop</TapButton>

                    <TapButton onClick={(e)=>{startGame()}}>Start</TapButton>
                </ActionsButtons>

            </ButtonContainer>
        </ GameContainer>
    )
}

export default FlappySquare

// ====================
// styled components
// ====================

const GameContainer = styled.div`
width: fit-content;
`
const Canvas = styled.canvas`
  background-color: #134959;
  touch-action: manipulation;
  height: 500px;
  width: 800px;

  @media (max-width: ${CONSTANTS.breakpoints.phoneX1}) {
    height: 180px;
    width: 290px;
  }
`

const DirectionalButtons = styled.div`
display: flex;
flex-direction: column;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    touch-action: manipulation;
    max-height: 250px;
`

const ActionsButtons = styled.div`
    display: flex;
    flex-direction: column;
`

const TapButton = styled.button`
    touch-action: manipulation;
    width: 100px;
    height: 100px;
    /* margin: 15px; */
    border-radius: 50%;
    border: none;
    @media (max-width: ${CONSTANTS.breakpoints.phoneX1}) {
        width: 25px;
        height : 25px;
    }
`

const FireButton = styled.button`
    width: 100px;
`
