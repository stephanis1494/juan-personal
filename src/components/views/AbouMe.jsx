import React from 'react'
import styled from "styled-components";

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
`

const ProfileImage = styled.img.attrs({
    src: 'https://res.cloudinary.com/dm7mqsupu/image/upload/v1624994587/Asset_3_4x-8_omtwm0.png'
  })`
    max-width: 100%;
    width: 35%;
    margin: 0;

    /* width: 200px;
    height: 200px; */
    /* border-radius: 50%; */
  `


const AbouMe = () => {
    return (
        <Container>
            <InnerContainer>
                <SectionTitle>About Me</SectionTitle>
                <ContentContainer>
                    <ProfileImage />
                    <div>
                        <p>I live and work in a small town in Venezuela. While hacking my way into computers, I discovered my passion for programming and making cool stuff happen with my old desktop computer. My current objective, is to be part of projects involving both, logic and creativity.</p>
                        
                        <p>So far I've had the opportunity to participate in projects ranging from education to music, recently I was in charge of developing a set of pedagogic booklets that go from Microsoft Office Apps (Word, Excel and PowerPoint) to translating open source material and developing small scripts to automate processes.</p>

                        <p>Here some of the technologies I am comfortable with:</p>

                        <div className="technologies">
                            <div className="tech">JavaScript</div>
                            <div className="tech">React</div>
                            <div className="tech">CSS</div>
                            <div className="tech">Flexbox</div>
                            <div className="tech">Grid</div>
                        </div>

                    </div>
                </ContentContainer>

            </InnerContainer>
        </Container>
    )
}

// research about memo
export default AbouMe
