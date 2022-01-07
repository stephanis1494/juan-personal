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
          <a href='https://www.youtube.com/user/ululu93' target="_blank" rel="noreferrer">
            <Icon size='24' color='white' hoverColor='#f70002'>
              <YoutubeIcon />
            </Icon>
          </a>
          <a href='https://twitter.com/juanluis_nt' target="_blank" rel="noreferrer">
            <Icon size='24' color='white' hoverColor='#00ACED'>
              <TwitterIcon />
            </Icon>
          </a>
        </div>
      </div>
  )
}

export default Footer;
