import React from 'react'
import styled from 'styled-components'
import Breakout from "../games/breakout";


const OuterContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 25, 41, 0.9);
  z-index: 6;

  display: flex;
  align-items: center;
  justify-content: center;
`

const CloseIcon = styled.div`
  color: white;
  position: fixed;
  top: 2vw;
  left: 4vw;
`

const BreakoutModal = ({isModalOpened, setModalState}) => {
  return (
    <>
      {isModalOpened ? (
        <OuterContainer>
          <CloseIcon
            onClick={()=>setModalState(prev=>!prev)}
          >X</CloseIcon>
          <Breakout></Breakout>

          
        </OuterContainer>
      ) : null}
      
    </>
  )
}

export default BreakoutModal
