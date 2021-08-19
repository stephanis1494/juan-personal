import React, { useState } from 'react'
import YouTube from "react-youtube"
import styled from "styled-components"
import RegularNavbar from '../presentations/RegularNavbar'
import { motion } from 'framer-motion'

const VIDEO_IDS = [ 'AC2lUyJr1Qc','BiCQBRrJT4E', 'duN3tlNueYs', 'YSZHKuAq9dQ', 'BGIs5y03GKU', 'ho5XD6hbj4c', 'oE-ERhh2lnA', 'iFre-xeR2-U', 'YRrzgmSIx7c' ]

const VIDEO_OPTS = {
  height: '292.5',
  width: '480',
}

const Container = styled.div`
  width: 100%;
  margin-top: -64px;
`

const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
`

const  VideoContainer = styled(motion.div)`
  margin : 16px;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Video = ({ children }) => {
  const [hover, setHover] = useState(false)

  return (
      <VideoContainer
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          animate={{ scale: hover ? 1.05 : 1.0 }}
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
  return (
      <Container>
        <RegularNavbar alwaysFilled />
        <VideosContainer>
          {VIDEO_IDS.map((videoId, index) => (
              <Video>
                <YouTube
                    key={`${videoId}-${index}`}
                    videoId={videoId}
                    opts={VIDEO_OPTS}
                    style={{
                      margin: '24px'
                    }}
                />
              </Video>
          ))}
        </VideosContainer>
      </Container>
  )
}

export default Music
