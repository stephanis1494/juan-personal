import React, { memo } from 'react'
import PlayAGame from "../views/PlayAGame"
import Footer from '../presentations/Footer'
import RegularNavbar from '../presentations/RegularNavbar'
import { useHistory } from 'react-router-dom'
import Music from '../views/Music'
import WidgetSecondaryProjects from '../presentations/WidgetSecondaryProjects'
import AboutMe from './AbouMe'
import SectionMainProject from '../presentations/SectionMainProject'
import Hero from './Hero'
import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
`


const Home = () => {
  const history = useHistory()

  return (
    <Container>

      <RegularNavbar></RegularNavbar>

      <Hero />

      <AboutMe />

      <SectionMainProject />

      <PlayAGame />
      <WidgetSecondaryProjects />

      <Music />
      <Footer></Footer>
    </Container>
  )
}

export default memo(Home)
