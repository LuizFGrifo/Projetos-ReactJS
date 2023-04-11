import React from "react";
import './style.css';

export default function ItemLista(props) {
    return (
        <div className="boxMain">
            <div className="nome">
                {props.areas}
            </div>
            <img className="imagem" src={props.imagem} alt={props.areas} />
            <div className="dataCriacao">
                {props.descricao}
            </div>
        </div>
    );
}