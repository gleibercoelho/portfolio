import { motion } from "framer-motion";
import { TRANSBOX } from "./style";
import React, { ReactNode } from 'react';

interface TransitionWrapperProps {
  children: ReactNode;
}


const TransitionWrapper:React.FC<TransitionWrapperProps> = ({ children }) => {

  const anim = (variants: any, custom: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom
    }
  }

  const expand = {
    initial: {
      top: 0
    },
    enter: (i: any) => ({
      top: "100%",
      transition: {
        duration: 0.7,
        delay: 0.05 * i
      },
      transitionEnd: {
        height: 0,
        top: 0
      }
    }),
    exit: (i: any) => ({
      height: "100%",
      transition: {
        duration: 0.7,
        delay: 0.05 * i
      },
    })
  }

 /*  const overlay = {
    initial: {
      opacity: .4
    },
    enter: {
      opacity: 0,
      duration: 0.7

    },
    exit: {
      opacity: .4
    }
  } */
  
  const nbOfColumns = 7;

  return (
    <TRANSBOX>
      <div className="page stairs">
        {/* <motion.div {...anim(overlay)} className="background"></motion.div> */}
        <div className="transition-container">
            {
              [...Array(nbOfColumns)].map((_, i) =>{
                return <motion.div {...anim(expand, nbOfColumns - i)} key={i}/>
              })
            }
        </div>
      </div>
      {children}
      {/* <motion.div
          className="slide-in"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}  // Mantenha essa lógica se deseja reverter a animação de entrada
          transition={{ duration: 1 }}
        />

        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}  // Altere a escala inicial para 0
          animate={{ scaleY: 0 }}  // Mantenha essa lógica se deseja reverter a animação de saída
          exit={{ scaleY: 1 }}  // Altere a escala de saída para 0
          transition={{ duration: 1 }}
        /> */}
    </TRANSBOX>

  );
};

export default TransitionWrapper;
