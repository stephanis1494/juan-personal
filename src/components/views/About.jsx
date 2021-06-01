import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const BannerImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Header = styled.h1`
  display: flex;
  position: absolute;
  top: 110px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 80px;
  line-height: 80px;
  margin: 0px;
  padding: 0px;
  font-weight:300;
  font-family: 'Kristi', cursive;
`

const About = () => (
  <Container>
    <BannerImage
      src='https://res.cloudinary.com/df0ll615k/image/upload/v1622512511/about_us_page_background.jpg'
    />
    <Header>About</Header>
  </Container>
)

export default About