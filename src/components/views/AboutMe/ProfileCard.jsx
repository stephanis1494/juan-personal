import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../global_styles/theme'

const OuterContainer = styled.div`
  color: ${({ theme }) => theme.colors.fontBodyColor};
  background: ${({ theme }) => theme.colors.primaryColorClear};

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  max-width: 350px;

  @media ((min-width: ${({ theme }) => theme.breakpoints.largeX1})) {
    grid-area: pic;
    /* max-width: 80%; */
  }
`

const ProfileImage = styled.img.attrs({
  src: 'https://res.cloudinary.com/dm7mqsupu/image/upload/v1643336094/photo_2022-01-27_22.13.14_jv2qz3.jpg'
})`
  max-width: 100%;
  outline: 1.5px solid ${(props) => props.theme.colors.accentColor};
  outline-offset: 6px;
  border-radius: 50%;
`

const ProfileCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <ProfileImage />
      </OuterContainer>
    </ThemeProvider>
  )
}

export default ProfileCard
