import React from 'react';

const Inicio = () => {
    return (
        <section id="inicio" className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center text-white">
            {/* Video de fondo */}
            <video className="absolute top-0 left-0 w-full h-full object-cover z-0"
                   src={`${process.env.PUBLIC_URL}/img/Scientists4.mp4`}
                   autoPlay
                   loop
                   muted
                   playsInline
            />
            {/* Contenido superpuesto */}
            <div className="relative z-10 p-8">
                <h1 className="text-5xl font-bold mb-6">Transformación Digital para tu Negocio</h1>
                <p className="text-xl mb-8 leading-relaxed">
                    En <span className="font-bold">Ssn Novation</span>, aceleramos el proceso de <span
                    className="font-bold">transformación digital</span> en diversas organizaciones, implementando
                    soluciones de software con <span className="font-bold">metodologías ágiles</span> para industrias
                    que demandan <span className="font-bold">tecnología de vanguardia</span>.
                </p>

                <div className="flex gap-4 justify-center">
                    <a href="#contacto" className="px-8 py-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition transform hover:scale-105">
                        Contáctanos
                    </a>
                    <a href="#servicios"
                       className="px-8 py-4 border border-white-600 text-white-600 rounded-md hover:bg-emerald-600 hover:text-white transition transform hover:scale-105">
                        Ver más +
                    </a>
                </div>
            </div>


            {/* Overlay para oscurecer el video */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>
        </section>
    );
};

export default Inicio;
