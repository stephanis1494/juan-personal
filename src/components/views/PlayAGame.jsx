import React from 'react'
import styled from "styled-components";
import Breakout from "./games/breakout";
import FlappySquare from './games/flappysquare'
import CONSTANTS from '../global_styles/constants';
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
    font-size: 32px;
    color: rgb(204,215,245);
    display: flex;

    &:after {
        display: block;
        content: '';
        /* width: 32%; */
        height: 1px;
        transform: translateY(22px);
        background: rgb(95,126,151);
        flex: 1 1 auto;
        margin-left: 12px
    }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: flex-start;
  width: 850px;

  & > div {
      max-width: 75%;
      width: 75%;
      margin-left: 36px;
      line-height: 1.6;
      font-size: 16px;
  }

  & > div > p {
      margin-top: 0;
      color: #ccd7f5;
      /* background: red; */
  }

  & > div > .technologies {
      display: grid;
      grid-template-columns: repeat(3, 90px);
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 5px;
      grid-column-gap: 5px;
  }

  & > div > .technologies > .tech {
      text-align: center;
      background: transparent;
      border-radius: 4px;
      border: 1px solid #e5ca40;
      color: #e5ca40;
  }

  & > div > .technologies > .tech:hover {
      background: #e5ca40;
      border-radius: 4px;
      color: #011627;
  }

  @media (max-width: ${CONSTANTS.breakpoints.tabletX1}) {
      display: none;
  }
`

const PlayAGame = () => {
    return (
        <Container>
            <InnerContainer>
                <SectionTitle>Breakout</SectionTitle>
    
                <ContentContainer>
                    <div id='game-container'>
                        <FlappySquare></FlappySquare>
                    </div>
                </ContentContainer>

            </InnerContainer>
        </Container>
    )
}

// research about memo
export default PlayAGame
