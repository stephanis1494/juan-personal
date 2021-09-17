import React from 'react'
import styled from 'styled-components'
import {IoMdOpen} from 'react-icons/io'
import {FiGithub} from 'react-icons/fi'

const Container = styled.div`
    /* height: 100vh; */
    width: 100vw;
    
    background:rgb(1,22,39);
    box-sizing: border-box;
    
    padding: 2em 0;

    display: flex;
    justify-content: center;
    align-items: center;
`


const InnerContainer = styled.div`
    width: 100%;
    max-width: 900px;
`

const SectionTitle = styled.h2`
    font-size: 32px;
    color: rgb(204,215,245);
    display: flex;

    &:after {
        display: block;
        content: '';
        /* width: 32%; */
        height: 1px;
        transform: translateY(22px);
        background: rgb(95,126,151);
        flex: 1 1 auto;
        margin-left: 12px
    }
`
const SectionContent = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(6, 1fr);
`
const SectionContentTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    grid-row: 2 / 3;
    grid-column: -1 / -11;
    text-align: right;

    color: rgb(204, 216, 244);

    &:after {
        display: block;
        content: '';
        width: 25%;
        height: 1px;
        /* transform: translateY(22px); */
        background: rgb(95,126,151);
        /* flex: 1 1 auto; */
        margin-top: 6px;
        margin-left: auto;
    }

`
const SectionContentImage = styled.img`
    width: 500px; 
    height: 350px;

    align-self: center;
    grid-column: 1 / 12;
    grid-row: 1 / -1;
`
const SectionContentBody = styled.div`
    background: rgb(11,41,66);
    color: rgb(204, 216, 244);
    padding: 1px 24px; 
    border-radius: 8px;

    font-size: 16px;
    text-align: right;  

    align-self: center;
    grid-column: 12 / -1;
    grid-row: 3 / 5;
`

const SectionContentTechList = styled.div`
    grid-column: -1 / 18;
    grid-row: 5 / 5;

    margin-top: 18px;

    
    & > ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        color: white;
        list-style: none;
        
        display: flex;
        flex-direction: row;
        /* margin: 0 8px; */
        font-size: 12px;
        margin: 0;
        padding: 0;
    }
    
    & > ul > li {
        color: rgb(95, 126, 151);
        /* margin: 0 5px; */
        padding: 0;
        
    }
`

const SectionContentLinks = styled.div`
    grid-column: -1 / 23;
    grid-row: 6 / 6;

    color: rgb(204, 216, 243);
    font-weight: bold;
    font-size: 32px;
    display: flex;
    justify-content: space-around;
    
`

const SectionMainProject = () => {
    return (
        <Container>
            <InnerContainer>


                <SectionContent>
                    <SectionContentTitle>A Super Project</SectionContentTitle>
                    <SectionContentImage src='https://assets-global.website-files.com/5fda3048302e579473bfb454/6081869d03bc45778e9e752c_CleanShot%20Slite%20Project%20Proposal%20Template%20-%20Project%20Proposal%20Template%20at%2018.21.39.png'></SectionContentImage>
                    <SectionContentBody>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, explicabo? Esse est illum obcaecati neque veniam cum similique velit, at sed et tenetur asperiores consequatur fugit accusantium nihil quo qui?</p>
                    </SectionContentBody>
    
                    <SectionContentTechList>
                        <ul>
                            <li>NODE</li>
                            <li>NPM</li>
                            <li>React</li>
                            <li>Styled Components</li>
                        </ul>
                    </SectionContentTechList>

                    <SectionContentLinks>
                        <FiGithub className='githubIcon'/>
                        <IoMdOpen/>
                    </SectionContentLinks>
                </SectionContent>


            </InnerContainer>
        </Container>
    )
}

export default SectionMainProject
