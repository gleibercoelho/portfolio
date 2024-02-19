import Gleiber from "../../assets/Captura de tela 2023-12-22 184050.png"
import { AboutComponentBox } from "./style";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutComponent = () => {

    const [t] = useTranslation("global");
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
                <h1>{t("about.saudation")}</h1>
                <h2>{t("about.iam")} <span>Gleiber</span>.</h2>
                <p>{t("about.body")}<span> {t("about.bodySpan")}</span></p>
                <hr />
                <div className="gridBox">
                    <div className="gridColumnOne">
                        <p>{t("about.name")}<span> Gleiber Coelho</span></p>
                        <p>{t("about.formation")} <span>{t("about.formation2")}</span></p>
                    </div>
                    <div className="gridColumnTwo">
                        <p>{t("about.tech")} <span>Javascript</span></p>
                        <p>{t("about.especialization")}<span> FrontEnd</span></p>
                    </div>
                </div>
            </motion.div>
        </AboutComponentBox>
    )

}

export default AboutComponent;