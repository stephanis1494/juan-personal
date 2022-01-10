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
  justify-content: center;
  column-gap: 4em;
  margin-top: calc(4em + 2em);

  @media ((min-width: ${props=>props.theme.breakpoints.largeX1}) ) {
    flex-direction: row;
  }
`

// new component
// ++++++++++++++++++

const FeaturedContainer = styled.div`
  background: rgb(11, 41, 66);
  color: ${({theme}) => theme.colors.fontMainColor};
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2em;
  padding-bottom: 4em;
  max-width: 35em;
`

const FeaturedContainerImage = styled.div`
  width: 80%;
  height: 80%;
  max-width: 23em;
  max-height: 23em;
  transform: translateY(-4em);

`
const Image = styled.img.attrs({
  src: 'https://assets-global.website-files.com/5fda3048302e579473bfb454/6081869d03bc45778e9e752c_CleanShot%20Slite%20Project%20Proposal%20Template%20-%20Project%20Proposal%20Template%20at%2018.21.39.png'
})`
  max-width: 100%;
`

const FeaturedContainerContent = styled.div`
  max-width: 85%;
`


const FeaturedContainerDate = styled.div`
  /* color: rgb(95, 126, 151); */
  color: ${({theme}) => theme.colors.accentColor};
`
const FeaturedContainerTitle = styled.h3`
  font-size: var(--fs-500);
  margin-top: 0;
  margin-bottom: .0em;
`

const FeaturedContainerText = styled.div`
  line-height: 1.5em;
  padding-bottom: 1em;
`

const FeaturedContainerFooter = styled.div`
  & > *:first-child {
    margin-bottom: .8em;
  }
`

const LinkContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`

const LinkItem = styled.div`
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

            <FeaturedContainer>
              
              <FeaturedContainerImage>
                <Image></Image>
              </FeaturedContainerImage>
              
              <FeaturedContainerContent>
                
                <FeaturedContainerDate>October 25 - November 1, 2021</FeaturedContainerDate>
                <FeaturedContainerTitle>A cool Project</FeaturedContainerTitle>
                
                <FeaturedContainerText>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, est!</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, unde?</p>
                </FeaturedContainerText>  

                <FeaturedContainerFooter>
                  <LinkContainer>
                    <LinkItem>NODE</LinkItem>
                    <LinkItem>NPM</LinkItem>
                    <LinkItem>React</LinkItem>
                  </LinkContainer>

                  <IconContainer>
                    <IoMdOpen size="2rem"></IoMdOpen>
                    <FiGithub size="2rem"></FiGithub>
                  </IconContainer>
                </FeaturedContainerFooter>

              </FeaturedContainerContent>

            </FeaturedContainer>
            {/* end of FeaturedContainer */}

            <FeaturedContainer>
              
              <FeaturedContainerImage>
                <Image></Image>
              </FeaturedContainerImage>
              
              <FeaturedContainerContent>
                
                <FeaturedContainerDate>October 25 - November 1, 2021</FeaturedContainerDate>
                <FeaturedContainerTitle>A cool Project</FeaturedContainerTitle>
                
                <FeaturedContainerText>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, est!</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, unde?</p>
                </FeaturedContainerText>  

                <FeaturedContainerFooter>
                  <LinkContainer>
                    <LinkItem>NODE</LinkItem>
                    <LinkItem>NPM</LinkItem>
                    <LinkItem>React</LinkItem>
                  </LinkContainer>

                  <IconContainer>
                    <IoMdOpen size="2rem"></IoMdOpen>
                    <FiGithub size="2rem"></FiGithub>
                  </IconContainer>
                </FeaturedContainerFooter>

              </FeaturedContainerContent>

            </FeaturedContainer>
            {/* end of FeaturedContainer */}

            

          </BodyContainer>
        </InnerContainer>
      </OuterContainer>

    </ThemeProvider>
  )
}

export default SectionMainProject

    

