import React, { memo } from 'react'
import styled from 'styled-components'
import TiltContainer from "../presentations/TiltContainer"
import NormalContainer from "../presentations/NormalContainer"
import Footer from '../presentations/Footer'
import RegularNavbar from '../presentations/RegularNavbar'
import { useHistory } from 'react-router-dom'
import Music from '../views/Music'
import RegularContainer from '../presentations/RegularContainer'


const Container = styled.div`
  width: 100%;

`

const Header = styled.div`
  width: 100%;
  min-height: 480px;
  height: 100vh;
  background-size: cover;
  background-image: url('https://res.cloudinary.com/df0ll615k/image/upload/v1624845820/Asset_3_2x.png');
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
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 48px;
  }

  @media (max-width: 720px) {
    font-size: 32px;
  }

`

const HeaderSubText = styled.p`
  font-size: 24px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    margin: 16px 32px 0px 32px;
  }
`

const Highlight = styled.span`
  color: #fff800;
`

const qrCodeContainerInfo = {
  title: "QR Generator",
  subtitle: "a simple desktop app",
  paragraph: "QR Generator that was built in order to solve a specific problem at a specific moment were an app like this was needed, but I could not find anything like this available, so I built it. Lorem Ipsum dolores amed. Lorem Ipsum dolores amed. Lorem Ipsum dolores amed"
}

const musicContainerInfo = {
  title: 'Musician',
  subtitle: 'A collection of music performances',
  paragraph: 'QR Generator that was built in order to solve a specific problem at a specific moment were an app like this was needed, but I could not find anything like this available, so I built it. Lorem Ipsum dolores amed. Lorem Ipsum dolores amed. Lorem Ipsum dolores amed'
}

const Home = () => {
  const history = useHistory()
  return (
    <Container>
      <RegularNavbar></RegularNavbar>
      <Header>
        <HeaderText>
          Not Your Average Web Dev.
        </HeaderText>
        <HeaderSubText>
          Turning <Highlight>Ideas </Highlight> into <Highlight>reality</Highlight> is what I do.
        </HeaderSubText>
      </Header>
      
      <RegularContainer />

        <NormalContainer
          title={qrCodeContainerInfo.title}
          subtitle={qrCodeContainerInfo.subtitle}
          paragraph={qrCodeContainerInfo.paragraph}
          verticalMargin='128px'
        />
        <TiltContainer>
          Don't tilt me please
        </TiltContainer>

        <NormalContainer
          title={musicContainerInfo.title}
          subtitle={musicContainerInfo.subtitle}
          paragraph={musicContainerInfo.paragraph}
          onImageClick={() => history.push('/music')}
          id='music-container'
        />
        <Music />
        <Footer></Footer>
    </Container>
  )
}

export default memo(Home)
