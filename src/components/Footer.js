import React from 'react';
import './Footer.css'; // Archivo CSS para estilizar el footer

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
