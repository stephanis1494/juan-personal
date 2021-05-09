import React, { useState } from 'react'
import './Footer.css'
import { YoutubeIcon } from '../Icons'

const Footer = () => {
    const [hover, setHover] = useState(false)
    return (
        <div className='footer-container'>
            <YoutubeIcon 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            size='30' 
            color={(hover && 'red') || 'white'}
            />
            <div>
                <YoutubeIcon />
            </div>
        </div>
    )
}
 
export default Footer;