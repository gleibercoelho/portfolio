import Gleiber from "../../assets/Captura de tela 2023-12-22 184050.png"
import { AboutComponentBox } from "./style";
import { motion } from "framer-motion";


const AboutComponent = () => {


    return (
        <AboutComponentBox>
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: .75 }}
            className="imgBox">
                <img src={Gleiber} alt="" />
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: .75 }} 
            className="informationBox">
                <h1>Olá<span>,</span></h1>
                <h2>eu sou o <span>Gleiber</span>.</h2>

                <p>
                    Eu sou desenvolvedor front-end júnior em transição de carreira. Sou apaixonado com 
                    desenvolvimento de sites e estilização. Estudo programação desde o início de 2022 e 
                    estou em busca da minha primeira oportunidade formal na área. Tenho experiencia tanto 
                    em front-end, quando em back-end, que estão evidenciados nos projetos que eu criei; 
                    Neste portifólio estão disponíveis alguns dos sites e aplicações que eu criei de forma 
                    independente e/ou em cursos e vídeo aulas. vamos trabalhar juntos? <span>Estou aberto a propostas freelance.</span>
                </p>
                <hr />
                <div className="gridBox">
                    <div className="gridColumnOne">
                        <p>Name: <span>Gleiber Coelho</span></p>
                        <p>Formação: <span>Cursando Análise e <br></br> Desenvolvimento De Sistemas</span></p>
                    </div>
                    <div className="gridColumnTwo">
                        <p>Linguaguem: <span>Javascript</span></p>
                        <p>Especialização <span>Fron-End</span></p>
                    </div>
                </div>
            </motion.div>
        </AboutComponentBox>
    )

}

export default AboutComponent;