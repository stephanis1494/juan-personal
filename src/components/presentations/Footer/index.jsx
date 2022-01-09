import React, { useState } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../global_styles/theme'
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

const FooterContainer = styled.footer `
  padding-inline: 1em;
  background: rgb(1,17,29);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: relative;
`

const FooterContainerTopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: rgba(224, 23, 81, 1);

  position: absolute;
  top: -30px;
  /* transform: translateY(-173px); */
  cursor: pointer;
  border-radius: 3px;
`

const FooterLayout = styled.div`
  margin: 2em auto 4em auto;
  width: 95%;
  max-width: 1000px;

  @media ((min-width: ${props=>props.theme.breakpoints.tabletX1})) {
    width: 80%;
  }
  @media ((min-width: ${props=>props.theme.breakpoints.extraLargeX1})) {
    width: 70%;
  }
`

const FooterLayoutTextContent = styled.div`
  color: ${({theme})=>theme.colors.fontMainColor};
  margin-bottom: 3em;

  & > h2 {
    font-size: var(--fs-700);
    margin-bottom: .5em;
  }

  & > p {
    margin-top: 0;
    margin-bottom: 2em;
    max-width: 45ch;
    line-height: 1.5em;
  }

  & > a {
    color: ${({theme})=>theme.colors.fontMainColor};
    font-weight: ${({theme})=>theme.fontWeight.bold700};
    text-decoration: none;
    
    position: relative;
    display: flex;
    flex-direction: column;

    max-width: fit-content;
  }
  & > a::after{
    content: '';
    width: 100%;

    position: absolute;
    bottom: -.3em;
    border-bottom: solid 3px ${({theme})=>theme.colors.fontMainColor};
  }
  & > a:hover:after {
    border-bottom: solid 3px ${({theme})=>theme.colors.accentColor};
  }
` 

const FooterLayoutSocialMedia = styled.div`

  display: flex;
  flex-direction: row;
  gap: .8em;

  
  & > .icon {
    width: 2rem;
    min-width: 2rem;
    margin-right: auto;

    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
  }
  & > .social-icon {
    color: ${({theme})=>theme.colors.fontSecondaryColor};
    text-decoration: none;
    align-self: flex-end;
    
    display: flex;
    flex-direction: column;
    position: relative;
  }
  & > .social-icon:hover {
    color: ${({theme})=>theme.colors.fontMainColor};
    
  }
  & > .social-icon::after {
    content: '';
    width: 100%;

    position: absolute;
    bottom: -.1em;
    border-bottom: solid 2px transparent;
  }
  & > .social-icon:hover:after {
    border-bottom: solid 2px ${({theme})=>theme.colors.accentColor};
    
  }
`



const Footer = () => {

  return (
    <ThemeProvider theme={theme}>
      
      <FooterContainer>
      
        <FooterContainerTopButton 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Icon>
            <GoTopIcon />
          </Icon>
        </FooterContainerTopButton>

        <FooterLayout>

          <FooterLayoutTextContent>
            <h2>Let's build cool stuff</h2>
            <p>Feel free to get in contact with me if you have a project in mind, need help, or just want to say hi.</p>
            <a href="mailto:juanluischaurant@gmail.com">juanluischaurant@gmail.com</a>
          </FooterLayoutTextContent>

          <FooterLayoutSocialMedia>
            <div className="icon">
              JL
            </div>
            <a href="" className="social-icon">github</a>
            <a href="" className="social-icon">twitter</a>
            <a href="" className="social-icon">likedin</a>
          </FooterLayoutSocialMedia>

        </FooterLayout>
        
        
        
        {/*<div className="buttons-container">
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
        </div> */}
      </FooterContainer>

    </ThemeProvider>
  )
}

export default Footer;
