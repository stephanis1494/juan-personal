import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'

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
            <FaLinkedin />
            <FaTwitterSquare />
            <FaGithubSquare />
            <FaEnvelopeSquare />
        </LeftSidebar>
    )
}

export default WidgetLeftBar
