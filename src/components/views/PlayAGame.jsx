import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Breakout from "./games/breakout";
import Dinosaur from './games/dinosaur';
import theme from '../global_styles/theme';

const Container = styled.div`
    /* height: 100vh; */
    width: 100vw;
    
    background:rgb(1,22,39);
    box-sizing: border-box;
    
    padding: 4em 0;

    display: flex;
    justify-content: center;
    align-items: center;
    
`

const InnerContainer = styled.div`
    width: 100%;
    max-width: 900px;
`

const SectionTitle = styled.h2`
    font-size: 1em;
    color: rgb(204, 215, 245);
    display: flex;

    @media (max-width: ${`${({theme}) => theme.breakpoints.tabletX1}`}) {
        font-size: 24px;
    }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 100%;

  & > #breakout-container {
    max-width: 75%;
    width: 75%;
    margin-left: 36px;
    line-height: 1.6;
    font-size: 16px;
    display: inline-block;
    @media (max-width: ${({theme}) => theme.breakpoints.tabletX1}) {
      display: none;
    }
  }

  & > #flappy-container {
    max-width: 75%;
    width: 75%;
    margin-left: 36px;
    line-height: 1.6;
    font-size: 16px;
    display: none;
    @media (max-width: ${({theme}) => theme.breakpoints.phoneX1}) {
      display: inline-block;
    }
  }

  & > #dinosaur-container {
    max-width: 75%;
    width: 75%;
    margin-left: 36px;
    line-height: 1.6;
    font-size: 16px;
    display: none;
    @media (max-width: ${({theme}) => theme.breakpoints.phoneX1}) {
      display: inline-block;
      
    }
  }

`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
    margin: 26px 0;
`

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;

  @media (max-width: ${`${({theme}) => theme.breakpoints.extraLargeX1}`}) {
    margin-right: 16px;
  }
`

const LeftLine = styled.div`
  display: none;
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;

  @media (max-width: ${`${({theme}) => theme.breakpoints.extraLargeX1}`}) {
    display: inline-block;
    margin-right: 16px;
  }
`

const PlayAGame = () => {
    return (
    <ThemeProvider theme={theme}>
      
      <Container>
          <InnerContainer>
              <HeaderContainer>
                  <LeftLine />
                  <SectionTitle>Breakout</SectionTitle>
                  <Line />
              </HeaderContainer>

              <ContentContainer>
                  <div id='breakout-container'>
                      <Breakout/>
                  </div>

                  <div id="dinosaur-container">
                    <Dinosaur />
                  </div>
              </ContentContainer>

          </InnerContainer>
      </Container>

    </ThemeProvider>
    )
}

// research about memo
export default PlayAGame
