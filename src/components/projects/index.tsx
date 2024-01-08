import { ProjectsBox } from "./style";
import React from 'react';
import { useState, useEffect} from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaCode, FaBootstrap } from "react-icons/fa";
import { FaNodeJs, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import Ecommerce from "../../assets/home.png";
import EcommerceTwo from "../../assets/filter.png";
import EcommerceThree from "../../assets/product details.png";
import GGWP from "../../assets/GGWP.png"
import GGWPOne from "../../assets/FireShot Capture 021 - GG-WP - www.gg-wp.info.png"
import GGWPTwo from "../../assets/GGWP.png"
import GGWPThree from "../../assets/GGWP.png"
import SoundGarden from "../../assets/soundgarden.png"
import SoundGardenTwo from "../../assets/jsajosajdoia.png"
import SoundGardenThree from "../../assets/dgfgdfgdfg.png"
import Codeleap from "../../assets/codeleap.png"
import CodeleapTwo from "../../assets/FireShot Capture 013 - Codeleap - gleibercoelho.github.io.png"
import CodeleapThree from "../../assets/FireShot Capture 015 - Codeleap - gleibercoelho.github.io.png"
import Dindin from "../../assets/FireShot Capture 004 - Dindin - gleibercoelho.github.io.png"
import DindinTwo from "../../assets/FireShot Capture 008 - Dindin - gleibercoelho.github.io.png"
import DindinThree from "../../assets/FireShot Capture 005 - Dindin - gleibercoelho.github.io.png"
import Sheilla from "../../assets/sheilla.png"
import SheillaTwo from "../../assets/FireShot Capture 010 - Pompom - .png"
import SheillaThree from "../../assets/FireShot Capture 011 - Pompom - .png"
import { Reveal } from "../../components/test";
import { Link } from "react-router-dom";



const Projects = () => {





  const [isPrivateOpen, setIsPrivateOpen] = useState(false);
  const [secretDivState, setSecretDivState] = useState(false);
  const [myIndex, setMyIndex] = useState("");
  

  function handleClick(event: any, index: any) {
    // Use o index para identificar a div clicada
    const clickedDiv = document.getElementById(`project-${index}`);

    const textDiv = clickedDiv?.querySelector(".textDiv");
    const cardDiv = clickedDiv?.querySelector(".card");
    const secretDiv = clickedDiv?.querySelector(".secretDiv");
    console.log(event);
    console.log(myIndex);
    // Alterne o estado da div secretDiv

    setSecretDivState(!secretDivState);
    autoStartInterval()
    
    
    /* const timeoutId = setTimeout(() => { */
    if ((secretDiv as HTMLElement)?.style?.display === "none") {
      
     console.log(isPrivateOpen);
      toggleDivState(secretDiv);
        toggleDivState(textDiv);
        toggleDivState(cardDiv);
        
      const timeoutId: any = setTimeout(() => {
        execute();
        setMyIndex(index);
        console.log(isPrivateOpen);
        return timeoutId;
      }, 200);   
    
    } else {
      setIsPrivateOpen(false);
      setMyIndex(index);
      
    const timeoutId: any = setTimeout(() => {
     
      toggleDivState(secretDiv);
      toggleDivState(textDiv);
      toggleDivState(cardDiv);
      return timeoutId;
      
      
    }, 1000); 
    const timeout: any = setTimeout(() => {
      const currentRef: any = divRefs[index]?.current;
    
      if (currentRef) {
        const classList = currentRef.classList;
        classList.remove(`oriented-Div-animated${index}`);
        setMyIndex("");
        console.log(myIndex);
      }
    
      return timeout;
    }, 1000);
      
  }
  }

  const execute = () => {
    setIsPrivateOpen(true);
    console.log(isPrivateOpen);
  };
  

  function toggleDivState(targetDiv: any) {
    // Alterne entre 'none' e 'flex'
    targetDiv.style.display = targetDiv.style.display === "none" ? "flex" : "none";
  }

  useEffect(() => {
    // Se necessário, faça alguma lógica com base no index aqui
    const clickedDiv = document.getElementById(`project-${(myIndex)}`);
    const secretDiv = clickedDiv?.querySelector(".secretDiv");
    const secretButton = clickedDiv?.querySelector(".saibaMais");
     

    if (isPrivateOpen) {
      secretDiv?.classList.add('show-animated');
      secretButton?.classList.add('show-Button');
     console.log(isPrivateOpen);
     
    } else {
      secretDiv?.classList.remove('show-animated');
      secretButton?.classList.add('show-Button-transition');
      
      console.log(isPrivateOpen);
      const timeoutId: any = setTimeout(() => {
        secretButton?.classList.remove('show-Button');
        secretButton?.classList.remove('show-Button-transition');  
        console.log(isPrivateOpen);
        return timeoutId;
      }, 1000);
      if (myIndex !== "") {
        const numericIndex: number = parseInt(myIndex, 10);
      
        if (!isNaN(numericIndex)) {
          const timeout: any = setTimeout(() => {
            const currentRef: any = divRefs[numericIndex]?.current;
      
            if (currentRef && currentRef.current) {
        const classList = currentRef.current.classList;
        classList.add(`oriented-Div-animated${numericIndex}`);
        console.log(myIndex);
      }
      
            return timeout;
          }, 300);
        }
  }}
  }, [isPrivateOpen, myIndex]);




const projectData = [
  {
    id: 0,
    imageClass: "Ecommerce",
    imageSrc: Ecommerce,
    title: "Mercado Gadgets",
    technologies: (
      <div>
        <FaReact />
        < SiRedux />
        <SiTypescript />
        <SiStyledcomponents />
        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
    secretText: "Comercio Gadgets é um projeto Full-Stack no qual eu desenvolvi o Fron end. Este é um e-commerce com experiência completa ",
    secretTextAcess: (<div className="AcessDois"><div><Link to="/projects/0"><FaMagnifyingGlassPlus /> <p> mais detalhes</p></Link></div> <div><Link to="https://github.com/gleibercoelho/Gama-XP-47-final" target="_blank"><FaGithub /><p>GitHub</p></Link></div><div><Link to="#"><FaCode /><p>acessar site</p></Link></div></div>),
    imageSrcSecretOne: EcommerceTwo,
    imageSrcSecretTwo: EcommerceThree,
    imageSrcSecretThree: Ecommerce,
    imageClassSecretOne: "EcommerceSecretOne",
    imageClassSecretTwo: "EcommerceSecretTwo",
    imageClassSecretThree: "EcommerceSecretThree",
  },
  {
    id: 1,
    imageClass: "GGWP",
    imageSrc: GGWP,
    title: "GG-WP",
    technologies: (
      <div>
        <FaReact />
        <SiTypescript />
        <SiStyledcomponents />
        <FaNodeJs />
        <IoLogoJavascript />
        <GrMysql />
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
    secretText: "GG-WP é um Web-aplicativo Full-Stack que busca os status de partida dos jogadores de league of legends do mundo inteiro.",
    secretTextAcess: (<div className="AcessDois"><div><Link to="/projects/1"><FaMagnifyingGlassPlus /> <p> mais detalhes</p></Link></div> <div><Link to="#"><FaGithub /><p>GitHub</p></Link></div><div><Link to="https://www.gg-wp.info/" target="_blank"><FaCode /><p>acessar site</p></Link></div></div>),
    imageSrcSecretOne: GGWPThree,
    imageSrcSecretTwo: GGWPTwo,
    imageSrcSecretThree: GGWPOne,
    imageClassSecretOne: "GGWPSecretThree",
    imageClassSecretTwo: "GGWPSecretTwo",
    imageClassSecretThree: "GGWPSecretOne",

  },
  {
    id: 2,
    imageClass: "Soundgarden",
    imageSrc: SoundGarden,
    title: "Sound-Garden",
    technologies: (
      <div>
        <IoLogoJavascript /><FaBootstrap /><FaHtml5 /><FaCss3Alt />
      </div>
    ),
    secretText: "Sound Garden é um site desenvolvido para uma grande empresa de eventos que mostra os pricipais shows que estão por vir.",
    secretTextAcess: (<div className="AcessDois"><div><Link to="/projects/2"><FaMagnifyingGlassPlus /> <p> mais detalhes</p></Link></div> <div><Link to="https://github.com/gleibercoelho/soundgarden-front" target="_blank"><FaGithub /><p>GitHub</p></Link></div><div><Link to="https://gleibercoelho.github.io/soundgarden-front/" target="_blank"><FaCode /><p>acessar site</p></Link></div></div>),
    imageSrcSecretOne: SoundGarden,
    imageSrcSecretTwo: SoundGardenTwo,
    imageSrcSecretThree: SoundGardenThree,
    imageClassSecretOne: "SoundGardenSecretOne",
    imageClassSecretTwo: "SoundGardenSecretTwo",
    imageClassSecretThree: "SoundGardenSecretThree",
  },
  {
    id: 3,
    imageClass: "Codeleap",
    imageSrc: Codeleap,
    title: "CodeLeap",
    technologies: (
      <div>
        <FaReact />
        < SiRedux />
        <SiTypescript />
        <SiStyledcomponents />
        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
    secretText: "Codeleap é um serviço de microblog para publicar todas as suas ideias e pensamentos para o mundo",
    secretTextAcess: (<div className="AcessDois"><div><Link to="/projects/3"><FaMagnifyingGlassPlus /> <p> mais detalhes</p></Link></div> <div><Link to="https://github.com/gleibercoelho/codeLeap" target="_blank"><FaGithub /><p>GitHub</p></Link></div><div><Link to="https://gleibercoelho.github.io/codeleapPage/" target="_blank"><FaCode /><p>acessar site</p></Link></div></div>),
    imageSrcSecretOne: Codeleap,
    imageSrcSecretTwo: CodeleapTwo,
    imageSrcSecretThree: CodeleapThree,
    imageClassSecretOne: "CodeleapSecretOne",
    imageClassSecretTwo: "CodeleapSecretTwo",
    imageClassSecretThree: "CodeleapSecretThree",
  },
  {
    id: 4,
    imageClass: "Dindin",
    imageSrc: Dindin,
    title: "Dindin",
    technologies: (
      <div>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
    secretText: "Dindin é uma plataforma de cursos de educação financeira onde é possível assistir aulas gravadas",
    secretTextAcess: (<div className="AcessDois"><div><Link to="/projects/4"><FaMagnifyingGlassPlus /> <p> mais detalhes</p></Link></div> <div><Link to="https://github.com/gleibercoelho/Dindin-website-of-education" target="_blank" ><FaGithub /><p>GitHub</p></Link></div><div><Link to="https://gleibercoelho.github.io/Dindin-website-of-education/" target="_blank"><FaCode /><p>acessar site</p></Link></div></div>),
    imageSrcSecretOne: Dindin,
    imageSrcSecretTwo: DindinTwo,
    imageSrcSecretThree: DindinThree,
    imageClassSecretOne: "DindinSecretOne",
    imageClassSecretTwo: "DindinSecretTwo",
    imageClassSecretThree: "DindinSecretThree",
  },
  {
    id: 5,
    imageClass: "Sheilla",
    imageSrc: Sheilla,
    title: "Pompom",
    technologies: (
      <div>

        <IoLogoJavascript />
        <FaHtml5 />
        <FaCss3Alt />
      </div>
    ),
    secretText: "Pompom é um site de uma criadora de conteúdo Drag Queen de jogos e lives de entretenimento LGBTQIA+ friendly",
    secretTextAcess: (<div className="AcessDois"><div><Link to="/projects/5"><FaMagnifyingGlassPlus /> <p> mais detalhes</p></Link></div> <div><Link to="https://github.com/gleibercoelho/SheillaPompom" target="_blank"><FaGithub /><p>GitHub</p></Link></div><div><Link to="https://gleibercoelho.github.io/SheillaPompom/" target="_blank"><FaCode /><p>acessar site</p></Link></div></div>),
    imageSrcSecretOne: Sheilla,
    imageSrcSecretTwo: SheillaTwo,
    imageSrcSecretThree: SheillaThree,
    imageClassSecretOne: "SheillaSecretOne",
    imageClassSecretTwo: "SheillaSecretTwo",
    imageClassSecretThree: "SheillaSecretThree",
  },
  // Adicione outros projetos conforme necessário
];



const [currentSlide, setCurrentSlide] = useState(1);
const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

const showSlide = (myIndex: any) => {
  // ... (mantenha o código para ocultar os slides não necessários)
  const currentSlideElement = document.getElementById(`slide${myIndex}-${myIndex}`);
  if (currentSlideElement) {
    currentSlideElement.style.display = 'flex';
  }
};


const totalSlides = 3;

useEffect(() => {
  if (secretDivState) {
    startInterval();
  } /* else {
    stopInterval();
  } */

 /*  return () => {
    stopInterval();
  }; */
}, [secretDivState]);

const nextSlide = () => {
  setCurrentSlide((prevSlide) => {
    const newSlide = (prevSlide % totalSlides) + 1;
    showSlide(newSlide); // Chama showSlide com o novo índice do slide
    return newSlide;
  });
};


const startInterval = () => {
  if (!intervalId) {
    const id = setInterval(() => {
      nextSlide();
    }, 3000);
    setIntervalId(id);
  }
};

/* const stopInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
    setIntervalId(null);
  }
}; */

const autoStartInterval = () => {
  if (!secretDivState) {
    setSecretDivState(true);
  }
};


const divRefs = Array.from({ length: totalSlides }, () => React.createRef<HTMLElement>());



return (
  <ProjectsBox >
    <h1>Projetos em destaque</h1>
    <div>
      {projectData.map((project, index) => (
        <Reveal>
          <section ref={divRefs[index]} className={`${index % 2 === 0 ? "leftProjects" : "RightProjects"} `} key={index} id={`project-${index}`}>
            {/* Use a lógica de condicional para alternar a ordem */}
            {index % 2 === 0 ? (
              <>
                <div className="card" style={{ display: "flex" }}>
                  <img className={project.imageClass} src={project.imageSrc} alt="" />
                </div>
                <div className="textDiv" style={{ display: "flex" }}>
                  <h2>{project.title}</h2>
                  <p>techs: {project.technologies}</p>
                  <button className="button" onClick={(event) => handleClick(event, project.id)}>Saiba +</button>
                </div>
              </>
            ) : (
              <>
                <div className="textDiv" style={{ display: "flex" }}>
                  <h2>{project.title}</h2>
                  <p>techs:{project.technologies}</p>
                  <button className="button" onClick={(event) => handleClick(event, project.id)}>Saiba +</button>
                </div>
                <div className="card" style={{ display: "flex" }}>
                  <img className={project.imageClass} src={project.imageSrc} alt="" />
                </div>
              </>
            )}
            <div className="secretDiv" style={{ display: "none" }}>


              <div className="secretDivRow">
                <button className="saibaMais" onClick={(event) => { handleClick(event, project.id); /* setLeftDivClass(`oriented-Div-animated ${index}`);
        setRightDivClass(`oriented-Div-animated ${index}`) */}}>Fechar -</button>
                <div className="secretDivColumn">
                  <p>{project.secretText}</p>
                  <div className="Acess">{project.secretTextAcess}
                  </div>
                </div>

              </div>
              <div className="carousel">
                <img src={project.imageSrcSecretOne} alt="" className={`slide ${currentSlide === 1 ? 'active' : ''} ${project.imageClassSecretOne}`} id="slide1" />
                <img src={project.imageSrcSecretTwo} alt="" className={`slide ${currentSlide === 2 ? 'active' : ''} ${project.imageClassSecretTwo}`} id="slide2" />
                <img src={project.imageSrcSecretThree} alt="" className={`slide ${currentSlide === 3 ? 'active' : ''} ${project.imageClassSecretThree}`} id="slide3" />

              </div>
            </div>

          </section>
        </Reveal>
      ))}
      
    </div>
    <div className="footer">
     
    <Link to="/projects"><h2 >Ver todos os projetos</h2></Link>
    </div>
  </ProjectsBox>
)

}

export default Projects;