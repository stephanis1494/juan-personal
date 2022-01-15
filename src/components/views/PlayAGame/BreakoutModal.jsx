import React, { useState } from 'react'
import styled from 'styled-components'
import Breakout from "../games/breakout";
import { AiOutlineCloseCircle } from 'react-icons/all'
import { AnimatePresence, motion } from 'framer-motion'


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

const InnerContainer = styled(motion.div)`
  position: relative;
`

const IconContainer = styled.div`
  position: absolute;
  right: -28px;
`

const BreakoutModal = ({isModalOpened, setModalState}) => {
  const [closeHover, setCloseHover] = useState(false)
  return (
    <>
      {isModalOpened ? (
        <OuterContainer>
          <AnimatePresence>
            <InnerContainer
              key='breakout-game-wrapper'
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              exit={{ y: -1000 }}
              transition={{
                type: 'tween',
                stiffness: 200,
                damping: 30,
                duration: 0.5
              }}
            >
              <IconContainer
                onMouseEnter={() => setCloseHover(true)}
                onMouseLeave={() => setCloseHover(false)}
              >
                <AiOutlineCloseCircle
                  onClick={()=>setModalState(prev=>!prev)}
                  size='24'
                  style={{ opacity: closeHover ? '1' : '0.75', transition: 'opacity 150ms ease', cursor: 'pointer' }}
                />
              </IconContainer>
              <Breakout></Breakout>
            </InnerContainer>
          </AnimatePresence>
        </OuterContainer>
      ) : null}
    </>
  )
}

export default BreakoutModal
