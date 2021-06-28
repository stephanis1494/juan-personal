import React, { memo } from 'react'
import styled from "styled-components";

const Tilted = styled.div`
 height: 500px;
 width: 100%;
 background: #000d1a;
  -webkit-transform: skewY(-2deg);
  -moz-transform: skewY(-2deg);
  -ms-transform: skewY(-2deg);
  -o-transform: skewY(-2deg);
  transform: skewY(-2deg);
 position: absolute;
 top: -332px;
 left: 0;
 z-index: -2;
 margin-top: 300px;
`

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 100px;
  color: white;
`

const TiltContainer = ({ children }) => (
  <InnerContainer>
    <Tilted />
    {children}
  </InnerContainer>
)

export default memo(TiltContainer)