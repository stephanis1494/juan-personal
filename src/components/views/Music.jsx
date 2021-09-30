import React, { useState } from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'
// import RegularNavbar from '../presentations/RegularNavbar'
import { motion } from 'framer-motion'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import CONSTANTS from '../global_styles/constants'

const VIDEO_IDS = [
  'AC2lUyJr1Qc',
  'BiCQBRrJT4E',
  'duN3tlNueYs',
  'YSZHKuAq9dQ',
  'BGIs5y03GKU',
  'ho5XD6hbj4c',
  'oE-ERhh2lnA',
  'iFre-xeR2-U',
  'YRrzgmSIx7c'
]

const VIDEO_OPTS = {
  height: '292.5',
  width: '480'
}

const Container = styled.div`
  width: 100%;
  padding: 4em 0;
  background: #011627;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const InnerContainer = styled.div`
  max-width: 800px;
  width: 80%;

  @media (max-width: ${CONSTANTS.breakpoints.phoneX1}) {
    width: 90%;
  }

`

const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${`${CONSTANTS.breakpoints.tabletX1}`}) {
    flex-direction: column;
    flex-direction: column-reverse;
    /* justify-content: center; */
    align-items: center;
  }

  @media (max-width: ${CONSTANTS.breakpoints.phoneX1}) {
    
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8px;

  & > .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 80px;

    /* font-size: 24px; */
    margin: 0;

    cursor: pointer;
    & > .arrow_button:hover {
      color: yellow;
    }
  }

  & > .counter {
    color: #5f7e97;
    font-size: 12px;
    margin: 4px 0 4px 0;
  }

  & .button {
    text-align: center;
    background: transparent;
    border-radius: 4px;
    border: 1px solid #57768f;
    color: #57768f;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 0px 8px;
  }

  & .button:hover {
    border: 1px solid #e5ca40;
    background: #e5ca40;
    color: #0b2942;
  }
`

const VideoContainer = styled(motion.div)`
  margin: 12px 0 24px 0;
  padding: 8px 8px 4px 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: fit-content;
  background-color: rgb(11, 41, 66);
  /* height: fit-content; */

  & > .the_video {

  }
  @media (max-width: ${CONSTANTS.breakpoints.phoneX1}) {
    & > .the_video > iframe {

      width: 280px;
      height: 292.5px;
    }
  }
`

const SectionTitle = styled.h2`
  font-size: 32px;
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

  @media (max-width: ${CONSTANTS.breakpoints.tabletX1}) {
    font-size: ${CONSTANTS.fontScale.regular}
  }
`

const DescriptionContainer = styled.div`
  margin-left: 28px;
  width: 100%;
  @media (max-width: ${CONSTANTS.breakpoints.phoneX1}) {
    text-align: center;
  }
`

const SectionSubtitle = styled.h3`
  color: #ccd7f5;
`

const SectionText = styled.div`
  color: #ccd7f5;
  font-size: 16px;
`

const Video = ({ children }) => {
  const [hover, setHover] = useState(false)

  // console.log(VIDEO_IDS.length)
  return (
    <VideoContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={{ scale: hover ? 1.01 : 1.0 }}
      transition={{
        type: 'tween',
        stiffness: 200,
        damping: 30,
        duration: 0.25
      }}
    >
      {children}
    </VideoContainer>
  )
}

const Music = () => {
  const [currentVid, setCurrentVid] = useState(0)
  const VID_LENGTH = VIDEO_IDS.length
  const currentVideoId = VIDEO_IDS[currentVid]

  const handleNextVideo = () => {
    console.log(currentVid)
    // setCurrentVid(currentVid+1)
    console.log(VID_LENGTH)
    setCurrentVid(currentVid < VID_LENGTH - 1 ? currentVid + 1 : 0)
  }

  const handlePreviousVideo = () => {
    console.log(currentVid)
    // setCurrentVid(currentVid+1)
    console.log(VID_LENGTH)
    setCurrentVid(currentVid <= 0 ? VID_LENGTH - 1 : currentVid - 1)
  }

  return (
    <Container id='music-container'>
      {/* <RegularNavbar alwaysFilled /> */}
      <InnerContainer>
        <SectionTitle>I play music too</SectionTitle>
        <VideosContainer>
          <Video>
            <YouTube
              containerClassName="the_video"
              key={`${currentVideoId}-${currentVid}`}
              videoId={currentVideoId}
              opts={VIDEO_OPTS}
              style={{
                margin: '24px'
              }}
            />

            <ButtonsContainer>
              <div className="buttons">
                <div className="button" onClick={handlePreviousVideo}>
                  <BiLeftArrowAlt />
                </div>
                <div className="button" onClick={handleNextVideo}>
                  <BiRightArrowAlt />
                </div>
              </div>
              <div className="counter">
                {currentVid + 1}/{VID_LENGTH}
              </div>
            </ButtonsContainer>
          </Video>
          <DescriptionContainer>
            <SectionSubtitle>Some performances</SectionSubtitle>
            <SectionText>
              <p>
                Music plays a huge role in my personal development, have been
                playing guitar for +10 years now and still going strong.
              </p>
            </SectionText>
          </DescriptionContainer>
        </VideosContainer>
      </InnerContainer>
    </Container>
  )
}

export default Music
