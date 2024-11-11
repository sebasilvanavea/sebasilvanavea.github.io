import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/sebastian-silva-navea-2547a0260/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
                <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/sebasilvanavea" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition duration-300">
                <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com/ssilvans/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
                <FaFacebook size={30} />
            </a>
        </div>
    );
};

export default SocialLinks;
