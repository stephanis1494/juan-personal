import React from 'react'
import styled from 'styled-components'
import { IoMdOpen } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import theme from '../../global_styles/theme'
import { ThemeProvider } from 'styled-components'

const InnerContainer = styled.div`
  height: 100vh;
  background: ${props=>props.theme.colors.primaryColor};
  padding: 4em 2em;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 1.4em;
`
const SectionTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props=>props.theme.fontScale.smallScreen.medium};
  color: ${props=>props.theme.colors.fontMainColor};
`

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;
`

const LeftLine = styled.div`
  display: none;
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`

const BodyImg = styled.img`
  display: block;
  max-width: 85%;
`

const BodyContent = styled.div`
  /* margin-left: -64px; */
  display: flex;
  flex-direction: column;

`

const BoySubtitle = styled.div`
  margin-bottom: .5em;
  padding-left: 1.2em;
  font-weight: bold;
  font-size: ${props=>props.theme.fontScale.smallScreen.regular};
  /* text-align: right; */
  color: ${props=>props.theme.colors.fontMainColor};
`

const BodyText = styled.div`
  margin-top: 8px;
  background: rgb(11, 41, 66);
  color: ${props=>props.theme.colors.fontMainColor};
  padding: 1px 24px;
  border-radius: 8px;
  font-size: 16px;
  /* text-align: right; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

const LinkContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`

const ListItem = styled.div`
    font-size: ${props=>props.theme.fontScale.smallScreen.small};
    margin-right: 8px;
    color: rgb(95, 126, 151);
`
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: flex-end; */
  color: $${props=>props.theme.colors.fontMainColor};
  margin-top: 8px;
  /* font-size: 45px; */

  & ${IoMdOpen} ${FiGithub} {
    font-size: 80px;
  }
`

const SectionMainProject = () => {
  return (
    <ThemeProvider theme={theme}>
      <InnerContainer>
        
        <HeaderContainer>
          <LeftLine />
          <SectionTitle>Check Out!</SectionTitle>
          <Line />
        </HeaderContainer>
        
        <BodyContainer>
          
          <BodyImg src='https://assets-global.website-files.com/5fda3048302e579473bfb454/6081869d03bc45778e9e752c_CleanShot%20Slite%20Project%20Proposal%20Template%20-%20Project%20Proposal%20Template%20at%2018.21.39.png'></BodyImg>
          
          <BodyContent>
            <BoySubtitle>A Super Project</BoySubtitle>
            <BodyText>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, explicabo? Esse est illum obcaecati neque veniam cum similique velit, at sed et tenetur asperiores consequatur fugit accusantium nihil quo qui?</p>
            </BodyText>

            <LinkContainer>
              <ListItem>NODE</ListItem>
              <ListItem>NPM</ListItem>
              <ListItem>React</ListItem>
            </LinkContainer>

            <IconContainer>
              <IoMdOpen size="1rem"></IoMdOpen>
              <FiGithub size="1rem"></FiGithub>
            </IconContainer>

          </BodyContent>

        </BodyContainer>
      </InnerContainer>

    </ThemeProvider>
  )
}

export default SectionMainProject
