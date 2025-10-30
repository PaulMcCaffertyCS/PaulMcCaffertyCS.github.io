import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="page-footer-container">
            <div className="page-footer">
                <div className="page-footer-inner-container page-footer-left-container">
                    <p className="page-footer-text">&copy; 2025 Paul McCafferty. All Rights Reserved.</p>
                    <p className="page-footer-text">Website Version: 1.0.0</p>
                </div>
                <div className="page-footer-inner-container page-footer-right-container">
                    <p className="page-footer-text">Email: paul.m.mccafferty@gmail.com</p>
                    <div className="page-footer-send-message-container">
                        <p className="page-footer-text page-footer-send-message-text">Send me a message:</p>
                        <button className="page-footer-send-message-button" onClick={() => navigate("/contact")}>Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
