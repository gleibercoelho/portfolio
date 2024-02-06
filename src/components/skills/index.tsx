import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaAngular, FaVuejs, FaBootstrap} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { DiPostgresql } from "react-icons/di";
import { SiRedux, SiStyledcomponents, SiTypescript, SiTailwindcss, SiMongodb, SiNextdotjs, SiPrisma  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandFramerMotion } from "react-icons/tb";
import { AboutBox } from "./style";
import { RevealTwo } from "../test/reveal two";
import { RiSupabaseLine } from "react-icons/ri";




const Skills = () => {

  

  return (
    <AboutBox>
      <div className="master">
     <RevealTwo>
      <section className="sec-1">        
      
          <h1 className="animate">Skills</h1>
          <div className="boxes">
            <h2>Front-End / <br></br>
              Framework</h2>    
              <p><IoLogoJavascript/> JavaScript</p>
            <p><SiTypescript/> Typescript</p>       
            <p><FaReact/> React JS</p>  
            <p><SiNextdotjs />Next Js</p>
            <p><SiRedux/> Redux</p>
            <p><FaVuejs /> Vue Js *</p>
            </div>
          <div className="boxes">
            <h2>Estilização</h2>
            <p><TbBrandFramerMotion /> Framer Motion</p>
            <p><SiStyledcomponents/> Styled Components</p>
            <p><FaSass/> Sass</p>
            <p><SiTailwindcss /> TailWind</p>
            <p><FaBootstrap /> Bootstrap</p>
            <p><FaCss3Alt/> CSS</p>
            
            <p><FaHtml5/> HTML</p>
            </div>
          
          <div className="boxes">
            <h2>Back-end/BD</h2>
            <p><FaNodeJs/> Node Js</p>
            <p><GrMysql/> MySQL</p>
            <p><SiMongodb />Mongo DB</p>
            <p><DiPostgresql />Postgre SQL</p>
            <p><SiPrisma />Prisma</p>
            <p><RiSupabaseLine />Supabase</p>

            <p className="eight">* aprendendo atualmente</p>
            </div>
           
      </section>
      </RevealTwo>
      </div>
    </AboutBox>
  )
}
export default Skills;