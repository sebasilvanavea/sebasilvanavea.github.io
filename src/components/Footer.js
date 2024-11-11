import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importa los íconos de react-icons
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Ssn Novation. Todos los derechos reservados.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/sebastian-silva-navea-2547a0260/" target="_blank"
                       rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
                        <FaLinkedin size={30}/>
                    </a>
                    <a href="https://www.instagram.com/sebasilvanavea" target="_blank" rel="noopener noreferrer"
                       className="text-pink-500 hover:text-pink-700 transition duration-300">
                        <FaInstagram size={30}/>
                    </a>
                    <a href="https://www.facebook.com/ssilvans/" target="_blank" rel="noopener noreferrer"
                       className="text-blue-500 hover:text-blue-700 transition duration-300">
                        <FaFacebook size={30}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
