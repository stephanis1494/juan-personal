import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LeftSidebar = styled.div`
  /* width: 50px; */
  height: 360px; 
  position: fixed;
  top: 42%;
  left: 94vw;
  z-index: 1;
  margin-right: 20px;
  /* background: red; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  font-size: 32px;
  color:#ccd8f4;

  &:after {
      margin: 5px;
      content: '';
      width: 2px;
      height: 180px;
      background: #304a5f;
  }

  @media (max-width: 800px) {
    display: none;
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
