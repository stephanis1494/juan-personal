import React, { useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import {IoMdOpen} from 'react-icons/io'
import {FiGithub} from 'react-icons/fi'
import CONSTANTS from '../../global_styles/constants'

// should not this coponent be at views folder?

const GeneralStyle = createGlobalStyle`

    .tabs__content--active {
        display: block;
    }
    .tabs__content--innactive {
        display: none;

    }

    .tabs__button--active {
        background: rgb(4,48,83);
        color: rgb(230,203,46);
        box-sizing: border-box;
        border-left: 4px solid rgb(230,203,46);

        @media (max-width: ${CONSTANTS.breakpoints.tabletX1}) {
            border-left: 0px;
            border-bottom: 4px solid rgb(230,203,46);
        }
    }
    /* .tabs__button--active::before {
        content: '';
        display: block;
        position: absolute;
        height: calc(5% );
        transform: translate(-150%, -10%);
        width: 10px;
        background: rgb(126,151,170);
    } */

    .tabs__title {
        font-weight: bold;
        font-size: 24px;
        display: flex;
        justify-content: space-between;
        /* margin: 0; */
    }

    .tabs__date {
        color: rgb(95,126,151);
        font-size: 12px;
        /* padding: 0; */
        margin-top: 0;
    }

    .tabs__content {
        font-size: 16px;
    }
`

const Container = styled.div`
    /* height: 100vh; */
    width: 100vw;
    
    background:rgb(1,22,39);
    box-sizing: border-box;
    
    padding: 4em 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: ${`${CONSTANTS.breakpoints.tabletX1}`}) {
      
    }
`

const InnerContainer = styled.div`
    width: 80%;
    max-width: 850px;

    @media (max-width: ${CONSTANTS.breakpoints.phoneX1}) {
        /* width: 300px; */
    }
`

const SectionTitle = styled.h2`
    font-size: ${CONSTANTS.fontScale.medium};
    color: rgb(204, 215, 245);
    display: flex;

    @media (max-width: ${`${CONSTANTS.breakpoints.tabletX1}`}) {
        font-size: 24px;
    }
`

const TabsContainer = styled.div`
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    color: rgb(204,215,245);
    @media (max-width: ${`${CONSTANTS.breakpoints.tabletX1}`}) {
        min-width: 400px;
        /* background-color: red; */
        flex-direction: column;
        /* overflow: hidden; */
    }
    @media (max-width: ${CONSTANTS.breakpoints.phoneX1}) {
        min-width: 300px;
    }
`

const TabsSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 135px;
    flex-shrink: 0;
    z-index: 6;
    @media (max-width: ${`${CONSTANTS.breakpoints.tabletX1}`}) {
        width: 100%;
        margin-bottom: 16px;
        flex-direction: row;
        overflow-x: scroll;
    }
    `

const TabsSidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 2px solid rgb(95,126,151);
    width: 100%;
    @media (max-width: ${`${CONSTANTS.breakpoints.tabletX1}`}) {
        width: fit-content;
        border-left: 0px;
        border-bottom: 2px solid rgb(95,126,151);
        flex-direction: row;
    }
`

const Button = styled.button`
    background: transparent;
    border: none;
    color: rgb(88,117,141);
    padding: 12px 22px;
    transform: translateX(-4px);
    font-size: 12px;
    cursor: pointer;
    width: 100%;
    
    @media (max-width: ${`${CONSTANTS.breakpoints.tabletX1}`}) {
        width: fit-content;
        min-width: 125px;
        transform: translateY(4px);
    }

    ${({ activeTab = false }) => activeTab ? css`      
        background: rgb(4,48,83);       
        color: rgb(230,203,46);    
        box-sizing: border-box;      
        border-left: 4px solid rgb(230,203,46);   
        
        @media (max-width: ${CONSTANTS.breakpoints.tabletX1}) {        
            border-left: 0px;        
            border-bottom: 4px solid rgb(230,203,46);        
        }` : ''};
`

const TabsContent = styled.div`
    display: none;
    margin-left: 12px;

    ${({ activeTab = false }) => activeTab ? css`      
        background: rgb(4,48,83);       
        color: rgb(230,203,46);    
        box-sizing: border-box;      
        border-left: 4px solid rgb(230,203,46);   
        
        @media (max-width: ${CONSTANTS.breakpoints.tabletX1}) {        
            border-left: 0px;        
            border-bottom: 4px solid rgb(230,203,46);        
        }` : ''};
`

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;

  @media (max-width: ${`${CONSTANTS.breakpoints.extraLargeX1}`}) {
    margin-right: 16px;
  }
`

const LeftLine = styled.div`
  display: none;
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;

  @media (max-width: ${`${CONSTANTS.breakpoints.extraLargeX1}`}) {
    display: inline-block;
    margin-right: 16px;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
    margin: 26px 0;
`

const WidgetSecondaryProjects = () => {
    const [toggleTab, setToggleTab] = useState(1)

    const handleToggleTab = (index) => {
        setToggleTab(index)
    }

    return (
        <Container>
            <GeneralStyle />

            <InnerContainer>
                <HeaderContainer>
                    <LeftLine />
                    <SectionTitle>Other projects</SectionTitle>
                    <Line />
                </HeaderContainer>

                <TabsContainer>

                    <TabsSidebar>
                        <TabsSidebarContainer>
                            <Button
                                onClick={() => {handleToggleTab(1)}}
                                activeTab={toggleTab === 1}
                                >QR Generator</Button>
                            <Button
                                onClick={() => {handleToggleTab(2)}}
                                activeTab={toggleTab === 2}
                                >Auto-mail</Button>
                            <Button
                                onClick={() => {handleToggleTab(3)}}
                                activeTab={toggleTab === 3}
                                >Clients App</Button>
                        </TabsSidebarContainer>
                    </TabsSidebar>

                    <TabsContent style={{display: toggleTab === 1 ? 'block' : 'none'}}>
                        <div className='tabs__title'><span>QR Generator</span><span><FiGithub/><IoMdOpen/></span></div>
                        <p className="tabs__date">March 12 - April 01 2021</p>

                        <p className="tabs_content">A QR Code generartor, made to automate the process of batch generating QR Codes with the information contanied into a .XLSX Workbook (EXCEL Workbook).</p>

                        <p className='tabs_content'>
                        It is built with Vainilla JavaScript, using the capabilities of node js to write on the clients computer.</p>
                    </TabsContent>

                    <TabsContent style={{display: toggleTab === 2 ? 'block' : 'none'}}>
                        <div className='tabs__title'>Hola 2</div>
                        <p className="tabs__date"></p>
                        <p className="tabs_content"></p>
                    </TabsContent>

                    <TabsContent style={{display: toggleTab === 3 ? 'block' : 'none'}}>
                        <div className='tabs__ttitle'>Hola 3</div>
                    </TabsContent>
                </TabsContainer>
            </InnerContainer>
        </Container>
    )
}

export default WidgetSecondaryProjects
