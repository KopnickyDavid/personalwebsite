import './navbar.css';

function NavBar() {
  return (  
    <div className="navbar-container">
        <ul>
            <div className="nav-name">David Kopnicky</div>
            <div className='inside-navbar'>
            <a href="#projects"><li>Projects</li></a>
            <a href="#aboutme"><li>About</li></a>
            <a href="#blog"><li>Blog</li></a>
            </div>
        </ul>
    </div>
  );
}

export default NavBar;
