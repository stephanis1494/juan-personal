import React from 'react'
import styled from 'styled-components'
import { IoMdOpen } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import theme from '../../global_styles/theme'
import { ThemeProvider } from 'styled-components'

const OuterContainer = styled.section`
  padding-inline: 1em;
	background: ${props=>props.theme.colors.primaryColor};
	
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
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
  gap: 1.3em;

  @media ((min-width: ${props=>props.theme.breakpoints.largeX1}) ) {
    flex-direction: row;
  }
  `

const BodyImgContainer = styled.div`
  width: 50%;
  min-width: 300px;

  @media ((min-width: ${props=>props.theme.breakpoints.largeX1})) {
    flex: 1 2 300px;

    position: relative;
    z-index: 2;
  }
`
const BodyImg = styled.img`
  /* margin: 0; */
  max-width: 100%;
`

const BodyContent = styled.div`
  /* margin-left: -64px; */
  display: flex;
  flex-direction: column;
  
  @media ((min-width: ${props=>props.theme.breakpoints.largeX1})) {
    flex: 1 1 auto;

  }
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

  @media ((min-width: ${props=>props.theme.breakpoints.largeX1})) {
    position: relative;
    left: -4em;
    width: calc(100% + 4em);
    padding-left: calc(4em + 1em);
    padding-right: 2em;
    z-index: 1;

  }
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
  column-gap: .4em;
  /* align-items: flex-end; */
  color: ${props=>props.theme.colors.fontMainColor};
  margin-top: 8px;

  & > * {
    cursor: pointer;
  }
  

`

const SectionMainProject = () => {
  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <InnerContainer>
          
          <HeaderContainer>
            <LeftLine />
            <SectionTitle>Check Out!</SectionTitle>
            <Line />
          </HeaderContainer>
          
          <BodyContainer>
            
            <BodyImgContainer>
              <BodyImg src='https://assets-global.website-files.com/5fda3048302e579473bfb454/6081869d03bc45778e9e752c_CleanShot%20Slite%20Project%20Proposal%20Template%20-%20Project%20Proposal%20Template%20at%2018.21.39.png'></BodyImg>
            </BodyImgContainer>
            
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
                <IoMdOpen size="2rem"></IoMdOpen>
                <FiGithub size="2rem"></FiGithub>
              </IconContainer>

            </BodyContent>

          </BodyContainer>
        </InnerContainer>
      </OuterContainer>

    </ThemeProvider>
  )
}

export default SectionMainProject
