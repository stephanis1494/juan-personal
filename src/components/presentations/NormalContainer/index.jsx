import React, { memo } from 'react'
import styled from "styled-components";


const InnerContainer = styled.div`
  width: 100%;
  min-height: 300px;
  margin: ${({ verticalMargin = '64px' }) => `${verticalMargin} 0`};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 75%;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Image = styled.img.attrs({
  src: 'https://res.cloudinary.com/dm7mqsupu/image/upload/v1624994587/Asset_3_4x-8_omtwm0.png'
})`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
  margin: 24px 0;

  @media (max-width: 960px) {
    margin-right: 0;
  }
`

const TextTitle = styled.h1`
  color: rgba(8, 22, 53, 1.0);
  margin: 0;

  @media (max-width: 960px) {
    text-align: center;
    margin-top: 8px;
  }
`

const TextSubTitle = styled.h2`
  color: rgba(58, 58, 56, 1.0);
  margin: 0;

  @media (max-width: 960px) {
    text-align: center;
  }
`

const TextParagraph = styled.p`
  color: rgba(58, 58, 56, 1.0);
  margin-bottom: 0;
  max-width: 50%;
  text-align: center;
`


const NormalContainer = ({ title, subtitle, paragraph, onImageClick = () => {}, verticalMargin = '64px', id = '' }) => (
    <InnerContainer verticalMargin={verticalMargin} id={id}>
        <ContentContainer>
          <TextTitle>{title}</TextTitle>
            <Image onClick={onImageClick} />
                <TextSubTitle>{ subtitle }</TextSubTitle>
                <TextParagraph>{ paragraph }</TextParagraph>
        </ContentContainer>
  </InnerContainer>
)

  export default memo(NormalContainer)



