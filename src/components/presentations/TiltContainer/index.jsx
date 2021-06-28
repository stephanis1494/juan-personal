import React, { memo } from 'react'
import styled from "styled-components";

const Tilted = styled.div`
 height: 400px;
 width: 100%;
 background: #000d1a;
  -webkit-transform: skewY(-2deg);
  -moz-transform: skewY(-2deg);
  -ms-transform: skewY(-2deg);
  -o-transform: skewY(-2deg);
  transform: skewY(-2deg);
 position: absolute;
 top: -80px;
 left: 0;
 z-index: -2;
`

const InnerContainer = styled.div`
  position: relative;
  margin-top: 100px;
  width: 100%;
  color: white;
  margin-top: 256px;
`

const TiltContainer = ({ children }) => (
  <InnerContainer>
    <Tilted></Tilted>
    {children}
  </InnerContainer>
)

export default memo(TiltContainer)