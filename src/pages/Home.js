import { useState } from 'react';
import perfilImg from '../assets/perfil1.png';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import fecharImg from '../assets/fechar.png';
import classNames from 'classnames';





import './style.css';

import './floatButton.css';





export function Home(){
   
      const [ocultSkills, setOcultSkills] = useState(false);
      const [ocultSkillsBackend, setOcultSkillsBackend] = useState(false);
      const [ocultSkillsDesigner, setOcultSkillsDesigner] = useState(false);
      const [ocultSkillsVideo, setOcultSkillsVideo] = useState(false);

     // let subtitle;
      const [modalIsOpen, setIsOpen] = useState(false);

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

           

            function openModal() {
              setIsOpen(true);
            }
          
            function afterOpenModal() {
              // references are now sync'd and can be accessed.
             // subtitle.style.color = '#f00';
            }
          
            function closeModal() {
              setIsOpen(false);
            }

      function sendEmail(e) {
                  e.preventDefault();
              
                  emailjs.sendForm('entrarEmContato', 'template_in1fcc4', e.target, 'user_Zulyvfs06j209hrvCgF4r')
                    .then((result) => {
                       alert('Mensagem enviada com sucesso!');
                    }, (error) => {
                        alert(error.message);
                    });
                    e.target.reset();
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

                <a target="blank" href="https://github.com/Kleitomberg" className="social-icons">
               
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
                              2 anos mais! </span>
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
                                    <h3 className="skills-name"> Django</h3>
                                          <span className="skills-number"> 80%</span>
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

            <button onClick={openModal} className="btn "> Entre em contato
            <i class="uil uil-message m-2 text-end"></i>
            </button>

            </div>
            <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}  
                  
                  
                  contentLabel="Contato"
                  >
                 
                 <div className="modal-delete"> 
                  <button  className="text-right fechar" onClick={closeModal}>
                        <img alt="fechar" className="imagefecharmodal" src={fecharImg}/> 
                        
                        
                        </button>

                  <h2 className="text-center contato">Contato</h2>

                  <form className="contact-form" onSubmit={sendEmail}>
                  <div className="row pt-4 mx-auto">
                        
                        <div className="col-lg-8 col-sm-12 form-group mx-auto mb-2">
                            <label>Nome</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Nome" name="name"/>
                        </div>
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto mb-2">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Seu email" name="email"/>
                        </div>

                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Mensagem</label>
                            <textarea className="form-control" id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto text-center">
                            <input type="submit" className="btn btn-info text-center" value="Enviar mensagem"></input>
                        </div>
                    </div>              
                  
                  </form>
                  </div>
      </Modal>
        </main>

        <div class="fab"  ontouchstart="">

            <button class="main" >
       
            <i class="uil uil-bars"></i>    
           
            </button>

            <ul>
            <li className="curriculo">
                  <label for="opcao1" className="curriculo">Currículo</label>
                  <a target="_blank" href="https://drive.google.com/file/d/1dWEdPggibduzif_9wARwV1YPErvisJ4O/view?usp=sharing">
                  <button id="opcao1">                 
                  <i class="uil uil-book"></i>                  
                  </button>
                  </a>
            </li>
            <li>
                  <label for="opcao2">Certificados</label>
                  <a target="_blank" href="https://drive.google.com/drive/folders/1srY_r2key1_E7e-QGQFkWEeJHQYT7qcm?usp=sharing">
                  <button id="opcao2">
                 
                  <i class="uil uil-medal w-10"></i>
                 
                  </button>
                  </a>
            </li>

           
            </ul>
            </div>
        


        <footer className="footer mt-auto py-3 bg-light text-center"> 
        <div classNmae="fixed-bottom container"> 
             <span className="text-center text-muted"> KabehLinks</span>
        </div>
        </footer>
    </div>
  
)

}