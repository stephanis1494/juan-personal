import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import {IoMdOpen} from 'react-icons/io'
import {FiGithub} from 'react-icons/fi'

// should not this coponent be at views folder?

const GeneralStyle = createGlobalStyle`

    .tabs__content--active {
        display: block;

    }

    .tabs__button--active {
        background: rgb(4,48,83);
        color: rgb(230,203,46);
        box-sizing: border-box;
        border-left: 4px solid rgb(230,203,46);

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
`

const InnerContainer = styled.div`
    max-width: 650px;
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

const TabsContainer = styled.div`
    width: 650px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    color: rgb(204,215,245);
`

const TabsSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 135px;
    flex-shrink: 0;
`

const TabsSidebarContainer = styled.div`
    border-left:2px solid rgb(95,126,151);
    width: 100%;
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
    
`

const TabsContent = styled.div`
    display: none;
    margin-left: 12px;
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

                <SectionTitle>Also have made these</SectionTitle>

                <TabsContainer>

                    <TabsSidebar>
                        <TabsSidebarContainer>
                            <Button
                                onClick={() => {handleToggleTab(1)}}
                                className={toggleTab === 1 ? 'tabs__button--active' : ''}
                                >QR Generator</Button>

                            <Button
                                onClick={() => {handleToggleTab(2)}}
                                className={toggleTab === 2 ? 'tabs__button--active' : ''}
                                >Auto-mail</Button>

                            <Button
                                onClick={() => {handleToggleTab(3)}}
                                className={toggleTab === 3 ? 'tabs__button--active' : ''}
                                >Clients App</Button>
                        </TabsSidebarContainer>
                    </TabsSidebar>

                    <TabsContent
                        className={toggleTab === 1 ? 'tabs__content--active' : ''}
                        >
                        <div className='tabs__title'><span>QR Generator</span><span><FiGithub/><IoMdOpen/></span></div>
                        <p className="tabs__date">March 12 - April 01 2021</p>

                        <p className="tabs_content">A QR Code generartor, made to automate the process of batch generating QR Codes with the information contanied into a .XLSX Workbook (EXCEL Workbook).</p>

                        <p className='tabs_content'>
                        It is built with Vainilla JavaScript, using the capabilities of node js to write on the clients computer.</p>
                    </TabsContent>

                    <TabsContent
                        className={parseInt(toggleTab) === 2 ? 'tabs__content--active' : ''}
                        >
                        <div className='tabs__title'>Hola 2</div>
                        <p className="tabs__date"></p>
                        <p className="tabs_content"></p>
                    </TabsContent>

                    <TabsContent
                        className={parseInt(toggleTab) === 3 ? 'tabs__content--active' : ''}
                        >
                        <div className='tabs__ttitle'>Hola 3</div>
                    </TabsContent>

                </TabsContainer>
            </InnerContainer>
        </Container>
    )
}

export default WidgetSecondaryProjects
