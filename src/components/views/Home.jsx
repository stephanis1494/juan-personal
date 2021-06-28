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

const Image = styled.img`
  width: 100%;
  max-height: 480px;
  object-fit: cover;
`



const Home = () => {
  return (
    <Container>
      <Image
        src={'https://res.cloudinary.com/df0ll615k/image/upload/v1624845820/Asset_3_2x.png'}
      />
        <TiltContainer>
          Don't tilt me please
        </TiltContainer>
    </Container>
  )
}
 
export default memo(Home)
