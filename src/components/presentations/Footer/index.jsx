import React, { useState } from 'react'
import './Footer.css'
import { YoutubeIcon, TwitterIcon, GoTopIcon } from '../Icons'

const Icon = ({ children, color, hoverColor, ...props }) => {
  const [hover, setHover] = useState(false)
  const activeColor = (hover && hoverColor) || color

  return React.cloneElement(children, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () =>  setHover(false),
    color: activeColor,
    ...props
  })
}

const Footer = () => {

  return (
      <div className='footer-container'>
        <div className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Icon size='24' color='white' hoverColor='#00ACED'>
            <GoTopIcon />
          </Icon>
        </div>
        <div className="buttons-container">
          <Icon size='24' color='white' hoverColor='#f70002'>
            <YoutubeIcon />
          </Icon>
          <Icon size='24' color='white' hoverColor='#00ACED'>
            <TwitterIcon />
          </Icon>

        </div>
      </div>
  )
}

export default Footer;
