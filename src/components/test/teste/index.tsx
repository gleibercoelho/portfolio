import { TestBox } from "./style";
import { motion} from 'framer-motion'
import { useAnimation } from "framer-motion";

const Test = () => {

    
    const controls = useAnimation();
  const handleClick = async () => {
    await controls.start("flip");
  };

 

  return (
  <TestBox>
    <div style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",

}}>
    {/* <MotionConfig transition={{duration: 1, ease: 'easeInOut'}}> */}
    <h1>hello world</h1>
    <motion.button
   /*  whileHover={{scale: 1.05}} whileTap={{scale: 0.95, rotate: "2.5deg"}} */  onClick={handleClick}
 
    layout> Yaaaaaaas Queen!</motion.button>
    <motion.button
    whileHover={{scale: 1.05}} whileTap={{scale: 0.95, rotate: "2.5deg"}} /* onClick={() => setIsVisible(!isVisible) } */ layout> Yaaaaaaas Queen!</motion.button>
    {/* </MotionConfig> */}
 {/*  <AnimatePresence>
    { isVisible && ( */}<motion.div 
    variants={{
        initial: {
          rotate: '0deg',
        },
        flip: {
          rotate: '360deg',
        },
      }}
      initial='initial'
      animate={controls}
   /*  initial={{
        rotate: "0deg",    
        
        scale: 0,
    }}
    animate={{
        rotate: "180deg",        
        
        scale: 1,
        y: [0, 150, -150, -150, 0]
    }}
    transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0,0.25,0.5,0.85, 1],
    }} 
exit={{
    rotate: '0deg',       
    scale: 0,
    y: 0
}} */

    style={{
        width: 150,
        height: 150,
        background: "black",
        position: "relative"
    }}
    >
<h1 style={{
    color: "white"
}}>slaaaaayyy Queen!</h1>
    </motion.div>{/* )}
    </AnimatePresence> */}
    </div>
    
  </TestBox>
  )
}
export default Test;