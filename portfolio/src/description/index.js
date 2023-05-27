import React from 'react';
import './style.css';
import Linguagens from "../image/linguagens2.png";
import Luiz from "../image/luiz.jpg"

export default function DescriptionContainer(props) {
    return (
        <div className="description-container">
            <div className="description-image">
                <img src={Linguagens} alt="Linguagens" />
            </div>
            <h1><strong>Sobre Luiz Felipe Grifo:</strong><br /><br /></h1>
            <img className='luiz-img' src={Luiz} alt="" />
            <div className="description-text">
                <p className="Descricao">

                    Bem-vindo ao meu portfólio! Sou um entusiasta de tecnologia e um desenvolvedor de software
                    em busca de meu primeiro estágio na área de programação. Tenho uma paixão especial pelo
                    back-end, mas também possuo conhecimentos em front-end. Estou constantemente aprimorando
                    minhas habilidades e expandindo meu conhecimento em diversas linguagens e tecnologias.<br /><br />

                    <strong>Habilidades Interpessoais:</strong><br /><br />

                    Além das habilidades técnicas, sou um analista detalhista e perspicaz, capaz de identificar padrões e solucionar problemas complexos. Sou um comunicador eficaz e me sinto à vontade trabalhando em equipe, colaborando com colegas e compartilhando ideias para alcançar os objetivos do projeto.<br /><br />

                    Estou ansioso para contribuir com meus conhecimentos e habilidades em um ambiente profissional, onde possa aprender e crescer como desenvolvedor de software.<br /><br />

                    Estou aberto a oportunidades de estágio na área de programação e estou animado para contribuir com meus conhecimentos e habilidades.
                </p>
            </div>
        </div>
    );
}
