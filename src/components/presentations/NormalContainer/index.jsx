import React, { memo } from 'react'
import styled from "styled-components";


const InnerContainer = styled.div`
  width: 100%;
  min-height: 300px;
  padding-top: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 75%;

`

const Image = styled.img.attrs({
  src: 'https://res.cloudinary.com/dm7mqsupu/image/upload/v1624994587/Asset_3_4x-8_omtwm0.png'
})`
width: 200px;
height: 200px;
margin-right: 4%;
`

const Text = styled.div``

const TextTitle = styled.h1`
  color: rgba(8, 22, 53, 1.0);
  margin-bottom: 0;
  `

const TextSubTitle = styled.h2`
    color: rgba(58, 58, 56, 1.0);
    margin-top: 0;
`

const TextParagraph = styled.p`
    color: rgba(58, 58, 56, 1.0);
`


const NormalContainer = ({ title, subtitle, paragraph }) => (
    <InnerContainer>
        <ContentContainer>
            <Image />
            <Text>
                <TextTitle>{title}</TextTitle>
                <TextSubTitle>{ subtitle }</TextSubTitle>
                <TextParagraph>{ paragraph }</TextParagraph>
            </Text>
        </ContentContainer>
  </InnerContainer>
)
  
  export default memo(NormalContainer)


