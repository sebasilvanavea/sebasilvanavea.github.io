import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-logo">Ssn novation.</h1>

            {/* Enlaces de navegación */}
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#about">Sobre Mí</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>

            {/* Botón de menú para dispositivos móviles */}
            <button className="navbar-toggle" onClick={toggleMenu}>
                <span className="navbar-toggle-icon">&#9776;</span>
            </button>
        </nav>
    );
};

export default Navbar;
