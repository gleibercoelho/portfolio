import styled from "styled-components";

export const MainCardBox = styled.div`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;


}

height: 43.125rem;
overflow: hidden;
background-color: black;


section{
   
    position: relative;
    width: 100%;
    height: 6.25rem;
    overflow: hidden;
    background: red;
    font-family: 'Poppins', sans-serif;
    z-index: 0;
    overflow: hidden;
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
   h1 {
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 120px;
    font-weight: 600;
    line-height: 170px;
    width: 900px;
    z-index: 0;
    top: 0px;
    left: 100px;
    color: #479ED0;
    /* background-color: rgba(250, 250, 250, 0.6); */
    /* -webkit-text-stroke: 1px #82A0AA;  */
    
    
  } 

  .caixa {
    position: relative;
    width: 400px;
    height: 400px;   
    display: flex;
    justify-content: center;
    align-items: center;
   
    z-index: -2; 
    top: -375px;
    left: 890px;
    border-radius: 50%;
    overflow: hidden;
    

    img {
      position: absolute;
      border-radius: 50%;
      top: -60px;;
      left: -50px;
      transform: scale(.76);
      z-index: 4; 
      border: solid 5px white;
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
  }

  .box{
        position: absolute;
        background-image: linear-gradient(to right, #000000, #090506, #100a0d, #150e12, #191217);
        color: #00C89B;
        top: 16.25rem;        
        height: 22.5rem;
        width: 99%;
        z-index: 3;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box !important;
        margin-block-start: 0 !important;
        margin-inline-start: 0 !important;
    }
    @media only screen and (max-width: 1310px){
        h1{
           font-size: 60px;
           width: 420px;     
        }
        .caixa {           
            left: 350px;
            top: -400px;
            z-index: -2;
            
             
            }
            img{
                width: 400px;
                position: relative;
                top: 20px !important;
                left: 20px !important;
    }
    }

    @media only screen and (max-width: 768px){

        h1{
            font-size: 45px;
            flex-wrap: wrap;
            width: 420px;
            left: 30px;
            line-height: 100px;
            top: 50px;
        }

        .caixa {           
            left: 0px;
            top: -200px;
            z-index: -2;
             
            }

            img{
                width: 230px;
                object-fit: contain;                
                position: relative !important;
                top: -80px !important;
                left: 75px !important;
                z-index: 0;                
            }

        .box{
            height: 18.75rem; 
            width: 100%;           
        }
       
        
            height: 600px;
            overflow: hidden;
    }
    
`;
