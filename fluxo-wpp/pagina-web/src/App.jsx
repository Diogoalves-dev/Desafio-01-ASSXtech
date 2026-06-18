import "./App.css";
import whatsapp from "./assests/whatsapp.png";

function App() {
    const whatsNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    const clickToWpp = () =>{
        window.open(`https://wa.me/${whatsNumber}?text=menu`, "_blank");
    }
  return (
    <>
        <div class="container">
        
        <header>
            <h1>Diogo Ribeiro</h1>
            <p>Desenvolvedor Software Full Stack</p>
        </header>

        <section id="sobre">
            <h2>Sobre Mim</h2>
            <p>Desenvolvedor focado em construir aplicações web modernas, eficientes e escaláveis. Com experiência tanto no ecossistema de front-end quanto no back-end e gerenciamento de bancos de dados, busco criar soluções robustas integrando as melhores práticas do mercado.</p>
        </section>

        <section id="habilidades">
            <h2>Habilidades &amp; Tecnologias</h2>
            <div class="skills-grid">
                <div class="skill-card">Java</div>
                <div class="skill-card">Node.js</div>
                <div class="skill-card">React.js</div>
                <div class="skill-card">MySQL</div>
                <div class="skill-card">PostgreSQL</div>
                <div class="skill-card">Git</div>
            </div>
        </section>

        <section id="contato">
            <h2>Contato</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <span>E-mail</span>
                    <a href="mailto:diogoribeirodev1@gmail.com">diogoribeirodev1@gmail.com</a>
                </div>

                <div class="contact-item">
                    <span>Telefone</span>
                    <a href="tel:+5521971955999">(21) 97195-5999</a>
                </div>

                <div class="contact-item">
                    <span>GitHub</span>
                    <a href="https://github.com/diogoalves-dev" target="_blank">github.com/diogoalves-dev</a>
                </div>
            </div>
        </section>

        <footer>
            <p>&copy; 2026 Diogo Ribeiro. Todos os direitos reservados.</p>
        </footer>

      </div>

      <button onClick={clickToWpp} class="btn-whatsapp" rel="noopener noreferrer">
            <img src={whatsapp}/>
            <span>Fale Comigo</span>
      </button>
    </>
  )
}

export default App
