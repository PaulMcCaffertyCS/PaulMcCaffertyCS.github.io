import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../assets/images/icons/Logo_PaulMcCafferty.png"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div id="page-header">
            <img
                id="page-header-logo"
                src={logoImage}
                alt="Paul McCafferty Logo"
                width="64"
                height="64"
            />
            <div id="page-menu">
                <button id="home-button" className="menu-button" onClick={() => navigate("/")}>Home</button>
                <button id="projects-button" className="menu-button center-button" onClick={() => navigate("/projects")}>Projects</button>
                <button id="games-button" className="menu-button center-button" onClick={() => navigate("/games")}>Games</button>
                <button id="about-button" className="menu-button center-button" onClick={() => navigate("/about")}>About</button>
                <button id="contact-button" className="menu-button" onClick={() => navigate("/contact")}>Contact</button>
            </div>
        </div>
    );
};

export default Navbar;
