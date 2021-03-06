import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import RegularNavbar from '../presentations/RegularNavbar'
import Hero from './Hero'
import AboutMe from './AboutMe/AboutMe'
import SectionMainProject from '../presentations/SectionMainProject'
import WidgetSecondaryProjects from '../presentations/WidgetSecondaryProjects'
import Footer from '../presentations/Footer'
import WidgetLeftBar from '../presentations/WidgetLeftBar'
import PlayAGame from './PlayAGame/PlayAGame'

// // import Music from '../views/Music'

const Home = () => {
  const history = useHistory()

  return (
    <>
      <RegularNavbar></RegularNavbar>
      <WidgetLeftBar />
      <Hero />
      <AboutMe />
      <PlayAGame />
      <SectionMainProject />
      <WidgetSecondaryProjects />

      {/*
      <Music />*/}
      <Footer />
    </>
  )
}

export default memo(Home)
