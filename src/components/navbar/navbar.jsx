import './navbar.css';
import {Link} from 'react-router-dom';
function NavBar() {
  return (  
    <div className="navbar-container">
        <ul>
            <div className="nav-name">David Kopnicky</div>
            <div className='inside-navbar'>
            <a href="https://www.kopnickydavid.com/#projects"><li>Projects</li></a>
            <a href="www.kopnickydavid.com/#aboutme"><li>About</li></a>
            <a href="www.kopnickydavid.com/#blog"><li>Blog</li></a>
            </div>
        </ul>
    </div>
  );
}

export default NavBar;
