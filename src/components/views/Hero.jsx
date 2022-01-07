import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../global_styles/theme';

import {scrollIntoView} from "../utils/scrollIntoView";
// import WidgetLeftBar from '../presentations/WidgetLeftBar'
import {BsChevronDoubleDown} from 'react-icons/bs'


const HeaderInnerContainer = styled.div`
  position: relative;

  padding: 12em 2em 8em;
  background: ${props => props.theme.colors.primaryColor};
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content min-content auto min-content;
  grid-gap: .5em;
  /* align-content: center; */
  align-items: center;

`
const HeaderIntro = styled.p`
  margin: 0; 
  padding: 0;
  letter-spacing: .2em;
  
  font-size: ${props => props.theme.fontScale.smallScreen.small};
  font-weight: ${props => props.theme.fontWeight.extraBold800};
  color: ${props => props.theme.colors.accentColor};
  text-transform: uppercase;
 
`

const HeaderMainTitle = styled.h1`
  margin: 0px;
  padding: 0px;
  line-height: 1.1em;
  /* letter-spacing: .05em; */
  text-transform: uppercase;
  
  font-size: ${props => props.theme.fontScale.smallScreen.bigX2};
  font-weight: ${props => props.theme.fontWeight.extraBold800};
  color: ${props => props.theme.colors.fontMainColor};
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
  font-size: ${props => props.theme.fontScale.smallScreen.regular};

  position: relative;
  left: -1em;
`

const HeaderDescription = styled.p`
  font-size: ${props => props.theme.fontScale.smallScreen.regular};
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
      
      <HeaderInnerContainer>
        <HeaderIntro>
        Hello there, I am
        </HeaderIntro>
        
        <HeaderMainTitle>
        Juan Luis Chaurant.
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
      
      </HeaderInnerContainer>
      
      {/* <WidgetLeftBar /> */}
    </ThemeProvider>

    )
}
  
export default Hero
