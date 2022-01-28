import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../global_styles/theme'
import ProfileCard from './ProfileCard'

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

const SectionTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontScale.smallScreen.medium};
  color: ${({ theme }) => theme.colors.fontMainColor};
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
  @media ((min-width: ${({ theme }) => theme.breakpoints.tabletX1})) {
    display: grid;
    grid-template-areas:
      'text pic'
      'foot foot';
    flex-direction: row;
    align-items: flex-start;
    column-gap: 2em;
  }
`

const InfoContainer = styled.div`
  grid-area: text;
  font-size: ${({ theme }) => theme.fontScale.smallScreen.small};
  line-height: 1.8em;
  flex: 1 1 50%;

  & > p:first-child {
    margin-top: 0;
  }
  & > p > * {
    margin-bottom: 1.4em;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  margin-top: 2em;
`

const TechStack = styled.div`
  grid-area: foot;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-bottom: 2.5em;

  ul {
    font-size: 1em;
    padding: 0 3em 1em 1em;
    margin: 0;
  }
  & > .tech {
  }
  li::marker {
    color: ${(props) => props.theme.colors.accentColor};
  }
`

const AbouMe = () => {
  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <InnerContainer id="about-me">
          <HeaderContainer>
            <LeftLine />
            <SectionTitle>About Me</SectionTitle>
            <Line />
          </HeaderContainer>

          <ContentContainer>
            <InfoContainer>
              <p>
                While hacking my way into computers, I discovered a passion for
                programming and making cool stuff happen.
              </p>

              <p>
                Making use of Information Technologies for optimizing processes
                is part of what I do on a daily basis. I am begining to look for
                a new position where I can team up with skilled individuals to
                make new things happen.
              </p>
              <p>
                Over the last year, I’ve been under the mentorship of an awesome
                Software Engineer and now is the moment to start using these
                acquired skills.
              </p>

              <p>Some of the technologies I am comfortable with:</p>
            </InfoContainer>

            <TechStack>
              <ul>
                <li className="tech">ES6 JavaScript</li>
                <li className="tech">React</li>
                <li className="tech">Styled-Components</li>
                <li className="tech">Terminal</li>
              </ul>
              <ul>
                <li className="tech">Version Control</li>
                <li className="tech">Semantic HTML</li>
                <li className="tech">CSS</li>
                <li className="tech">Flexbox & Grid</li>
              </ul>
            </TechStack>

            <ProfileCard />
          </ContentContainer>
        </InnerContainer>
      </OuterContainer>
    </ThemeProvider>
  )
}

// research about memo
export default AbouMe
