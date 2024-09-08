import './navbar.css';

function NavBar() {
  return (
    <div className="navbar-container">
        <ul>
            <a>David Kopnicky</a>
            <div className='inside-navbar'>
            <li>Blog</li>
            <li>Github</li>
            <li>About</li>
            </div>
        </ul>
    </div>
  );
}

export default NavBar;
