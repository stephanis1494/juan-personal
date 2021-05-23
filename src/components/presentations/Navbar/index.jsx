import { memo } from 'react'
import './Navbar.css'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { AboutIcon, BlogIcon, PlayIcon, ProjectsIcon } from '../Icons';

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
            <ul className="navbar-nav">
                <li class="nav-item logo">
                    <Link to="/" className="nav-link" style={{ color: active('/')}}>
                        <div class="icon">JL</div>
                        <span className="link-text">JL</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/blog" className="nav-link" style={{ color: active('/blog')}}>
                        <BlogIcon />
                        <span className="link-text">Blog</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/projects" className="nav-link" style={{ color: active('/projects')}}>
                        <ProjectsIcon />
                        <span className="link-text">Projects</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/play" className="nav-link" style={{ color: active('/play')}}>
                        <PlayIcon />
                        <span className="link-text">Play</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="tools" className="nav-link" style={{ color: active('/tools')}}>
                    <AboutIcon />
                    <span className="link-text">Tools</span>
                    </Link>
                </li>
            </ul>
        </nav>

        </div>
    );
}
 
export default memo(Navbar);