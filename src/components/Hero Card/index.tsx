import { MainCardBox } from "./style";
import photo from "../../assets/Captura de tela 2023-01-05 012557.png"
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const MainCard = () => {

    const [t] = useTranslation("global");

    useEffect(() => {
        const position = document.documentElement;

        const handleMouseMove = (e:any) => {
            position.style.setProperty('--x', e.clientX + 'px');
        };



        position.addEventListener('mousemove', handleMouseMove);


        return () => {
            // Remove os ouvintes de eventos quando o componente é desmontado
            position.removeEventListener('mousemove', handleMouseMove);

        };
    }, []);

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { transform } = useSpring({
        transform: `translateX(${scrollY}px)`,
        config: { mass: 1, tension: 120, friction: 14 },
    });

    interface CustomHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
        style?: React.CSSProperties & {
            '--i'?: number;
        };
    }

    const CustomHeading: React.FC<CustomHeadingProps> = ({ children, style, ...rest }) => {
        return (
            <h2 style={style} {...rest}>
                {children}
            </h2>
        );
    };
    const CustomHeadingP: React.FC<CustomHeadingProps> = ({ children, style, ...rest }) => {
        console.log(CustomHeadingP);
        return (
            <p style={style} {...rest}>
                {children}
            </p>
        );
    };
   

    return (
        <MainCardBox>

            <motion.div
                initial={{ opacity: 0, left: 100 }}
                animate={{ opacity: 1, left: 0 }}
                transition={{ duration: 1, delay: .75 }}
                className="text" >
                <CustomHeading style={{ '--i': 2.5 }}><animated.div style={{ transform, transition: 'transform 0.2s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 3.15 }}><animated.div style={{ transform, transition: 'transform 0.3s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 0.25 }}><animated.div style={{ transform, transition: 'transform 0.3s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 2.25 }}><animated.div style={{ transform, transition: 'transform 0.3s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 2.25 }}><animated.div style={{ transform, transition: 'transform 0.4s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 0.25 }}><animated.div style={{ transform, transition: 'transform 0.32s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 0.75 }}><animated.div style={{ transform, transition: 'transform 0.24s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 3.0 }}><animated.div style={{ transform, transition: 'transform 0.17s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 0.35 }}><animated.div style={{ transform, transition: 'transform 0.1s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 1.25 }}><animated.div style={{ transform, transition: 'transform 0.08s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 4.25 }}><animated.div style={{ transform, transition: 'transform 0.18s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 2.5 }}><animated.div style={{ transform, transition: 'transform 0.25s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
                <CustomHeading style={{ '--i': 0.75 }}><animated.div style={{ transform, transition: 'transform 0.s ease-in-out' }}><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span><span>Gleiber Coelho</span></animated.div></CustomHeading>
            </motion.div>
            <div className="box">
                 
                <motion.div 
                initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: .75 }}
                 className="title" >
                <h1>
                    {t("home.body")}
                </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: .75 }} className="caixa">
                    <img src={photo} alt="" />
                </motion.div>
            </div>
        </MainCardBox>
    )

}

export default MainCard;