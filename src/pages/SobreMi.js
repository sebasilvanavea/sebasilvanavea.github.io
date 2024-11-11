import React from 'react';

const SobreMi = () => {
    // Lista de valores o principios con título, descripción e ícono
    const valores = [
        {
            icon: "emoji_people",
            title: "Compromiso",
            description: "Me comprometo con el éxito de cada proyecto, asegurando calidad y resultados."
        },
        {
            icon: "engineering",
            title: "Innovación",
            description: "Utilizo tecnologías avanzadas para ofrecer soluciones innovadoras y eficientes."
        },
        {
            icon: "groups",
            title: "Trabajo en Equipo",
            description: "Fomento la colaboración y el respeto para lograr los mejores resultados en equipo."
        },
        {
            icon: "thumb_up",
            title: "Calidad",
            description: "Aseguramos que cada entrega cumpla con los más altos estándares de calidad."
        }
    ];

    return (
        <section id="sobre-mi" className="py-20 px-8 bg-white text-gray-800 text-center">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Sub-sección de Información Personal y Foto */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex justify-center md:justify-start">
                        <img src={`${process.env.PUBLIC_URL}/img/perfil.jpg`} alt="Sebastián Silva Navea"
                             className="rounded-full shadow-lg w-48 h-48 object-cover transition-transform transform hover:scale-110 duration-300"/>
                    </div>
                    <h1 className="text-4xl font-semibold mb-6">- Sobre Nosotros -</h1>
                    <p className="text-xl mb-8 leading-relaxed">
                        Soy Sebastián Silva Navea, profesional con experiencia en el desarrollo de software y la gestión
                        de proyectos tecnológicos. A lo largo de mi carrera, he trabajado en empresas que abarcan desde
                        la programación hasta la coordinación de equipos de desarrollo.
                        Mis habilidades incluyen lenguajes de programación como JavaScript y Python, y tengo un enfoque
                        en metodologías ágiles para la gestión de proyectos. También he participado en iniciativas de
                        transformación digital, implementando soluciones innovadoras para mejorar la eficiencia
                        operativa en diversas organizaciones.
                    </p>
                </div>

                {/* Sub-sección de Tarjetas de Valores */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {valores.map((valor, index) => (
                        <div key={index} className=" text-black rounded-lg p-6 shadow-md text-center transition-transform transform hover:scale-105 relative">
                            <span className="material-icons text-5xl mb-4 text-emerald-600">{valor.icon}</span>
                            <h3 className="text-2xl font-semibold mb-2">{valor.title}</h3>
                            <p className="text-gray-800">{valor.description}</p>

                            {/* Línea divisoria */}
                            {index < valores.length - 1 && (
                                <div className="absolute right-0 top-0 h-full border-r border-gray-200"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SobreMi;
