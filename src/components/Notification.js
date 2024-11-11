import React, { useEffect, useState } from 'react';

const Notification = ({ message, onClose, isSuccess = true }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); // Activa la visibilidad para el efecto de desvanecido y desplazamiento
        const timer = setTimeout(() => {
            setIsVisible(false); // Inicia el desvanecido al desaparecer después de 3 segundos
            setTimeout(onClose, 500); // Llama a onClose después del tiempo de desvanecido
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`fixed bottom-4 right-4 p-4 z-50 shadow-lg transform transition-all duration-500 ease-in-out
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} 
                ${isSuccess ? 'bg-emerald-600' : 'bg-red-600'} text-white rounded-lg flex items-center`}
        >
            {isSuccess && (
                <span className="material-icons text-white mr-2">
                    check_circle
                </span>
            )}
            {message}
        </div>
    );
};

export default Notification;
