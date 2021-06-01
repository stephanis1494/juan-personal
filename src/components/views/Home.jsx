import React, { memo } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 80px 32px 0px 32px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
      <div>
        <Header>Hello there,</Header>
        <SubHeader>I am <b>Jaun Luis</b> - engineer, educator and musician.</SubHeader>
      </div>
      <Image
        src='https://res.cloudinary.com/df0ll615k/image/upload/v1622511900/juan.jpg'
      />
    </Container>
  )
}
 
export default memo(Home)
