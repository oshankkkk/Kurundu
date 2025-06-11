import "../styles/Footer.css";
import {
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaGithub
} from "react-icons/fa";

function Footer(){
    return (
            <footer className="footer" id="contact">
        <div className="footer-container">
            <div className="footer-section brand">
                <h2>KURUNDU</h2>
                <div className="social-icons">
                    <FaTwitter/>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaGithub/>
                </div>
            </div>
            <div className="footer-section">
                <h4>Company</h4>
                <ul>
                    <li>Service</li>
                    <li>Resources</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Help</h4>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <hr/>
            <p>© Copyright 2024. All Rights Reserved by Transport</p>
        </div>
    </footer>
    )

}

export default Footer;