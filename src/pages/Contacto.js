import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacto.css';
import Notification from '../components/Notification';
import Spinner from '../components/Spinner';

const Contacto = () => {
    const form = useRef();
    const [notificationMessage, setNotificationMessage] = useState('');
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true); // Estado para definir si es éxito o error

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm('service_h5uvuz3', 'template_2l76ghq', form.current, 'MBWFM33pKlQlS9Te3')
            .then((result) => {
                setNotificationMessage('Correo enviado correctamente');
                setIsSuccess(true); // Define como éxito
                setIsNotificationVisible(true);
                form.current.reset();
            }, (error) => {
                setNotificationMessage('Hubo un error al enviar el correo');
                setIsSuccess(false); // Define como error
                setIsNotificationVisible(true);
                console.error(error.text);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const closeNotification = () => {
        setIsNotificationVisible(false);
    };

    return (
        <section id="contacto" className="contacto-section">
            <div className="contacto-container">
                <h1 className="text-5xl font-bold text-center mb-8">- Contacto -</h1>
                <p className="text-lg text-center mb-12">Puedes contactarme a través de este formulario para cualquier consulta o colaboración.</p>

                <form ref={form} onSubmit={sendEmail} className="contacto-form">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="user_name" placeholder="Tu nombre" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="user_email" placeholder="Tu correo electrónico" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="asunto">Asunto</label>
                        <input type="text" id="asunto" name="subject" placeholder="Asunto" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </div>
                    <button type="submit" className="px-8 py-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition transform hover:scale-105">
                        Enviar
                    </button>
                </form>

                {/* Notificación de alerta */}
                {isNotificationVisible && (
                    <Notification
                        message={notificationMessage}
                        onClose={closeNotification}
                        isSuccess={isSuccess} // Propiedad para éxito o error
                    />
                )}

                {/* Spinner de carga */}
                {isSending && <Spinner />}
            </div>
        </section>
    );
};

export default Contacto;