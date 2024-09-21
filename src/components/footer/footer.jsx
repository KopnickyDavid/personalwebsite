import './footer.css';
import { FaGithub ,FaLinkedin,FaInstagram ,FaTwitter  } from 'react-icons/fa';
import { IconContext } from "react-icons";

function Footer() {
return (  
    <footer>
        <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p> Portfolio | &copy; Kopnicky 2024  </p>  
            <ul className="socials" >
                <IconContext.Provider value={{ color: "white", className: "react-icons" }}>
                    <li ><a href="#"><FaGithub /></a></li>
                    <li ><a href="#"><FaLinkedin/></a></li>
                    <li ><a href="#"><FaInstagram /></a></li>
                    <li ><a href="#"><FaTwitter  /></a></li>
                </IconContext.Provider>
            </ul>
        </div>
    </footer>
);
}

export default Footer;
