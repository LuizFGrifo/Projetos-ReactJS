import React from "react";
import './style.css';

export default function SocialMedia(props) {
    return (
        <div className='contato'>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img className="social-image" src={props.imagem} alt={props.desc} /></a>
        </div>
    )
}