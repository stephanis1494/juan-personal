import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'
import { FiLinkedin, FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import theme from '../../global_styles/theme';
import { ThemeProvider } from 'styled-components'

const LeftSidebar = styled.div`
  display: none;
  position: fixed;
  right: 5vw;
  bottom: 0;
  z-index: 1; 
  
  &:after {
    content: '';
    width: 2px;
    height: 35vh;
    background: ${props=>props.theme.colors.primaryColorClear};
  }

  & > a {
    color: ${({theme})=>theme.colors.fontMainColor};

  }
  & > a:hover {
    color: ${({theme})=>theme.colors.accentColor};
  }
  
  @media ((min-width: ${props=>props.theme.breakpoints.largeX1}) and (orientation: landscape)) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    font-size: 1.4rem;
  }
  @media ((min-width: ${props=>props.theme.breakpoints.extraLargeX1})) {
    font-size: 2rem;
    gap: .6em;
  }
`

const WidgetLeftBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <LeftSidebar>
        <a href='https://www.linkedin.com/in/juanluischaurant/' target='_blank'>
          <FiLinkedin/>
        </a>
        <a href='https://twitter.com/juanluis_nt' target='_blank'>
          <FiTwitter />
        </a>
        <a href='https://github.com/juanluischaurant' target='_blank'>
          <FiGithub />
        </a>
        <a href='mailto:juanluischaurant@gmail.com'>
          <FiMail />
        </a>
      </LeftSidebar>
    </ThemeProvider>
  )
}

export default WidgetLeftBar
