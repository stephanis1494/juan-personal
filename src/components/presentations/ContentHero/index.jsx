import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  // object-fit: cover;

  width: 100%;
  height: 25vh;
  background-image: url("https://res.cloudinary.com/df0ll615k/image/upload/v1622512511/about_us_page_background.jpg");
  background-position: center;
  

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  display: flex;
  justify-content: center;
  align-items: center;
    
  &:hover {
    background-position: cover;
  }
`

const BannerImage = styled.div`
`

const Header = styled.h1`
  // position: absolute;
  // flex-direction: row;
  // justify-content: center;
  // width: 100%;
  // line-height: 80px;
  // top: 10vh;
  
  color: rgba(255, 255, 255, 0.9);
  font-size: 6em;
  margin: -1.5% 0 0 0;
  padding: 0px;
  font-weight:300;
  font-family: 'Kristi', cursive;

`

const ContentHero = ({title}) => {
    return ( 
        <Container>
            <Header>{title}</Header>
        </Container>
     );
}
 
export default ContentHero;