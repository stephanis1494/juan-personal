import React from 'react'
import styled from 'styled-components'
import {scrollIntoView} from "../utils/scrollIntoView";
import WidgetLeftBar from '../presentations/WidgetLeftBar'
import {BsChevronDoubleDown} from 'react-icons/bs'
import CONSTANTS from '../global_styles/constants'

let {breakpoints, colors, fontScale, fontWeight, fontSpacing} = CONSTANTS

const Header = styled.div`
  width: 100%;
  /* min-height: 480px; */
  height: 100vh;
  /* max-height: 100vh; */
  /* background-size: cover; */
  /* background-image: url('https://res.cloudinary.com/df0ll615k/image/upload/v1624845820/Asset_3_2x.png'); */
  /* filter: blur(8px); */
  background: #011627;
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  /* flex-wrap: wrap; */
`

const HeaderInnerContainer = styled.div`
  width: 850px;
    
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */

  @media (max-width: ${breakpoints.largeX1}) {
    margin: 0 52px;
  }
  @media (max-width: ${breakpoints.tabletX1}) {
    margin: 0 36px;
  }
  @media (max-width: ${breakpoints.phoneX1}) {
    margin: 0 28px;
  }

`

const HeaderSubtitle = styled.p`
  font-size: ${({fontSize}) => fontSize};
  color: ${({color}) => color};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '400'};
  /* text-align: center; */
  margin: 0px;
  padding: 0px;
  /* max-width: 350px; */
  line-height: 1.3em;

  @media (max-width: ${breakpoints.extraLargeX1}) {
    font-size: ${fontScale.bigX2}
  }
  @media (max-width: ${breakpoints.largeX1}) {
    font-size: ${fontScale.bigX2};
  }
  @media (max-width: ${breakpoints.tabletX1}) {
    font-size: ${fontScale.bigX1};
  }
  @media (max-width: ${breakpoints.phoneX1}) {
    font-size: ${fontScale.medium}
  }

`
const HeaderSubText = styled.p`
  font-size: ${({fontSize}) => fontSize};
  color: ${({color}) => color};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '400'};
  /* text-align: center; */
  margin: ${({margin}) => margin ? margin : 0}; 
  max-width: 450px;
  letter-spacing: ${({letterSpacing}) => letterSpacing ? letterSpacing : 'normal' };
  padding: 0;

  @media (max-width: ${breakpoints.tabletX1}) {
    font-size: ${fontScale.small};
  }
  @media (max-width: ${breakpoints.phoneX1}) {
    font-size: ${fontScale.small}
  }
  `

const Highlight = styled.span`
  color: rgb(229,202,64);
  font-size: ${fontScale.regular};
  
  @media (max-width: ${breakpoints.tabletX1}) {
    font-size: ${fontScale.small};
  }
  @media (max-width: ${breakpoints.phoneX1}) {
    font-size: ${fontScale.small}
  }
`

const HeaderDownArrow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 48px;
  color: #ccd8f4;
  cursor: pointer;
`

const Hero = () => {
    return (
        <Header>
            <HeaderInnerContainer>
                <HeaderSubText
                    fontSize={fontScale.small}
                    color={colors.accentColor}
                    fontWeight={fontWeight.extraBold800}
                    margin='0 0 12px 0'
                    letterSpacing={fontSpacing.regularSpacing}
                >
                    Hello there, I am
                </HeaderSubText>

                <HeaderSubtitle
                    fontSize={fontScale.bigX2}
                    color='#ccd8f4'
                    fontWeight={fontWeight.extraBold800}
                    margin={'0 0 0 0'}
                >
                    Juan Luis Chaurant.
                </HeaderSubtitle>
                <HeaderSubtitle
                    fontSize={fontScale.bigX2}
                    color='rgb(132,159,182)'
                    fontWeight='800'
                    margin={'0 0 0 0'}
                >
                    Making the web.
                </HeaderSubtitle>

                <HeaderSubText
                    fontSize={fontScale.regular}
                    color='#ccd8f4'
                    margin={'16px 0 0 0'}
                    fontSpacing={fontSpacing.smallSpacing}
                >
                    I enjoy solving <Highlight>real world problems</Highlight><br /> making use of <Highlight>new technologies</Highlight>.
                </HeaderSubText>

                <HeaderDownArrow 
                    onClick={() => scrollIntoView('about-me', 'start')}
                >
                    <BsChevronDoubleDown/>
                </HeaderDownArrow>

            </HeaderInnerContainer>

            <WidgetLeftBar />
        </Header>
    )
}

export default Hero
