import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const Canvas = styled.canvas`
  background-color: #134959;
  touch-action: manipulation;
  `

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`
const TapButton = styled.button`
    touch-action: manipulation;
    width: 100px;
    height: 300px;
    margin: 25px;
`

const FlappySquare = () => {    
            
        // const [clicked, setClicked] = useState(false)
        let theCanvas, theContext;

        const canvasRef = useRef(null)
        
        let myGamePiece
        let myObstacles = []
        // let myObst
        let gameStatus = ['paused', 'started', 'ended']

        function startGame() {
            // myObst = new component(60, 60, "yellow", 50, 50)
            myGamePiece = new component(60, 60, "red", 80, theCanvas.height /2);
            myGameArea.start();
        }
        
        var myGameArea = {
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
                clearInterval(this.interval);
            },    
            clear : function() {
                theContext.clearRect(0, 0, theCanvas.width, theCanvas.height)
            }
        }
        
        function component(width, height, color, x, y, type='enemy') {
            this.type = type // do I even need it?
            this.width = width
            this.height = height
            this.x = x
            this.y = y;   
            this.speedX = 0
            this.speedY = 0
            this.crash = false  
            // this.gravity = 0.1;
            // this.gravitySpeed = 0;
            
            this.update = function() {
                // ctx = myGameArea.context;
                // theContext.clearRect(0, 0, theCanvas.width, theCanvas.height)
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
                let otherleft = otherobj.x;
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
            
            myObstacles = myObstacles.filter(obstacle => obstacle.x > 10)
            myObstacles.map((obstacle, i) => {
                
                if(obstacle.crashWith(myGamePiece)) { 
                    console.log('bom ' + obstacle.crash) 
                    myGameArea.stop()
                    // return
                }
            })
            // myObstacles = myObstacles.filter(obstacle => obstacle.crash == false)

            myGameArea.clear()
            myGameArea.frameNo += 1

            if (myGameArea.frameNo == 1 || everyinterval(15)) {
            // let x = theCanvas.width - 150;
            let minHeight = 0;
            let maxHeight = theCanvas.height - myGamePiece.height;
            // let height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
            // let minGap = 50;
            // let maxGap = 200;
            // let gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
            // myObstacles.push(new component(10, height, "green", x, 0));
            // myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
            // myGameArea.clear();
            // myObst.newPos()
                let randomHeight = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight)
                myObstacles.push(new component(60, 60, "yellow", theCanvas.width, randomHeight))
            
            }

            myObstacles.map((obstacle, i) => {
                obstacle.x -=10
                obstacle.update()
                // console.log(obstacle)
            })
            // myObstacles[0].x += -1
            // myObstacles[0].update()
            
        
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
        
        useEffect(() => {        
            theCanvas = canvasRef.current
            theContext = theCanvas.getContext('2d')
            
            // startGame()
            
        }, [])

    return (
        <>
            <Canvas
            height="500px"
            width="800px"
            // onKeyPress = {}
            // onTouchStart = {handleTouchStart(-0.2)}
            // onTouchEnd = {handleTouchEnd(0.1)}
            // onTouchEnd={(e)=>{handleTouchEnd(e, 7)}} 
            // onTouchStart={(e)=>{handleTouchStart(e, -10.2)}} 
            ref={canvasRef}
            />

            <ButtonContainer>
                <div>

                    <TapButton 
                        onClick={(e)=>{handleTouchStart(e, -8)}} 
                        // onTouchEnd={(e)=>{handleTouchEnd(e, 0.9)}} 
                    >up</TapButton>
                
                    <TapButton 
                        onClick={(e)=>{handleTouchStart(e, 8)}} 
                        // onTouchEnd={(e)=>{handleTouchEnd(e, 0.9)}} 
                    >down</TapButton>
                </div>
            
                <TapButton 
                    onClick={(e)=>{handleTouchStart(e, 0)}} 
                    // onTouchEnd={(e)=>{handleTouchEnd(e, 0.9)}} 
                >stop</TapButton>

                <TapButton onClick={(e)=>{startGame()}}>Start</TapButton>
            </ButtonContainer>
        </>
    )
}

export default FlappySquare
