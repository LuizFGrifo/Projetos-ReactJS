import React from 'react';
import SocialMedia from '../socialMedia';
import './style.css';
import InstagramImage from '../image/instagram.png';
import LinkedInImage from '../image/linkedin.png';
import GmailImage from '../image/gmail.png';
import GitHubImage from '../image/github.png';

export default function RedesSociais() {
    return (
        <div>
            <SocialMedia
                desc='Instagram'
                imagem={InstagramImage}
                link='https://www.instagram.com/luizgrifo.exe/'
            />
            <SocialMedia
                desc='LinkedIn'
                imagem={LinkedInImage}
                link='https://www.linkedin.com/in/luiz-felipe-grifo-5908b924a'
            />
            <SocialMedia
                desc='Gmail'
                imagem={GmailImage}
                link='mailto:luizgrifo465@hotmail.com'
            />
            <SocialMedia
                desc='GitHub'
                imagem={GitHubImage}
                link='https://github.com/LuizFGrifo'
            />
        </div>
    );
}
