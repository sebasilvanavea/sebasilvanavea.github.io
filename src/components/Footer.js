import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importa los íconos de react-icons
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Ssn Novation. Todos los derechos reservados.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/tu-usuario-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/tu-usuario-instagram" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/tu-usuario-facebook" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
