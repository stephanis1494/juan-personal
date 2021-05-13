import React, { useState } from 'react'
import './Footer.css'
import { YoutubeIcon, TwitterIcon, ToggleOnIcon, SearchIcon } from '../Icons'

const Footer = () => {
    const [hover, setHover] = useState(false)
    return (
        <div className='footer-container'>
           <div className="buttons-container">
            <div className='left-icons'>
                    <ToggleOnIcon 
                        size='30' 
                    />
                    <SearchIcon 
                        size='24'
                    />
                </div>
                <div className='right-icons'>
                    <YoutubeIcon 
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        size='30' 
                        color={(hover && 'red') || 'white'}
                    />
                    <TwitterIcon 
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        size='30' 
                        color={(hover && 'red') || 'white'}
                    />
                </div>
           </div>

        </div>
    )
}
 
export default Footer;