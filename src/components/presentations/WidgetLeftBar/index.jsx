import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LeftSidebar = styled.div`
  display: none;
  position: fixed;
  right: 5vw;
  bottom: 0;
  z-index: 1; 
  font-size: 2.2rem;
  color: ${props=>props.theme.colors.fontMainColor};

  &:after {
    content: '';
    width: 2px;
    height: 5.5em;
    background: ${props=>props.theme.colors.primaryColorClear};
  }
    
  @media ((min-width: ${props=>props.theme.breakpoints.largeX1}) and (orientation: landscape)) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const WidgetLeftBar = () => {
  return (
    <LeftSidebar>
      <Link href='https://www.linkedin.com/in/juanluischaurant/' target='_blank'>
        <FaLinkedin style={{ color: 'white' }}/>
      </Link>
      <Link href='https://twitter.com/juanluis_nt' target='_blank' style={{ color: 'white' }}>
        <FaTwitterSquare />
      </Link>
      <Link href='https://github.com/juanluischaurant' target='_blank' style={{ color: 'white' }}>
        <FaGithubSquare />
      </Link>
      <a href='mailto:juanluischaurant@gmail.com' style={{ color: 'white' }}>
        <FaEnvelopeSquare />
      </a>
    </LeftSidebar>
  )
}

export default WidgetLeftBar
