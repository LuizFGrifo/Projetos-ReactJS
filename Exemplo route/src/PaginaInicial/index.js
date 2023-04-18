import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
import arara from "../image/Arara_Azul.jpg"

const animaisDash = () => ( 
    <div className = "animalInfo" >
    <Link to = '/arara' > arara azul </Link>
    <div className = "box-animais">
    <div className = "animal">
    <img src = { arara }  alt = "arara"> </img> 
    <h3> 
    Arara azul de lear
     </h3> 
     <p> A arara - azul - de - lear é uma espécie de arara da família Psittacidae e gênero Anodorhynchus.É endêmica do Raso da Catarina, nordeste do
            estado da Bahia, Brasil.Após 150 anos de incertezas,
            sua área de ocorrência foi descoberta em 1978
        pelo ornitólogo Helmut Sick. 
    </p> 
    </div> 
    </div> 
    </div>
);

export default animaisDash;