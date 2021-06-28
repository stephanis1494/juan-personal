import React, { memo } from 'react'
import styled from 'styled-components'
import TiltContainer from "../presentations/TiltContainer"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.div`
  width: 100%;
  min-height: 480px;
  background-size: cover;
  background-image: url(https://res.cloudinary.com/df0ll615k/image/upload/v1624845820/Asset_3_2x.png);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderText = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: white;
  margin-bottom: 0px;
`

const HeaderSubText = styled.p`
  font-size: 24px;
  color: white;
`

const Highlight = styled.span`
  color: #fff800;
`



const Home = () => {
  return (
    <Container>
      <Header>
        <HeaderText>
          Not Your Average Web Dev.
        </HeaderText>
        <HeaderSubText>
          Turning <Highlight>Ideas </Highlight> into <Highlight>reality</Highlight> is what I do.
        </HeaderSubText>
      </Header>
        <TiltContainer>
          Don't tilt me please
        </TiltContainer>
    </Container>
  )
}
 
export default memo(Home)
