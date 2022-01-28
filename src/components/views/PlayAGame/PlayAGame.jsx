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
            <p onClick={() => setOpenModal((prev) => !prev)}>click here</p>
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
