import React from 'react';
import './style.css';

const PaginaInicial = () => (
    <div>
        <h1>Escolha seu caminho Python</h1>

        <div className='conteudo-opcoes'>
            <a className='opcao-front-end' href='/front-end'>Front-end</a>
            <a className='opcao-back-end' href='/back-end'>Back-end</a>
        </div>
    </div>
);

export default PaginaInicial;