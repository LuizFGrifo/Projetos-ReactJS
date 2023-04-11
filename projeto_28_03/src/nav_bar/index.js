import React from "react";
import './style.css';

const navBar = () => (
    <div className="container">
        <header>
            <nav>
                <a className='logo' href="">Biologia todo dia</a>
                <ul className='nav-list'>
                    <li><a href="/">Início</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Projetos</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>
            </nav>
        </header>
    </div>
);

export default navBar;