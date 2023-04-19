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
                    areas="Ciencias de Dados" descricao="1990"
                    imagem="img/data_science.jpg"
                />
                <ItemLista
                    areas="DevOps" descricao="2000"
                    imagem="img/devops.jpg"
                />
                <ItemLista
                    areas="desenvolvedor(a) mobile" descricao="2007"
                    imagem="img/dev_mobile.jpg"
                />
                <ItemLista
                    areas="Engenheiro de software" descricao="2010"
                    imagem="img/engenheiro_de_software.jpg"
                />
                <ItemLista
                    areas="Segurança da informação" descricao="1960 a 1970"
                    imagem="img/segurnaca_informacao.jpg"
                />
            </div>
            <div className='descricao'>
                <h1>Conheça melhor essas áreas</h1>
                <p>As áreas de ciências de dados, segurança da informação, desenvolvimento mobile, engenharia de software e devops são algumas das mais importantes e em constante evolução no campo da tecnologia. Cada uma dessas áreas tem um conjunto único de habilidades e conhecimentos que são necessários para ser bem-sucedido em sua carreira.A ciência de dados é uma área que se concentra na coleta, análise e interpretação de grandes conjuntos de dados. Esses dados podem vir de várias fontes, como mídias sociais, sensores IoT ou transações financeiras.</p>
                <h2>Ciências de dados</h2>
                <p>A ciência de dados é uma área que se concentra na coleta, análise e interpretação de grandes conjuntos de dados. Esses dados podem vir de várias fontes, como mídias sociais, sensores IoT ou transações financeiras. A ciência de dados envolve habilidades em matemática, estatística, programação e visualização de dados para extrair informações valiosas e insights úteis dos dados coletados.</p>
                <h2>Segurança da informação</h2>
                <p>A segurança da informação é uma área que se concentra em proteger informações confidenciais e sistemas de computador contra ameaças cibernéticas. Isso pode incluir ataques de hackers, malware, phishing e outras formas de ataques virtuais. A segurança da informação exige um conhecimento sólido de redes de computadores, sistemas operacionais e criptografia, além de habilidades em auditoria e análise de risco.</p>
                <h2>Desenvolvimento Mobile</h2>
                <p>O desenvolvimento mobile é uma área que se concentra em criar aplicativos para dispositivos móveis, como smartphones e tablets. Isso envolve habilidades em programação para sistemas operacionais móveis, como iOS e Android, bem como conhecimento em design de interface do usuário e experiência do usuário.</p>
                <h2>Engenharia de Software</h2>
                <p>A engenharia de software é uma área que se concentra no desenvolvimento de software de alta qualidade e confiável. Isso pode incluir a criação de aplicativos de negócios, sistemas operacionais ou softwares de controle de processos industriais. A engenharia de software requer habilidades em programação, gerenciamento de projetos e arquitetura de software.</p>
                <h2>DevOps</h2>
                <p>DevOps é uma cultura e prática que tem como objetivo unir as áreas de desenvolvimento de software e operações de TI, a fim de criar sistemas de software eficientes e escaláveis. DevOps envolve habilidades em automação de infraestrutura, controle de versão, gerenciamento de configuração e integração contínua.</p>
            </div>
        </div>
    );
}