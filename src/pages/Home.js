import { useState } from 'react';
import perfilImg from '../assets/perfil.jpg';

//import emailImg from '../assets/email.png';
//import instaImg from '../assets/instagram.png';
//import youtubeImg from '../assets/yt.png';
//import linkedImg from '../assets/linkedin.png';
import classNames from 'classnames';










import './style.css';





export function Home(){
   
      const [ocultSkills, setOcultSkills] = useState(false);
      const [ocultSkillsBackend, setOcultSkillsBackend] = useState(false);
      const [ocultSkillsDesigner, setOcultSkillsDesigner] = useState(false);
      const [ocultSkillsVideo, setOcultSkillsVideo] = useState(false);

            function onClickOpenFrontend(){
                  setOcultSkills(!ocultSkills);
            } 
            function onClickOpenBckend(){
                  setOcultSkillsBackend(!ocultSkillsBackend);
            } 
            function onClickOpenDesign(){
                  setOcultSkillsDesigner(!ocultSkillsDesigner);
            } 
            function onClickOpenVideo(){
                  setOcultSkillsVideo(!ocultSkillsVideo);
            } 
 
return(


    <div className="homepage">       

        <header class="header" id="header">
          <h1>  Olá kabeh aqui, </h1>
          <h3> Prazer recebe-lo na minha pagina.</h3>
        </header>

        <main className="flex-shrink-0"> 
          <div className="perfil"> 
              <div className="fotoperfil"> 
                <img src={perfilImg} alt="fotoperfil" className="fotoperfil"/> 
                </div>
                <h2 className="name"> Kleitomberg</h2>

                <div className="socialMedias"> 

                <a  target="blank" href="https://www.youtube.com/channel/UCOFpmcpvb_UmDlc1FoUX55Q" className="social-icons">
                
                <i class="uil uil-youtube w-50"></i>
                </a>

                <a target="blank" href="github.com/Kleitomberg" className="social-icons">
               
                <i class="uil uil-github-alt"></i>
                </a>

                <a  target="blank" href="https://www.instagram.com/kleitomberg/" className="social-icons">
                <i class="uil uil-instagram"></i>
                </a>

                <a target="blank" href="https://br.linkedin.com/in/kleitomberg-%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80%E2%A0%80-731605116" className="social-icons">
                <i class="uil uil-linkedin-alt"></i> 
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

            <section className="container skills text-center mb-5">
              <h3> Habilidades</h3>
              <span className="subtitle"> habilidades técnicas</span>

              <div className="container grid skills-container"> 
                  <div>

                      <div className={classNames('skills-content skills-close', {'skills-open':ocultSkills})}>

                            <div onClick={onClickOpenFrontend} className="skills-header">
                            <i class="uil uil-brackets-curly skills-icon"></i>     
                            
                            <div className="skills-title"> 
                            <h1> Desenvolvimento Frontend</h1>
                            <span className="skills-subtitle">
                              1 ano mais! </span>
                            </div>                   
                            <i  class="uil uil-angle-down skills-arrow "></i>
                            </div> 
                            
                            <div className="skills-list grid"> 

                                 <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> HTML</h3>
                                            <span className="skills-number"> 90%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-html"> </span>
                                    </div>

                                </div>

                                <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> CSS</h3>
                                            <span className="skills-number"> 80%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-css"> </span>
                                    </div>

                                </div>

                                <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> Javascript</h3>
                                            <span className="skills-number"> 50%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-js"> </span>
                                    </div>

                                </div>


                                <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> React</h3>
                                            <span className="skills-number"> 40%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-react"> </span>
                                    </div>

                                </div>
                           </div>
                    </div>    
                    
                    <div className={classNames('skills-content skills-close', {'skills-open':ocultSkillsBackend})}>

                            <div onClick={onClickOpenBckend}  className="skills-header">
                            <i class="uil uil-server-network skills-icon"></i>   
                            
                            <div className="skills-title"> 
                            <h1> Desenvolvimento Backend</h1>
                            <span className="skills-subtitle">
                              Menos de 1 ano </span>
                            </div>                   
                            <i class="uil uil-angle-down skills-arrow"></i>
                            </div> 
                            
                            <div className="skills-list grid"> 

                                 <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> PHP</h3>
                                            <span className="skills-number"> 60%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-php"> </span>
                                    </div>

                                </div>

                                <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> NodeJS</h3>
                                            <span className="skills-number"> 40%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-node"> </span>
                                    </div>

                                </div>

                                <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> Firebase</h3>
                                            <span className="skills-number"> 50%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-fire"> </span>
                                    </div>

                                </div>

                           </div>
                    </div>  

                    <div className={classNames('skills-content skills-close', {'skills-open':ocultSkillsDesigner})}>

                            <div onClick={onClickOpenDesign} className="skills-header">
                            <i class="uil uil-swatchbook skills-icon"></i>   
                            
                            <div className="skills-title"> 
                            <h1> Designer </h1>
                            <span className="skills-subtitle">
                              2 anos mais! </span>
                            </div>                   
                            <i class="uil uil-angle-down skills-arrow"></i>
                            </div> 
                            
                            <div className="skills-list grid"> 

                                 <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> Photoshop</h3>
                                            <span className="skills-number"> 70%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-ps"> </span>
                                    </div>

                                </div>

                                <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> Canva</h3>
                                            <span className="skills-number"> 80%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-canva"> </span>
                                    </div>

                                </div>

                                <div className="skills-data">

                                     <div className="skills-titles"> 
                                          <h3 className="skills-name"> Inkscape</h3>
                                            <span className="skills-number"> 50%</span>
                                      </div>

                                    <div className="skills-bar">
                                          <span className="skills-porcentagem skills-ink"> </span>
                                    </div>

                                </div>
                                <div className="skills-data">

                                <div className="skills-titles"> 
                                    <h3 className="skills-name"> Figma</h3>
                                      <span className="skills-number"> 70%</span>
                                </div>

                                <div className="skills-bar">
                                    <span className="skills-porcentagem skills-figma"> </span>
                                </div>

                                </div>

                           </div>
                    </div>  

                    <div className={classNames('skills-content skills-close', {'skills-open':ocultSkillsVideo})}>

                      <div onClick={onClickOpenVideo} className="skills-header">
                      <i class="uil uil-film skills-icon"></i>  

                      <div className="skills-title"> 
                      <h1> Edição de video</h1>
                      <span className="skills-subtitle">
                        2 anos mais! </span>
                      </div>                   
                      <i class="uil uil-angle-down skills-arrow"></i>
                      </div> 

                      <div className="skills-list grid"> 

                          <div className="skills-data">

                              <div className="skills-titles"> 
                                    <h3 className="skills-name"> Sony vegas</h3>
                                      <span className="skills-number"> 80%</span>
                                </div>

                              <div className="skills-bar">
                                    <span className="skills-porcentagem skills-vegas"> </span>
                              </div>

                          </div>

                          <div className="skills-data">

                              <div className="skills-titles"> 
                                    <h3 className="skills-name"> After Effects</h3>
                                      <span className="skills-number"> 80%</span>
                                </div>

                              <div className="skills-bar">
                                    <span className="skills-porcentagem skills-ae"> </span>
                              </div>

                          </div>                          

                      </div>
                      </div> 


                  </div>              
               </div>
            </section>

            <div className="d-grid col-4 mx-auto mb-5"> 

            <button className="btn "> Entre em contato
            <i class="uil uil-message m-2 text-end"></i>
            </button>

            </div>

        </main>


        <footer className="footer mt-auto py-3 bg-light text-center"> 
        <div classNmae="fixed-bottom container"> 
             <span className="text-center text-muted"> KabehLinks</span>
        </div>
        </footer>
    </div>
  
)

}