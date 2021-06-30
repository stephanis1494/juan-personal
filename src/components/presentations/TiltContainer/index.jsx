import React, { memo } from 'react'
import styled from "styled-components";

const InnerContainer = styled.div`
  background: url('https://res.cloudinary.com/dm7mqsupu/image/upload/v1624995720/tilted-small.svg') no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 462px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 5px; */
  /* padding-bottom: 1000px; */
  /* position: relative;
  width: 100%;
  color: white;*/
  /* margin-top: 100px;  */
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 75%;

`

const ProfileImage = styled.img.attrs({
  src: 'https://res.cloudinary.com/dm7mqsupu/image/upload/v1624994587/Asset_3_4x-8_omtwm0.png'
})`
width: 200px;
height: 200px;
border-radius: 50%;
margin-right: 4%;
`

const ProfileText = styled.div``

const ProfileTextTitle = styled.h1`
  color: #fff800;
  margin-bottom: 0;
`

const ProfileTextSubTitle = styled.h2`
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0;
  `

const ProfileTextParagraph = styled.p`
  color: rgba(255, 255, 255, 0.9);
`

const TiltContainer = ({ children }) => (
  <InnerContainer>
    <ContentContainer>
      <ProfileImage />
      <ProfileText>
        <ProfileTextTitle>Juan Luis Chaurant</ProfileTextTitle>
        <ProfileTextSubTitle>Web Developer and Musician</ProfileTextSubTitle>
        <ProfileTextParagraph>I live and work in a small town in Venezuela. While hacking my way into computers, I discovered my passion for programming and making cool stuff happen with my old desktop computer. My current objective, is to be part of projects involving both, logic and creativity.</ProfileTextParagraph>
      </ProfileText>
    </ContentContainer>
  </InnerContainer>
)

export default memo(TiltContainer)