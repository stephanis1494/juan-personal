import React, { useState } from 'react'
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components'
import {IoMdOpen} from 'react-icons/io'
import {FiGithub} from 'react-icons/fi'
import theme from '../../global_styles/theme'

const GeneralStyle = createGlobalStyle`

	.tabs__content--active {
		display: inline;
	}
	.tabs__content--innactive {
		display: none;
	}

	.tabs__button--active {
		background: rgb(4,48,83);
		color: rgb(230,203,46);
		box-sizing: border-box;
		border-bottom: 4px solid rgb(230,203,46);
		
		@media (min-width: ${props=>props.theme.breakpoints.tabletX1}) {
			border-left: 4px solid rgb(230,203,46);
		}
	}

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

const InnerContainer = styled.div`
	padding: 2em 2em 5em;
	background: ${props=>props.theme.colors.primaryColor};
	@media (min-width: ${props=>props.theme.breakpoints.phoneX1}) {
			/* width: 300px; */
	}
`

const SectionTitle = styled.h2`
	margin: 0;
	padding:0;
	font-size: ${props=>props.theme.fontScale.medium};
	color: rgb(204, 215, 245);
	display: flex;

	@media (min-width: ${props=>props.theme.breakpoints.tabletX1}) {
			font-size: 24px;
	}
`

const TabsContainer = styled.div`
	max-width: 850px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 1em;
	color: rgb(204,215,245);
	/* @media (min-width: ${`${props=>props.theme.breakpoints.tabletX1}`}) {
			min-width: 400px;
			flex-direction: column;
	}
	@media (min-width: $${props=>props.theme.breakpoints.phoneX1}) {
			min-width: 300px;
	} */
`

const TabsSidebar = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 130px;
	flex-shrink: 0;
	z-index: 6;
	overflow-y: scroll;
	/* overflow: hidden; */
	/* @media (min-width: ${`${props=>props.theme.breakpoints.tabletX1}`}) {
			width: 100%;
			margin-bottom: 16px;
			flex-direction: row;
			overflow-x: scroll;
	} */
    `

const TabsSidebarContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: fit-content;
	border-bottom: 2px solid rgb(95,126,151);
	/* @media (min-width: ${`${props=>props.theme.breakpoints.tabletX1}`}) {
		width: 100%;
		border-left: 2px solid rgb(95,126,151);
	
	} */
`

const Button = styled.button`
    background: transparent;
    border: none;
    color: rgb(88,117,141);
    padding: 12px 22px;
    transform: translateX(-4px);
    font-size: 12px;
    cursor: pointer;
		width: fit-content;
		min-width: 125px;
		transform: translateY(4px);
    
    /* @media (min-width: ${`${props=>props.theme.breakpoints.tabletX1}`}) {
			width: 100%;
    } */

    ${({ activeTab = false }) => activeTab ? css`      
        background: rgb(4,48,83);       
        color: rgb(230,203,46);    
        box-sizing: border-box;      
				border-bottom: 4px solid rgb(230,203,46);        
        
        @media (min-width: ${props=>props.theme.breakpoints.tabletX1}}) {        
					border-left: 4px solid rgb(230,203,46);   
        }` : ''};
`

const TabsContent = styled.div`
	display: none;
	margin-left: .8em;
	min-height: 25ch;	

    ${({ activeTab = false }) => activeTab ? css`      
        background: rgb(4,48,83);       
        color: rgb(230,203,46);    
        box-sizing: border-box;      
        border-left: 4px solid rgb(230,203,46);   
        
        @media (min-width: ${props=>props.theme.breakpoints.tabletX1}) {        
					border-left: 0px;        
					border-bottom: 4px solid rgb(230,203,46);        
        }` : ''};
`

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;

  @media (min-width: ${`${props=>props.theme.breakpoints.extraLargeX1}`}) {
    margin-right: 16px;
  }
`

const LeftLine = styled.div`
  display: none;
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;

  @media (min-width: ${`${props=>props.theme.breakpoints.extraLargeX1}`}) {
    display: inline-block;
    margin-right: 16px;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

	margin-bottom: 2em;
`

const Link = styled.a`
	cursor: pointer;
	color: rgb(204,215,245);
`

const WidgetSecondaryProjects = () => {
	const [toggleTab, setToggleTab] = useState(1)

	const handleToggleTab = (index) => {
		setToggleTab(index)
	}

    return (
			<ThemeProvider theme={theme}>
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
									>Miles Calc.</Button>
								<Button
									onClick={() => {handleToggleTab(3)}}
									activeTab={toggleTab === 3}
									>Metronome</Button>
							</TabsSidebarContainer>
						</TabsSidebar>

						<TabsContent style={{display: toggleTab === 1 ? 'block' : 'none'}}>
							<div className='tabs__title'>
								<span>QR Generator</span>
								<span>
									<Link
										href='https://github.com/juanluischaurant/qr-codes'
										target='_blank'
									>
										<FiGithub/>
									</Link>
									<Link
										href='https://admiring-perlman-ef199e.netlify.app/'
									>
										<IoMdOpen/>
									</Link>
								</span>
							</div>
							<p className="tabs__date">October 25 - November 1, 2021</p>
							<p className="tabs_content">A QR Code generartor, made as a web solution for being accessed on locations where internet connection is not fast.</p>
							<p className='tabs_content'>It is built with Vainilla JavaScript, and consumes data from an API called QRServer.</p>
						</TabsContent>

						<TabsContent style={{display: toggleTab === 2 ? 'block' : 'none'}}>
						<div className='tabs__title'>
								<span>Miles Calculator</span>
								<span>
									<Link 
									href="https://github.com/juanluischaurant/tesla-miles"
									target="_blank"
									>
										<FiGithub/>
									</Link>
									<Link
										href='https://confident-khorana-aed6df.netlify.app/'
									>
										<IoMdOpen/>
									</Link>
								</span>
							</div>
							<p className="tabs__date">November 20 - November 26, 2021</p>
							<p className="tabs_content">An applicaction inspired on the Tesla UI used for calculating the approximated miles a car car is able to travel based on several variables.</p>
							<p className="tabs_content">This app was made using React.js.</p>
						</TabsContent>

						<TabsContent style={{display: toggleTab === 3 ? 'block' : 'none'}}>
							<div className='tabs__title'>
								<span>Metronome</span>
								<span>
									<Link
										href='https://github.com/juanluischaurant/js-metronome'
										target='_blank'
									>
										<FiGithub/>
									</Link>
									<Link
										href='https://confident-minsky-cc2de5.netlify.app/'
										target='_blank'
										>
										<IoMdOpen/>
									</Link>
								</span>
							</div>
							<p className="tabs__date">November 3 - November 15, 2021</p>
							<p className="tabs_content">A basic app made out of the need for a free metronome that is available for me even when I'm disconnected.</p>
							<p className="class_content">
								This one is made with vanilla JS.
							</p>
						</TabsContent>

					</TabsContainer>
				</InnerContainer>
			</ThemeProvider>
    )
}

export default WidgetSecondaryProjects
