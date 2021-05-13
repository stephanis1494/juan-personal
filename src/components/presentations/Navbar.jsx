const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <nav className="navbar">
                <h1>Juan's Blog</h1>
                <div className="links">
                    <a href="/">home</a>
                    <a href="/blog">blog</a>
                    <a href="/projects">projects</a>
                    <a href="/play">play</a>
                    <a href="tools">tools</a>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;