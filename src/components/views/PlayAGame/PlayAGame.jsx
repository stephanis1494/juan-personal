import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../global_styles/theme'
import BreakoutModal from './BreakoutModal'
import { useState, useEffect } from 'react'

const OuterContainer = styled.section`
  padding-inline: 1em;
  background: ${(props) => props.theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.fontBodyColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
  margin: 2em auto 4em auto;
  width: 95%;
  max-width: 1000px;

  @media ((min-width: ${(props) => props.theme.breakpoints.tabletX1})) {
    width: 80%;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoints.extraLargeX1})) {
    width: 70%;
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

  @media (max-width: ${`${({ theme }) => theme.breakpoints.extraLargeX1}`}) {
    margin-right: 16px;
  }
`
const SectionTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontScale.smallScreen.medium};
  color: ${({ theme }) => theme.colors.fontMainColor};
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 100%;
`

const LeftColumn = styled.div`
  ul {
    list-style: none;
  }
  li {
    position: relative;
  }
  li::before {
    position: absolute;
    left: -15px;

    content: '○';
    color: ${(props) => props.theme.colors.accentColor};
    font-size: 0.8em;
    margin-right: 1em;
  }
`

const OpenModal = styled.button`
  position: relative;
  margin-top: 1em;

  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: none;
  padding: 10px 20px;

  border: 1.5px solid ${(props) => props.theme.colors.accentColor};
  font-size: 0.9em;
  color: ${(props) => props.theme.colors.accentColor};
  transition: all 300ms ease-in-out;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.colors.accentColor};
    color: ${(props) => props.theme.colors.primaryColor};
  }
`

const PlayAGame = () => {
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = openModal ? 'hidden' : 'auto'
  }, [openModal])

  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <InnerContainer>
          <HeaderContainer>
            <SectionTitle>Games</SectionTitle>
            <Line />
          </HeaderContainer>

          <ContentContainer>
            <LeftColumn>
              <p>
                Making games, lends itself to learning more about how to write
                good software. It plays an important role in my growth as a
                software developer.
              </p>
              <p>Some technical stuff I enjoy:</p>
              <ul>
                <li>
                  Creating maps based on data structures (2D arrays) for
                  platform games.
                </li>
                <li>Collision detection making use of IF statements.</li>
                <li>Animating sprites using FOR loops. </li>
              </ul>
              <p>
                If you're on desktop, open up the modal and play "Break the heck
                out" and let your score registered.
              </p>
            </LeftColumn>
            <OpenModal onClick={() => setOpenModal((prev) => !prev)}>
              Play game!
            </OpenModal>
            <BreakoutModal
              isModalOpened={openModal}
              setModalState={setOpenModal}
            />
          </ContentContainer>
        </InnerContainer>
      </OuterContainer>
    </ThemeProvider>
  )
}

// research about memo
export default PlayAGame
