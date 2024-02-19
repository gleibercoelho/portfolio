
import { ShowcaseBox, GridContainer, GridItem } from "./style";
import CafeHero from "../../assets/cafe/FireShot Capture 030 - Café 3 Corações - .png"
import pokedexHero from "../../assets/pokedex/FireShot Capture 028 - PokeDex - .png"
import ommaHero from "../../assets/omma/FireShot Capture 038 - Omma - Receitas legais - .png"
import gadgetsHero from "../../assets/mercado Gadgets/home.png"
import ggwpHero from "../../assets/ggwp/logo.png"
import pompomHero from "../../assets/pompom/Logotipo 500x500  px. (2).png"
import soundgardenHero from "../../assets/soundgardenfile/pexels-wendy-wei-2183361.jpg"
import netflixHero from "../../assets/netflix/HOUSE OF CARDS.jpg"
import dindinHero from "../../assets/dindin/dindin.png"
import mechHero from "../../assets/mech/login.jpeg"
import codeleapHero from "../../assets/codeleap/codeleap.png"
import AgencyHero from "../../assets/blog/FireShot Capture 070 - Netxt.js 14 Homepage - localhost.png"
import BarbershopHero from "../../assets/barbershop/e995db6d-df96-4658-99f5-11132fd931e1-17j.jpg"
import LavieHero from "../../assets/La Vie/0_MNVJq_8e0SJoqZb5.jpg"
import { Link } from "react-router-dom";
import { RevealTwo } from "../test/reveal two";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Showcase = () => {

    const [t] = useTranslation("global");
    return (
       
        <ShowcaseBox>
             <motion.h1
                 initial={{ opacity: 0, x: -100 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: .75 }}
                 > {t("showcase.title")}</motion.h1>
            <RevealTwo>
            <div className="box">
               
            <GridContainer
           
            >
            
      <GridItem style={{ gridColumn: 'span 6', gridRow: 'span 3' }}><Link to="/projects/8" ><img className="CafeHero" src={CafeHero} alt="" /><p>Cafe 3 Corações</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 5', gridRow: 'span 2' }}><Link to="/projects/12" ><img className="ommaHero" src={ommaHero} alt="" /><p>Omma</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 5', gridRow: 'span 3' }}><Link to="/projects/0" ><img className="barbershopHero" src={BarbershopHero} alt="" /><p>BarberShop</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 3', gridRow: 'span 3' }}><Link to="/projects/2" ><img className="gadgetsHero" src={gadgetsHero} alt="" /><p>Gadgets</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 3', gridRow: 'span 5' }}><Link to="/projects/1" ><img className="agencyHero" src={AgencyHero} alt="" /><p>Agency</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 2', gridRow: 'span 2' }}><Link to="/projects/7" ><img className="pompomHero" src={pompomHero} alt="" /><p>Pompom</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 3', gridRow: 'span 2' }}><Link to="/projects/10" ><img className="pokedexHero" src={pokedexHero} alt="" /><p className="pokedex">Pokedex</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 3', gridRow: 'span 4' }}><Link to="/projects/4" ><img className="APICEPHero" src={soundgardenHero} alt="" /><p>Sound-G</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 5', gridRow: 'span 3' }}><Link to="/projects/6" ><img className="dindinHero" src={dindinHero} alt="" /><p>Dindin</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 3', gridRow: 'span 2' }}><Link to="/projects/11" ><img className="mechHero" src={mechHero} alt="" /><p>Mech</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 5', gridRow: 'span 3' }}><Link to="/projects/9" ><img className="netflixHero" src={netflixHero} alt="" /><p>Netflix Clone</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 2', gridRow: 'span 3' }}><Link to="/projects/3" ><img className="ggwpHero" src={ggwpHero} alt="" /><p>GG-WP</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 4', gridRow: 'span 2' }}><Link to="/projects/5" ><img className="codeleapHero" src={codeleapHero} alt="" /><p>Codeleap</p></Link></GridItem>
      <GridItem style={{ gridColumn: 'span 4', gridRow: 'span 1' }}><Link to="/projects/13" ><img className="APICEPHero" src={LavieHero} alt="" /><p>La Vie</p></Link></GridItem>
    </GridContainer>
    </div>
    </RevealTwo>
        </ShowcaseBox>
        
    )

}

export default Showcase;