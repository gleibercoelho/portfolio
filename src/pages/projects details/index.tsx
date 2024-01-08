import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails, { product } from "../../components/Array projects details";
import Header from '../../components/header/header H';
import { useScroll, motion, useSpring } from "framer-motion";
import TransitionWrapper from "../../components/transition";
import { useEffect } from 'react';

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  

  // Utiliza o array de produtos exportado de ProductDetails
  const selectedProduct = product.find((item) => item.id === parseInt(productId ?? '', 10));

  if (!selectedProduct) {
    return <div>      
      <Header/> 
      <p>Produto não encontrado</p>
      </div>;
  }
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress)

  
    useEffect(() => {
    
        window.scrollTo(0, 0);
      }), [];

  return (
    <TransitionWrapper>     
      <Header/> 
      <ProductDetails product={selectedProduct} />
      <motion.div style={{
            scaleX,
            transformOrigin: "left",
            background: "black",
            position: "sticky",
            bottom: 0,
            width: "100%",
            height: "5px",
        }}>
            </motion.div>
    </TransitionWrapper>
  );
};

export default ProductDetailsPage;
