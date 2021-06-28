import React, { memo } from 'react'
import styled from 'styled-components'
import TiltContainer from "../presentations/TiltContainer";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const InnerTrack = styled.div`
  width: 1400px;
  background: #F2F3F4;
`

const Header = styled.h1`
  font-size: 64px;
  margin-bottom: 16px;
  margin-top: 0px;
`

const SubHeader = styled.p`
  font-size: 24px;
`

// 720 1280
const Image = styled.img`
  width: 436px;
  height: 780px;
  margin-right: 32px;
  opacity: 0.9;
  border-radius: 3px;
`



const Home = () => {
  return (
    <Container>
      <InnerTrack>
        <TiltContainer>
          Hello
        </TiltContainer>
      </InnerTrack>
    </Container>
  )
}
 
export default memo(Home)
