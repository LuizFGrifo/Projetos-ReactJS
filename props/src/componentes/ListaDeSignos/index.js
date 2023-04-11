import React from 'react';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';

import './style.css';

export default function ListaDeSignos() {
    return (
        <div>
            <Titulo />

            <div className='lista'>
                <ItemLista
                    signo="Áries" dataInicio="21/03"
                    dataFim="20/04" imagem="assets/aries.jpg"
                />
                <ItemLista
                    signo="Touro" dataInicio="21/04"
                    dataFim="21/05" imagem="assets/touro.jpg"
                />
                <ItemLista
                    signo="Gêmeos" dataInicio="21/05"
                    dataFim="22/06" imagem="assets/gemeos.jpg"
                />
                <ItemLista
                    signo="Câncer" dataInicio="21/06"
                    dataFim="22/07" imagem="assets/cancer.jpg"
                />
                <ItemLista
                    signo="Leão" dataInicio="23/07"
                    dataFim="22/08" imagem="assets/leao.jpg"
                />
                <ItemLista
                    signo="Virgem" dataInicio="23/08"
                    dataFim="22/09" imagem="assets/virgem.jpg"
                />
                <ItemLista
                    signo="Libra" dataInicio="23/09"
                    dataFim="22/10" imagem="assets/libra.jpg"
                />
                <ItemLista
                    signo="Escorpião" dataInicio="23/10"
                    dataFim="21/11" imagem="assets/escorpiao.jpg"
                />
                <ItemLista
                    signo="Sagitário" dataInicio="22/11"
                    dataFim="21/12" imagem="assets/sagitario.jpg"
                />
                <ItemLista
                    signo="Capricórnio" dataInicio="22/12"
                    dataFim="20/01" imagem="assets/capricornio.jpg"
                />
                <ItemLista
                    signo="Aquário" dataInicio="21/01"
                    dataFim="19/02" imagem="assets/aquario.jpg"
                />
                <ItemLista
                    signo="Peixes" dataInicio="20/02"
                    dataFim="20/03" imagem="assets/peixes.jpg"
                />

            </div>
        </div>
    );
}