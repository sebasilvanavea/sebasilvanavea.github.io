import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import SobreMi from './pages/SobreMi';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <main>
                <section id="inicio" className="section">
                    <Inicio />
                </section>
                <section id="about" className="section">
                    <SobreMi />
                </section>
                <section id="services" className="section">
                    <Servicios />
                </section>
                <section id="contact" className="section">
                    <Contacto />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
