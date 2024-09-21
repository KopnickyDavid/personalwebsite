import './footer.css';
import { FaGithub ,FaLinkedin,FaInstagram    } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

function Footer() {
return (  
    <footer>
        <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p> Portfolio | &copy; Kopnicky 2024  </p>  
            <ul className="socials" >
                <IconContext.Provider value={{ color: "white", className: "react-icons" }}>
                    <li ><a href="https://github.com/KopnickyDavid"><FaGithub /></a></li>
                    <li ><a href="https://www.linkedin.com/in/kopnicky-david/"><FaLinkedin/></a></li>
                    <li ><a href="https://www.instagram.com/kopnickydavid/"><FaInstagram /></a></li>
                    <li ><a href="https://x.com/KopnickyD11681"><FaXTwitter    /></a></li>
                </IconContext.Provider>
            </ul>
        </div>
    </footer>
);
}

export default Footer;
