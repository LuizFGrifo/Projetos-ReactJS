import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className="footer-text">&copy; {new Date().getFullYear()} Luiz Felipe Grifo. Todos os direitos reservados. Portfólio desenvolvido em ReactJS.</p>
            </div>
        </footer>
    );
};

export default Footer;
