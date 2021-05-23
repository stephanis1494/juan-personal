import React from 'react'
import { memo, useState, useEffect, Fragment } from 'react'
import './Navbar.css'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { AboutIcon, BlogIcon, PlayIcon, ProjectsIcon } from '../Icons'

const NavItem = ({ icon = <BlogIcon />, text = 'Blog', showText = false, active = false, path = '/blog' }) => {
  const [hover, setHover] = useState(false)
  const color = ((hover || active) && 'rgba(255, 255, 255, 0.9)') || 'rgba(255, 255, 255, 0.6)'

  return (
    <li
      className="nav-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={path} className="nav-link" style={{ color }}>
        {React.cloneElement(icon, { color })}
        <span className="link-text" style={{ opacity: (showText && '1' || '0')}}>{text}</span>
      </Link>
    </li>
    )
}

const Navbar = () => {
  //  get the pathname of the current route
  const { pathname } = useLocation()
  const [hover, setHover] = useState(false)
  const [showText, setShowText] = useState(false)
  const [to, setTo] = useState(null)

  // function to determine if on active path
  const active = (p) => (pathname === p && 'white') || '#333333'

  useEffect(() => {
    if (hover) {
      setTo(setTimeout(() => {
        setShowText(true)
      }, 150))
    } else {
      clearTimeout(to)
      setShowText(false)
    }
  },  [hover])

  // const history = useHistory()
  // use for navigation
  // onClick={() => history.push('/blogs')}

    return (
        <div
          className="navbar-container"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item logo">
                    <Link to="/" className="nav-link" style={{ color: active('/')}}>
                        <div className="icon">JL</div>
                    </Link>
                </li>
                <NavItem
                  showText={showText}
                  active={pathname === '/blog'}
                  path={'/blog'}
                />
                <NavItem
                  icon={<ProjectsIcon />}
                  text='Projects'
                  showText={showText}
                  active={pathname === '/projects'}
                  path={'/projects'}
                />
              <NavItem
                icon={<PlayIcon />}
                text='Play'
                showText={showText}
                active={pathname === '/play'}
                path={'/play'}
              />
              <NavItem
                icon={<AboutIcon />}
                text='About'
                showText={showText}
                active={pathname === '/about'}
                path={'/about'}
              />
              <NavItem
                icon={<AboutIcon />}
                text='Tools'
                showText={showText}
                active={pathname === '/tools'}
                path={'/tools'}
              />
            </ul>
        </nav>
        </div>
    );
}

export default memo(Navbar);