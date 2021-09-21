import React, { memo } from 'react'
import styled from 'styled-components'
import {BsChevronDoubleDown} from 'react-icons/bs'
import PlayAGame from "../views/PlayAGame"
import NormalContainer from "../presentations/NormalContainer"
import Footer from '../presentations/Footer'
import RegularNavbar from '../presentations/RegularNavbar'
import { useHistory } from 'react-router-dom'
import Music from '../views/Music'
import WidgetSecondaryProjects from '../presentations/WidgetSecondaryProjects'
import AboutMe from './AbouMe'
import SectionMainProject from '../presentations/SectionMainProject'
import WidgetLeftBar from '../presentations/WidgetLeftBar'
import {scrollIntoView} from "../utils/scrollIntoView";

const Container = styled.div`
  width: 100%;
`

const Header = styled.div`
  width: 100%;
  /* min-height: 480px; */
  height: 100vh;
  /* max-height: 100vh; */
  /* background-size: cover; */
  /* background-image: url('https://res.cloudinary.com/df0ll615k/image/upload/v1624845820/Asset_3_2x.png'); */
  /* filter: blur(8px); */
  background: #011627;
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  /* flex-wrap: wrap; */
`

const HeaderInnerContainer = styled.div`
  width: 850px;
    
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */

  @media (max-width: 800px) {
    align-items: center;
  }
`

const HeaderText = styled.h1`
  font-size: 64px;
  font-weight: 800;
  color: #ccd8f4;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  /* text-align: center; */

  @media (max-width: 1000px) {
    font-size: 48px;
  }

  @media (max-width: 720px) {
    font-size: 32px;
  }

`

const HeaderSubtitle = styled.p`
  font-size: ${({fontSize}) => fontSize};
  color: ${({color}) => color};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '400'};
  /* text-align: center; */
  margin: 0px;
  padding: 0px;
  /* max-width: 350px; */

  @media (max-width: 600px) {
    /* margin: 16px 32px 0px 32px; */
  }
`
const HeaderSubText = styled.p`
  font-size: ${({fontSize}) => fontSize};
  color: ${({color}) => color};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '400'};
  /* text-align: center; */
  margin: ${({margin}) => margin ? margin : 0}; 
  max-width: 450px;

  @media (max-width: 600px) {
    /* margin: 16px 32px 0px 32px; */
  }
`

const Highlight = styled.span`
  color: rgb(229,202,64);
`

const HeaderDownArrow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 48px;
  color: #ccd8f4;
  cursor: pointer;
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

        <HeaderInnerContainer>
          <HeaderSubText
            fontSize='16px'
            color='rgb(229,202,64)'
            fontWeight='700'
            margin='0 0 12px 0'
          >
            Hello there, I am
          </HeaderSubText>

          <HeaderText>
            Juan Luis Chaurant.
          </HeaderText>

          <HeaderSubtitle
            fontSize='64px'
            color='rgb(132,159,182)'
            fontWeight='800'
            margin={'0 0 0 0'}
          >
            Making the web.
          </HeaderSubtitle>

          <HeaderSubText
            fontSize='24px'
            color='#ccd8f4'
            margin={'16px 0 0 0'}
          >
            I enjoy solving <Highlight>real world problems</Highlight><br /> making use of <Highlight>new technologies</Highlight>.
          </HeaderSubText>

          <HeaderDownArrow onClick={() => scrollIntoView('about-me', 'start')}>
            <BsChevronDoubleDown/>
          </HeaderDownArrow>

        </HeaderInnerContainer>

        <WidgetLeftBar />
      </Header>

      <AboutMe />

      <SectionMainProject />

      <PlayAGame />
      <WidgetSecondaryProjects />

        {/* <NormalContainer
          title={qrCodeContainerInfo.title}
          subtitle={qrCodeContainerInfo.subtitle}
          paragraph={qrCodeContainerInfo.paragraph}
          verticalMargin='128px'
        />
        {/* <TiltContainer>
          Don't tilt me please
        </TiltContainer> */}
        {/*
        <NormalContainer
          title={musicContainerInfo.title}
          subtitle={musicContainerInfo.subtitle}
          paragraph={musicContainerInfo.paragraph}
          onImageClick={() => history.push('/music')}
          id='music-container'
        /> */}
        <Music />
        <Footer></Footer>
    </Container>
  )
}

export default memo(Home)
