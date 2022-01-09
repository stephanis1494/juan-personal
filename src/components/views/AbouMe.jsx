import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../global_styles/theme';

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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4em;

  @media ((min-width: ${props=>props.theme.breakpoints.largeX1})) {
    flex-direction: row;
    column-gap: 2em
  }
`

const ProfileImage = styled.img.attrs({
    src: 'https://res.cloudinary.com/dm7mqsupu/image/upload/v1624994587/Asset_3_4x-8_omtwm0.png'
  })`
    max-width: 80%;
    margin: 0;
    flex: 1 1 50%;
    
    @media ((min-width: ${props=>props.theme.breakpoints.largeX1})) {
      max-width: 40%;
      align-self: flex-start;
    }
  `

const InfoContainer = styled.div`
  color: ${props=>props.theme.colors.fontMainColor}; 
  font-size: ${props=>props.theme.fontScale.smallScreen.small}; 
  line-height: 1.8em;
  flex: 1 1 50%;

  & > p:first-child {
    margin-top: 0;
  }
  & > p > * {
    margin-bottom: 1.4em;
  }
  
  & > .tech-stack{
    margin-top: 1.4em;
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 200px));
    grid-gap: 1em;

    text-align: center;
  }
  & > .tech-stack > .tech {

    padding: .5em;
    color: ${props=>props.theme.colors.accentColor}; 
    background: none;
    border: 1px solid ${props=>props.theme.colors.accentColor};
    cursor: pointer;

    position: relative;
    display: inline-block;
    background-image: linear-gradient(#e5ca40, #e5ca40);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size .5s, color .5s;
  }

  & > .tech-stack > .tech:hover {
    background-size: 100% 100%;
    color: ${props=>props.theme.colors.primaryColor};
  }

`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`

const AbouMe = () => {
  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <InnerContainer id='about-me'>
          
          <HeaderContainer>
            <LeftLine />
            <SectionTitle>About Me</SectionTitle>
            <Line />
          </HeaderContainer>
          
          <ContentContainer>
            <InfoContainer>
              <p>While hacking my way into computers, I discovered my passion for programming and making cool stuff happen with my old desktop computer. My current objective, is to be part of projects involving both, logic and creativity.</p>

              <p>So far I've had the opportunity to participate in projects ranging from education to music, recently I was in charge of developing a set of pedagogic booklets that go from Microsoft Office Apps (Word, Excel and PowerPoint) to translating open source material and developing small scripts to automate processes.</p>

              <p>Here some of the technologies I am comfortable with:</p>

              <div className="tech-stack">
                <div className="tech">
                  JavaScript
                </div>
                <div className="tech">React</div>
                <div className="tech">CSS</div>
                <div className="tech">Flexbox</div>
                <div className="tech">Grid</div>
              </div>

            </InfoContainer>
            
            <ProfileImage />

          </ContentContainer>

        </InnerContainer>
      </OuterContainer>
    </ThemeProvider>
  )
}

// research about memo
export default AbouMe
