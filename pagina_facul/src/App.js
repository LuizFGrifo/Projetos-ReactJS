import './App.css';
import luiz from "./images/luiz.jpg"
import afonso from "./images/afonso.png"
import naomi from "./images/naomi.jpg"
import matheus from "./images/matheus.png"

export default function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <a className='logo' href="">Turma de programa 2023</a>
          <ul className='nav-list'>
            <li><a href="/">Início</a></li>
            <li><a href="/">Sobre</a></li>
            <li><a href="/">Projetos</a></li>
            <li><a href="/">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='info'>
          <h1>Venha fazer parte do grupo das possíveis pessoas que vão se formar</h1>
          <p>Acesse o link:</p>
          <a href='https://chat.whatsapp.com/Hhu7DdGBdHRJlBUCn0oBwg' target="_blank">Grupo do WhatsApp</a>
        </section>
        <section className='pessoas'>
          <h2>Conheça as principais pessoas do nosso grupo</h2>
          <div className='box-pessoas'>
            <div className='pessoa'>
              <img src={luiz} alt="Luiz"></img>
              <h3>Luiz Felipe Grifo</h3>
              <p>Fundador do grupo e quem desenvolveu esta merda</p>
            </div>
            <div className='pessoa'>
              <img src={afonso} alt="Afonso"></img>
              <h3>Afonso Batista</h3>
              <p>Depois que jogaram água benta nele, ele nunca mais foi o mesmo...</p>
            </div>
            <div className='pessoa'>
              <img src={naomi} alt="Larissa"></img>
              <h3>Larissa Naomi</h3>
              <p>Mais conhecida como Xaomi, é muito boa com matemática, e chata também</p>
            </div>
            <div className='pessoa'>
              <img src={matheus} alt="Matheus"></img>
              <h3>Matheus Torquato</h3>
              <p>Possui uma maldição que, qualquer pessoa que faça grupo com ele, tranca a faculdade</p>
            </div>
          </div>
        </section>
        <section className='box-requisitos'>
          <h4>Matérias</h4>
          <p>Veja abaixo as matérias que estamos tendo:</p>

          <div className='box-cards'>
            <div className='card'>
              <a href='https://www.alura.com.br/apostila-java-orientacao-objetos' target="_blank"> <button>Programação Orientada a Objetos</button> </a>
              <p>Programação Orientada a Objetos com Java</p>
            </div>
            <div className='card'>
              <a href='https://pt-br.reactjs.org/docs/getting-started.html' target="_blank"> <button>Desenvolvimento de Software</button> </a>
              <p>Desenvolvimento web com ReactJS</p>
            </div>
            <div className='card'>
              <a href='https://tecnologia.culturamix.com/tecnologias/o-que-e-uma-sociedade-tecnologica' target="_blank"> <button>Sociedade e técnologia</button> </a>
              <p>Matéria chata para um caralho</p>
            </div>
            <div className='card'>
              <a href='https://www.ime.usp.br/~pf/algoritmos/' target="_blank"> <button>Estrutura de Dados</button> </a>
              <p>Estrutura de dados com C, quebrando a cabeça com ponteiro</p>
            </div>
            <div className='card'>
              <a href='https://blog.randon.com.br/tipos-de-banco-de-dados/#:~:text=De%20forma%20simplificada%2C%20todos%20os,NoSQL%20(Not%20only%20SQL).' target="_blank"> <button>Linguagem para Banco de Dados</button></a>
              <p> usada para a consulta, atualização, criação e gerenciamento de banco de dados relacionais.</p>
            </div>
          </div>
        </section>
        <footer>Todos os direitos reservados a Luiz Felipe Grifo</footer>
      </main>
    </div>
  );
}
