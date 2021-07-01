import React, { useState } from 'react'
import styled from "styled-components"

 const RegularNavbar = () => {
    const [isOpen, setIsOpen] = useState(false) 
    return (
        <Nav>
            <Logo href="">
                Juan Luis
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <Menu>
                <MenuLink href="">Projects</MenuLink>
                <MenuLink href="">About</MenuLink>
            </Menu>
        </Nav>
    )
}

const Nav = styled.div`
    padding: 1rem;
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: yellow;
`

const Logo = styled.a`
    /* padding: .0rem 0; */
    color: red;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
`

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 5px;
        width: 25px;
        background-color: green;
        margin-bottom: 5px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    }
`

const MenuLink = styled.a`
    padding: 0 1rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: green;
    transition: all 0.3s ease-in-out;
    font-size: 0.9rem;

    &:hover {
        color: purple;
    }
`

export default RegularNavbar
