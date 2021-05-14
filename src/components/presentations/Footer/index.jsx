import React, { useState } from 'react'
import './Footer.css'
import { YoutubeIcon, TwitterIcon, ToggleOnIcon, SearchIcon } from '../Icons'

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
           <div className="buttons-container">
            <div className='left-icons'>
                    <ToggleOnIcon 
                        size='30' 
                    />
                    <SearchIcon 
                        size='20'
                    />
                </div>
                <div className='right-icons'>
                  <Icon size='24' color='white' hoverColor='#f70002'>
                    <YoutubeIcon />
                  </Icon>
                  <Icon size='24' color='white' hoverColor='#00ACED' >
                    <TwitterIcon />
                  </Icon>
                </div>
           </div>
        </div>
    )
}
 
export default Footer;