import React from 'react';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';

import './style.css';

export default function ListaDeCursos() {
    return (
        <div>
            <Titulo />

            <div className='lista'>
                <ItemLista
                    signo="Ciencias de Dados" descricao="1990"
                    imagem="img/data_science.jpg"
                />
                <ItemLista
                    signo="DevOps" descricao="2000"
                    imagem="img/devops.jpg"
                />
                <ItemLista
                    signo="desenvolvedor(a) mobile" descricao="2007"
                    imagem="img/dev_mobile.jpg"
                />
                <ItemLista
                    signo="Engenheiro de software" descricao="2010"
                    imagem="img/engenheiro_de_software.jpg"
                />
                <ItemLista
                    signo="Segurança da informação" descricao="1960 a 1970"
                    imagem="img/segurnaca_informacao.jpg"
                />
            </div>
        </div>
    );
}