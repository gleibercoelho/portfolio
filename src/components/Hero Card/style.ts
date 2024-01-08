import styled from "styled-components";

export const MainCardBox = styled.div`

    box-sizing: border-box;
    margin: 0;
    padding: 0;




    height: 43.125rem;
    overflow: hidden;
    background-color: black;


        section{
        
            position: relative;
            width: 100%;
            height: 6.25rem;
            
            background: red;
            font-family: 'Poppins', sans-serif;
            z-index: 0;
            
        }
        .text{
            position: relative;
            transform: skewY(345deg) translateY(-200px) !important;
            background-color: black;
            /* animation: animatedColor 5s linear infinite; */
            z-index: 1;
            height: 1300px;
            width: 100%;
            bottom: 100px;
            overflow: hidden;
        }

/* @keyframes animatedColor {
    0%{
        filter: hue-rotate(0deg);
    }
    100%{
        filter: hue-rotate(720deg);
    }
    
} */

    .text h2{
        position: relative;
        width: 100%;
        font-size: 6em;
        color: purple;
        pointer-events: none;
        line-height: 1em;
        white-space: nowrap;
        text-shadow: calc(var(--x)) 100px 0 rgba(255,255,255,0.2);  
        transform: translateX(calc(0% - var(--x) * var(--i)));
        opacity: 1;
    }

    /* .text p {
    position: relative;
    width: 100%;
    font-size: 1em;
    color: white;
    pointer-events: none;
    line-height: 1em;
    white-space: nowrap;
    text-shadow: var(--x, 0) 0 0 rgba(255, 255, 255, 0.95);
                
    transform: translateX(calc(0% - var(--x, 0) * var(--i))); 
    opacity: 1;
    } */


    .text h2 span{
    color: #F9F871;
    margin: 0 10px;
    }
    .text h2 span:nth-child(even){
        color: transparent;
        -webkit-text-stroke: 2px white;
    }
   

  

  

    /* &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 0; 
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      background: linear-gradient(45deg, #ffff00, #00ff00, #0099ff, #001aff, #a200ff, #ff0055, #ff0000, #ffff00, #00ff00, #0099ff, #001aff, #a200ff);
      border-radius: 50%;
      background-size: 300%;
      animation: BorderAnimation 8s linear infinite;
      
    }

    @keyframes BorderAnimation {
        0%{
            background-position: 0;
        }
        100%{
            background-position: 300%;
        }

    }

    &::after{
        filter: blur(15px);
    }  */

  .box{
       
        background-image: linear-gradient(to right, #000000, #090506, #100a0d, #150e12, #191217);
        color: #00C89B;              
        height: 22.5rem;        
        z-index: 3;     
        position: relative;
        top: -75rem; 
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        .title {
            position: relative;
            font-family: 'Poppins', sans-serif;                   
            width: 60%;
            z-index: 0;
            top: 0px;
            left: 8%;
            color: #479ED0;  
            h1{
                
                font-size: 120px;
            font-weight: 600;
            line-height: 130px;    
            }
        } 
        .caixa {
            position: relative;
            width: 40%;
            height: 100%;            
            z-index: -2;    
           border-radius: 0%;
           
           
                img {            
           
           border-radius: 50%; 
           transform: scale(1.0);
           position: relative;
           top: -70px; 
           left: 5px;                                
            z-index: -3;
           
           
            
            }
        
        }
    }
    @media only screen and (max-width: 1310px){
        .box{
            
            .title{
                h1{
           font-size: 60px;
           width: 600px;     
        }}
        .caixa {
            img{
                width: 300px;
                object-fit: contain; 
                top: 20px ;
                left: -100px ;
            }}
    }
        /* .caixa {           
            left: 400px;
            top: -400px;
            z-index: -2;
            background-color: transparent;
            
             
            
            img{
                width: 400px;
                position: relative;
                top: -50px !important;
                left: 20px !important;
    }
    } */
    }
    @media only screen and (max-width: 768px){

     
        height: 500px;
        

        .box{
            height: 18.75rem; 
            width: 100%; 

             h1{
            font-size: 40px !important; 
            left: 30px;
            line-height: 100px;
            width: 380px !important;
            top: 50px;
            }          
            .caixa {           
           /*  left: 70px;
            top: -270px;
            z-index: -2;
            width: 300px;
            height: 300px; */
            

            img{
                width: 230px;
                object-fit: contain; 
                top: 20px ;
                left: -80px ;    
                /*            
                position: relative !important;
                
                z-index: 0;   */              
            }
        }       
    }
            

    .text h2{
        font-size: 70px;
        line-height: 14px;
    }
}
`;
