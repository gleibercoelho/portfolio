import {useEffect, useRef} from "react";
import { motion, useInView, useAnimation} from "framer-motion";
import { RevealBox } from "./style";

interface Props {
    children: JSX.Element;
    width?: "98vw";
}

export const RevealTwo = ({ children, width = "98vw"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return(
        <RevealBox>
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
            variants={{
                hidden: { opacity: 0, x: 75},
                visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate = {mainControls}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut"}}>
                {children}
            </motion.div>
           {/*  <motion.div
            variants={{
                hidden: { left: 0},
                visible: { left: "100%"},
            }}
            initial="hidden"
            animate = {slideControls}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut"}}>
                
            </motion.div> */}
        </div >
        </RevealBox>
    );
};