import React, { useState, useEffect } from 'react'
import styled, { css } from "styled-components"
import { CloseIcon } from '../Icons'
import { debounce } from 'throttle-debounce'
import { scrollIntoView } from "../../utils/scrollIntoView"
import { motion, AnimatePresence } from 'framer-motion'

const RegularNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showBar, setShowBar] = useState(false)
  const [lastScrollPositionY, setLastScrollPositionY] = useState(window.scrollY)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen])

  const handleScroll = debounce(10, true, () => {
    const position = window.scrollY

    if (position > 60 && !showBar) {
      setShowBar(true)
    } else if (position < 60 && showBar) {
      setShowBar(false)
    }
  })

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleMobileMenuSelect = (id) => {
    setIsOpen(false)
    scrollIntoView(id)
  }

  return (
    <div>
      <AnimatePresence>
        {
          showBar &&
          <Nav
            initial={{ y: -67 }}
            animate={{ y: 0 }}
            transition={{
              type: 'tween',
              stiffness: 200,
              damping: 30,
              duration: 0.4
            }}
            exit={{ y: -67 }}
            floating={true}
          >
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              JL
            </Logo>
            <div>
              <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
              </Hamburger>
              <MenuLink onClick={() => scrollIntoView('game-container')}>Game</MenuLink>
              <MenuLink onClick={() => scrollIntoView('music-container')}>Music</MenuLink>
            </div>
            {
              isOpen && <Menu onClose={() => setIsOpen(false)} handleMobileMenuSelect={handleMobileMenuSelect} />
            }
          </Nav>
        }
      </AnimatePresence>
      <Nav>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          JL
        </Logo>
        <div>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <MenuLink onClick={() => scrollIntoView('game-container')}>Game</MenuLink>
          <MenuLink onClick={() => scrollIntoView('music-container')}>Music</MenuLink>
        </div>
        {
          isOpen && <Menu onClose={() => setIsOpen(false)} handleMobileMenuSelect={handleMobileMenuSelect} />
        }
      </Nav>
    </div>
  )
}

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
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

const Menu = ({ onClose = () => {}, handleMobileMenuSelect = () => {} }) => (
    <MenuContainer>
        <MenuItem onClick={() => handleMobileMenuSelect('game-container')}>Game</MenuItem>
        <MenuItem onClick={() => handleMobileMenuSelect('music-container')}>Music</MenuItem>
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

const Nav = styled(motion.div)`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px;
    background-color: #011627;
    ${({ floating = false }) => floating && css`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      backdrop-filter: blur(2px);
      transition: background-color 250ms ease;
      z-index:5;
      position: fixed;
    `}
`

const Logo = styled.div`
    /* padding: .0rem 0; */
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    color: #fff;
    cursor: pointer;
    margin-left: 4px;
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
    padding: 0 16px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`

export default RegularNavbar
