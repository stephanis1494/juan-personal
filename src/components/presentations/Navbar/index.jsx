import { memo } from 'react'
import './Navbar.css'
import { Link, useLocation, useHistory } from 'react-router-dom'

const Navbar = () => {
  //  get the pathname of the current route
  const { pathname } = useLocation()

  // const history = useHistory()
  // use for navigation
  // onClick={() => history.push('/blogs')}


  // function to determine if on active path
  const active = (p) => (pathname === p && 'darkblue') || '#333333'

    return ( 
        <div className="navbar-container">
            <nav className="navbar">
                <h1>Juan's Blog</h1>
                <div className="links">
                    <Link to="/" style={{ color: active('/')}}>home</Link>
                    <Link to="/blog" style={{ color: active('/blog')}}>blog</Link>
                    <Link to="/projects" style={{ color: active('/projects')}}>projects</Link>
                    <Link to="/play" style={{ color: active('/play')}}>play</Link>
                    <Link to="tools" style={{ color: active('/tools')}}>tools</Link>
                </div>
            </nav>
        </div>
    );
}
 
export default memo(Navbar);