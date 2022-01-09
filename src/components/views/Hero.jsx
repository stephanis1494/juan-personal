import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../global_styles/theme';

import {scrollIntoView} from "../utils/scrollIntoView";

import {BsChevronDoubleDown} from 'react-icons/bs'

const HeaderContainer = styled.div`

  background-url: 
  padding-inline: auto;
  background: ${props => props.theme.colors.primaryColor};
  position: relative;

  height: 100vh;
  max-height: 100vh;
  
  display: grid;
  place-content: center; // align the grid
  align-items: center; // align items inside the grid
  grid-template-rows: min-content min-content min-content auto min-content;
  grid-gap: .4em;
  
  @media ((min-width: ${props=>props.theme.breakpoints.tabletX1})) {
    padding-inline: auto;
    grid-gap: .5em;
  }

`
const HeaderIntroText = styled.p`
  margin: 0; 
  padding: 0;
  letter-spacing: .1em;
  
  font-size: var(--fs-600);
  font-weight: ${props => props.theme.fontWeight.bold700};
  color: ${props => props.theme.colors.accentColor};
  text-transform: uppercase;
`

const HeaderMainTitle = styled.h1`
  margin: 0px;
  padding: 0px;
  max-width: min-content;
  line-height: 1.1em;
  letter-spacing: .02em;
  text-transform: uppercase;
  
  font-size: var(--fs-900);
  font-weight: ${props => props.theme.fontWeight.extraBold800};
  color: ${props => props.theme.colors.fontMainColor};
  
  & > .block {
    display: block;
  }
  @media ((min-width: ${props=>props.theme.breakpoints.tabletX1})) {
    /* white-space: nowrap; */
  }
  @media ((min-width: ${props=>props.theme.breakpoints.largeX1}) and (orientation: landscape)) {
  }

`

const HeaderSubtitle = styled.p`
  margin: 0px;
  padding: 0px;
  line-height: 1.1em;
  letter-spacing: .05em;
  padding: 0.25em 1em;
  max-width: fit-content;
  text-transform: uppercase;

  background: ${props => props.theme.colors.accentColor};
  
  color: ${props => props.theme.colors.primaryColor};
  font-weight: ${props => props.theme.fontWeight.bold700};
  font-size: var(--fs-600);

  position: relative;
  left: -1em;
`

const HeaderDescription = styled.p`
  margin-top: max(2em, 4vh);
  margin-bottom: max(2em, 4vh);
  align-self: flex-start;
  font-size: var(--fs-600);
  color: ${props => props.theme.colors.fontMainColor};

`

const Highlight = styled.span`
  color: rgb(229,202,64);
`

const HeaderDownArrow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 48px;
  color: #ccd8f4;
  cursor: pointer;
`

const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      
      <HeaderContainer>
        <HeaderIntroText>
        Hello there, I am
        </HeaderIntroText>
        
        <HeaderMainTitle>
        Juan Luis<span className='block'>Chaurant.</span>
        </HeaderMainTitle>
        <HeaderSubtitle>
          Developer. Musician. Educator.
        </HeaderSubtitle>
        
        <HeaderDescription>
          I enjoy solving <Highlight>real world problems</Highlight>,<br /> making use of <Highlight>new technologies</Highlight>.
        </HeaderDescription>
        
        <HeaderDownArrow
        onClick={() => scrollIntoView('about-me', 'start')}
        >
          <BsChevronDoubleDown style={{ width: '32px', height: '32px' }}/>
        </HeaderDownArrow>
      
      </HeaderContainer>
      
      {/* <WidgetLeftBar /> */}
    </ThemeProvider>

    )
}
  
export default Hero
