import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const Container = styled.div`
    height: 100vh;
    background: red;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 3fr 100px;    
    grid-gap: 1px;
`;

const ContentItem1 = styled.div`
    grid-column-start: 1;
    grid-column-end: -3;
    background: yellow;
`
const ContentItem2 = styled.div`
    background: yellow;
    grid-column-start: -3;
    grid-column-end: -1
`
const ContentItem3 = styled.div`
    background: yellow;
`
const ContentItem4 = styled.div`
    background: yellow;
`
const ContentItem5 = styled.div`
    background: yellow;
`
const ContentItem6 = styled.div`
    background: yellow;
`


const RegularContainer = () => {
    return (
        <Container>
            <ContentItem1> 
                Item
            </ContentItem1>
            <ContentItem2> 
                Item
            </ContentItem2>
            <ContentItem3> 
                Item
            </ContentItem3>
            <ContentItem4> 
                Item
            </ContentItem4>
            <ContentItem5> 
                Item
            </ContentItem5>
            <ContentItem6> 
                Item
            </ContentItem6>
        </Container>
    )
}

export default RegularContainer
