import React from 'react'
import styled from 'styled-components'
import { IoMdOpen } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import CONSTANTS from '../../global_styles/constants'

const InnerContainer = styled.div`
  width: 100%;
  max-width: 900px;
`

const SectionTitle = styled.h2`
  font-size: ${CONSTANTS.fontScale.medium};
  color: rgb(204, 215, 245);
  display: flex;

  &:after {
    display: block;
    content: '';
    /* width: 32%; */
    height: 1px;
    transform: translateY(22px);
    background: rgb(95, 126, 151);
    flex: 1 1 auto;
    margin-left: 12px;
  }

  @media (max-width: ${`${CONSTANTS.breakpoints.tabletX1}`}) {
    font-size: 24px;
  }
`
const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(6, 1fr);
`
const SectionContentTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  grid-row: 2 / 3;
  grid-column: -1 / -11;
  text-align: right;

  color: rgb(204, 216, 244);

  /*    &:after {
        display: block;
        content: '';
        width: 25%;
        height: 1px;
        !* transform: translateY(22px); *!
        background: rgb(95,126,151);
        !* flex: 1 1 auto; *!
        margin-top: 6px;
        margin-left: auto;
    }*/
`
const SectionContentImage = styled.img`
  width: 500px;
  height: 350px;

  align-self: center;
  grid-column: 1 / 12;
  grid-row: 1 / -1;

  @media (max-width: ${`${CONSTANTS.breakpoints.extraLargeX1}`}) {
    display: none;
  }
`
const SectionContentBody = styled.div`
  background: rgb(11, 41, 66);
  color: rgb(204, 216, 244);
  padding: 1px 24px;
  border-radius: 8px;

  font-size: 16px;
  text-align: right;

  align-self: center;
  grid-column: 12 / -1;
  grid-row: 3 / 5;
`

const SectionContentTechList = styled.div`
  grid-column: -1 / 18;
  grid-row: 5 / 5;

  margin-top: 18px;

  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: white;
    list-style: none;

    display: flex;
    flex-direction: row;
    /* margin: 0 8px; */
    font-size: 12px;
    margin: 0;
    padding: 0;
  }

  & > ul > li {
    color: rgb(95, 126, 151);
    /* margin: 0 5px; */
    padding: 0;
  }
`

const SectionContentLinks = styled.div`
  grid-column: -1 / 23;
  grid-row: 6 / 6;

  color: rgb(204, 216, 243);
  font-weight: bold;
  font-size: 32px;
  display: flex;
  justify-content: space-around;
`

const Container = styled.div`
  /* height: 100vh; */
  width: 100vw;

  background: rgb(1, 22, 39);
  box-sizing: border-box;

  padding: 4em 0;

  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-left: 8px;

  @media (max-width: ${`${CONSTANTS.breakpoints.extraLargeX1}`}) {
    margin-right: 16px;
  }
`

const LeftLine = styled.div`
  display: none;
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;

  @media (max-width: ${`${CONSTANTS.breakpoints.extraLargeX1}`}) {
    display: inline-block;
    margin-right: 16px;
  }
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const InfoContainer = styled.div`
  margin-left: -64px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${`${CONSTANTS.breakpoints.extraLargeX1}`}) {
    margin-left: 0;
    align-items: center;
    justify-content: center;
  }
`

const SubHeader = styled.div`
    font-weight: bold;
    font-size: 24px;
    text-align: right;
    color: rgb(204, 216, 244);
`

const BodyText = styled.div`
    margin-top: 8px;
  background: rgb(11, 41, 66);
  color: rgb(204, 216, 244);
  padding: 1px 24px;
  border-radius: 8px;
  font-size: 16px;
  text-align: right;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: ${`${CONSTANTS.breakpoints.extraLargeX1}`}) {
    width: 50%;
    margin-top: 32px;
    padding: 24px;
    text-align: center;
  }
`

const LinkContainer = styled.div`
    margin-top: 18px;
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
`

const ListItem = styled.div`
    font-size: ${CONSTANTS.fontScale.small};
    margin-right: 8px;
    color: rgb(95, 126, 151);
`
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: flex-end; */
  /* color: ${CONSTANTS.colors.secondaryColor}; */
  color: ${CONSTANTS.colors.fontMainColor};
  margin-top: 8px;
  /* font-size: 45px; */

  & ${IoMdOpen} ${FiGithub} {
    font-size: 80px;
  }
`

const SectionMainProject = () => {
  return (
    <Container>
        <InnerContainer>
            <HeaderContainer>
              <LeftLine />
                <SectionTitle>Projects I've built</SectionTitle>
                <Line />
            </HeaderContainer>
            <BodyContainer>
                <SectionContentImage src='https://assets-global.website-files.com/5fda3048302e579473bfb454/6081869d03bc45778e9e752c_CleanShot%20Slite%20Project%20Proposal%20Template%20-%20Project%20Proposal%20Template%20at%2018.21.39.png'></SectionContentImage>
                <InfoContainer>
                    <SubHeader>A Super Project</SubHeader>
                    <BodyText>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, explicabo? Esse est illum obcaecati neque veniam cum similique velit, at sed et tenetur asperiores consequatur fugit accusantium nihil quo qui?</p>
                    </BodyText>
                    <LinkContainer>
                            <ListItem>NODE</ListItem>
                            <ListItem>NPM</ListItem>
                            <ListItem>React</ListItem>
                    </LinkContainer>
                    <IconContainer>
                      <IoMdOpen size={CONSTANTS.fontScale.regular}></IoMdOpen>
                      <FiGithub size={CONSTANTS.fontScale.regular}></FiGithub>
                    </IconContainer>
                </InfoContainer>
            </BodyContainer>
        </InnerContainer>
    </Container>
  )
}

export default SectionMainProject

/*
*         <Container>
            <InnerContainer>
            <SectionTitle>Projects I've built</SectionTitle>

                <SectionContent>
                    <SectionContentTitle>A Super Project</SectionContentTitle>
                    <SectionContentImage src='https://assets-global.website-files.com/5fda3048302e579473bfb454/6081869d03bc45778e9e752c_CleanShot%20Slite%20Project%20Proposal%20Template%20-%20Project%20Proposal%20Template%20at%2018.21.39.png'></SectionContentImage>
                    <SectionContentBody>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, explicabo? Esse est illum obcaecati neque veniam cum similique velit, at sed et tenetur asperiores consequatur fugit accusantium nihil quo qui?</p>
                    </SectionContentBody>

                    <SectionContentTechList>
                        <ul>
                            <li>NODE</li>
                            <li>NPM</li>
                            <li>React</li>
                            <li>Styled Components</li>
                        </ul>
                    </SectionContentTechList>

                    <SectionContentLinks>
                        <FiGithub className='githubIcon'/>
                        <IoMdOpen/>
                    </SectionContentLinks>
                </SectionContent>


            </InnerContainer>
        </Container>
* */
