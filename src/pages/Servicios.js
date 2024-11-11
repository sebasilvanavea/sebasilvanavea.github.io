import React from 'react';
import './Servicios.css';

const Servicios = () => {
    const servicios = [
        {
            icon: "autorenew",
            title: "Automatización de Procesos",
            description: "Optimiza tus procesos de negocio para aumentar la eficiencia y reducir costos."
        },
        {
            icon: "analytics",
            title: "Análisis de Datos",
            description: "Toma decisiones informadas con insights valiosos a partir de grandes volúmenes de datos."
        },
        {
            icon: "cloud",
            title: "Soluciones en la Nube",
            description: "Escala tus operaciones con infraestructura en la nube segura y flexible."
        },
        {
            icon: "security",
            title: "Ciberseguridad",
            description: "Protege tu infraestructura y datos con nuestras soluciones avanzadas de seguridad."
        },
        {
            icon: "web",
            title: "Desarrollo Web",
            description: "Creamos aplicaciones web adaptativas y centradas en la experiencia del usuario."
        },
        {
            icon: "support_agent",
            title: "Soporte Técnico",
            description: "Recibe asistencia continua para mantener el funcionamiento óptimo de tus sistemas."
        }
    ];

    return (
        <section id="servicios" className="servicios-section">
            <div className="servicios-container">
                <h1 className="text-5xl font-bold text-center mb-12">- Servicios -</h1>
                <p className="text-lg text-center mb-16 max-w-3xl mx-auto">Descubre los servicios que ofrezco y cómo puedo ayudarte a lograr tus objetivos tecnológicos.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicios.map((servicio, index) => (
                        <div key={index} className="servicio-card transform hover:scale-105 transition-transform duration-300">
                            <span className="material-icons text-6xl text-emerald-600 mb-4">{servicio.icon}</span>
                            <h2 className="text-2xl font-semibold mb-2">{servicio.title}</h2>
                            <p className="text-gray-600">{servicio.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;
