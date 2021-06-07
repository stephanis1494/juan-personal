import ContentHero from "../presentations/ContentHero";
import styled from 'styled-components'

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: blue; */
  width: 100%;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 24px 0px;
`

const HeaderSpacer = styled.div`
  height: 2px; 
  background-color: #192530;
  flex-grow: 2;
  min-height: 2px;
  margin: 0 16px;
`
const Header = styled.h1`
  font-size: 32px;
  margin: 0px 8px;
  color: #192530;
  `
const Paragraph = styled.p`
  font-size: 12px;
  color: #192530;
  max-width: 360px;
  text-align: center;
`

const About = () => (
  <ContentContainer>

    <ContentHero title={'About'} />
    <HeaderContainer>
      <HeaderSpacer />
        <Header>Hello, my name is Juan</Header>
      <HeaderSpacer />

    </HeaderContainer>
    <Paragraph>I live and work in a small town in Venezuela. While hacking my way into computers, I discovered my passion for programming and making cool stuff happen with my old desktop computer. My objective now, is to be part of projects involving both, logic and creativity.</Paragraph>
    <Paragraph>While my focus is on building mobile-first, heavily interactive sites and being a creative Front-End Developer (who also plays music quite often), I also enjoy game development.</Paragraph>

  </ContentContainer>

)

export default About