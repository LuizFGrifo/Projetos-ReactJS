import React from "react";
import './style.css';
import arara from "../image/Arara_Azul.jpg"
import pinguim from "../image/pinguim.jpg"
import onca from "../image/Onca.JPG"
import baleia from "../image/baleiaazul.jpg"

const animaisDash = () => (
    <div className="animalInfo">
        <h2>Veja quais são os animais em extinção</h2>
        <div className="box-animais">
            <div className="animal">
                <img src={arara} alt="arara"></img>
                <a href="/arara"><h3>Arara azul de lear</h3></a>
                <p>A arara-azul-de-lear é uma espécie de arara da
                    família Psittacidae e gênero Anodorhynchus.
                    É endêmica do Raso da Catarina, nordeste do
                    estado da Bahia, Brasil. Após 150 anos de incertezas,
                    sua área de ocorrência foi descoberta em 1978
                    pelo ornitólogo Helmut Sick.</p>
            </div>
            <div className="animal">
                <img src={pinguim} alt="pinguim"></img>
                <a href="/penguim"><h3>Pinguim africano</h3></a>
                <p>O pinguim africano, também conhecido como pingum-do-cabo,
                    soliticário ou mangote, é a única espécie africana de pinguim,
                    atualmente considerada ameaçada de extinção.</p>
            </div>
            <div className="animal">
                <img src={onca} alt="Onça pintada"></img>
                <a href="/onca"><h3>Onça pintada </h3></a>
                <p>A onça-pintada ou jaguar, também conhecida como onça-preta,
                    é uma espécie de mamífero carnívoro da família dos felídeos
                    encontrada nas Américas. É o terceiro maior felino do mundo,
                    após o tigre e o leão, e o maior do continente americano. </p>
            </div>
            <div className="animal">
                <img src={baleia} alt="baleia-fin"></img>
                <a href="/baleia"><h3>Baleia Fin</h3></a>
                <p>A baleia-comum, também chamada de baleia-fin e rorqual-comum,
                    é um mamífero marinho que pertence à família dos balenopterídeos,
                    da ordem dos cetáceos. É o segundo maior animal existente,
                    depois da baleia-azul, podendo atingir um comprimento de até 25,9
                    metros, embora haja relatos de espécimes com 27,3 m.</p>
            </div>
        </div>
    </div>
);

export default animaisDash;