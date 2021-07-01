import perfilImg from '../assets/perfil.jpg';

import emailImg from '../assets/email.png';
import instaImg from '../assets/instagram.png';
import youtubeImg from '../assets/yt.png';
import linkedImg from '../assets/linkedin.png';


import './style.css';




export function Home(){
return(


    <div className="homepage">       

        <header class="header" id="header">
          <h1>  Olá kabeh aqui, </h1>
          <h3> Prazer recebe-lo na minha pagina.</h3>
        </header>

        <main> 
          <div className="perfil"> 
              <div className="fotoperfil"> 
                <img src={perfilImg} alt="fotoperfil" className="fotoperfil"/> 
                </div>
                <h2 className="name"> Kleitomberg</h2>

                <div className="socialMedias"> 

                <a href="#" className="youtube">
                <img src={youtubeImg} alt="fotoperfil"/> 
                </a>

                <a href="#" className="email">
                <img src={emailImg} alt="fotoperfil"/> 
                </a>

                <a href="#" className="instagram">
                <img src={instaImg} alt="fotoperfil"/> 
                </a>

                <a href="#" className="linkedin">
                <img src={linkedImg} alt="fotoperfil"/> 
                </a>

                </div>
          </div>

          <div className="conteudo">
          <br/>

      <strong>   Bom, eu não sei o que deseja, mas vou te falar um pouco sobre mim:</strong> 
      <br/><br/>
                    <p> 
                       Me chamo kleitomberg, sou formado em Gestão da Ti, possuo um grande interesse pela area da tecnologia sobre tudo em programação, edição de video e web designer.
                    </p>
            </div>

            <button className="btn"> Entre em contato </button>


        </main>

        <p> KabehLinks</p>
      
    </div>
  
)

}