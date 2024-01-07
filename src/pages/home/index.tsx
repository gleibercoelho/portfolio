
import TransitionWrapper from "../../components/transition";
import MainCard from "../../components/Hero Card";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import Header from "../../components/header/header H";
import { useScroll, motion, useSpring} from "framer-motion";



const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
  
    <TransitionWrapper>
      <Header/>
      <MainCard/>
      <Projects />
      <Skills />
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
          background: "white",
          position: "sticky",
          bottom: 0,
          width: "100%",
          height: "5px",
        }}
      />
    </TransitionWrapper>
    
  );
};

export default Home;
