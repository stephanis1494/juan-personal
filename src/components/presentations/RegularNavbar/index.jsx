import React, { useState } from 'react'
import styled from "styled-components"
import { CloseIcon } from '../Icons'


const RegularNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Nav>
            <Logo href="">
                Juan Luis
            </Logo>
            <div>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <MenuLink>Projects</MenuLink>
                <MenuLink>About</MenuLink>
            </div>
            {
                isOpen && <Menu onClose={() => setIsOpen(false)}/>
            }
        </Nav>
    )
}

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MenuItem = styled.p`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.75);
  font-weight: 700;
  transition: color 150ms ease;
  cursor: pointer;
  
  :hover {
    color: rgba(0, 0, 0, 1);
  }
`

const Menu = ({ onClose = () => {} }) => (
    <MenuContainer>
        <MenuItem>Projects</MenuItem>
        <MenuItem>About</MenuItem>
      <CloseIcon
        style={{
          position: 'fixed',
          top: '8px',
          right: '8px',
          cursor: 'pointer'
        }}
        onClick={onClose}
      />
    </MenuContainer>
)

const Nav = styled.div`
    box-sizing: border-box;
    width: 100%;
    position: fixed;
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: transparent;
    padding: 15px;
`

const Logo = styled.a`
    /* padding: .0rem 0; */
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    color: #fff;
`

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 5px;
        width: 25px;
        background-color: #fff;
        margin-bottom: 5px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

const MenuLink = styled.a`
    padding: 0 1rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease-in-out;
    font-size: 0.9rem;

    &:hover {
        font-weight: 700;
    }

  @media (max-width: 768px) {
    display: none;
  }
`

export default RegularNavbar
