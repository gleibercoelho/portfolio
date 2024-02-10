import styled from "styled-components";


export const ProjectsBox = styled.div`

Reveal {

}
/* background-image: linear-gradient(to left, #00060f, #061627, #002040, #002a5a, #083374); */
background-image: linear-gradient(to left, #00060f, #041222, #001935, #002049, #00255c);
margin: 0;
padding: 0;
a{
  text-decoration: none;
}
h1{
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 70px;
  text-justify: center;
  justify-content: center;
  color: #D0A616;
  font-weight: 900;
  margin: 0;
  padding: 40px 0 30px 0;
  
}
.footer{
  display: flex;
  flex-direction: row;
  font-family: 'Poppins', sans-serif;
  text-justify: center;
  justify-content: right;
  h2{
  color: #D0A616;
  font-weight: 900;
  margin: 0;
  padding: 60px 0px 50px 0;
  margin-right: 60px;
  width: 100%;
  font-size: 50px;}
}

.leftProjects.oriented-Div-animated0{
opacity: 0;
transition: opacity 1s;
}
.RightProjects.oriented-Div-animated1{
opacity: 0;
transition: opacity 1s;
}
.leftProjects.oriented-Div-animated2{
opacity: 0;
transition: opacity 1s;
}
.RightProjects.oriented-Div-animated3{
opacity: 0;
transition: opacity 1s;
}
.leftProjects.oriented-Div-animated4{
opacity: 0;
transition: opacity 1s;
}
.RightProjects.oriented-Div-animated5{
opacity: 0;
transition: opacity 1s;
}

.leftProjects{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;    
    align-items: center;
    font-family: 'Poppins', sans-serif;
    color: #071F27;
    height: 350px;
    opacity: 1;
    transition: 1.0s;
    
    
    .button{
      height: 30px;
      font-size: 20px;
      width: 120px;
      border: none;
      border-radius: 5px;
      color: black;
      background-color: #6572B3;
      font-family: 'Poppins', sans-serif;
      align-items: center;
    }
   
}

.RightProjects{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;   
    align-items: center;
    font-family: 'Poppins', sans-serif;
    height: 350px;
    transition: 1s;
    
    .button{
      height: 30px;
      font-size: 20px;
      width: 120px;
      border: none;
      border-radius: 5px;
      color: black;
      background-color: #6572B3;
      font-family: 'Poppins', sans-serif;
      align-items: center;
    }
}


.textDiv{
  flex-direction:column;
  h2{
  color: #B28C00;
  font-size: 52px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  
}

p{
  font-size: 20px;
  color: #FBEAFF;
}

svg{
  font-size: 35px;
  color: #FBEAFF;
}
}


.secretDiv.show-animated {
  opacity: 1;
  transition: opacity 1s ease-in-out;
  /* Adicione outras animações aqui conforme necessário */
}
.secretDiv {
  height: 350px;
  width: 100vw !important;
  position: relative;
  z-index: 0;
  flex-wrap: wrap;
  flex-direction: column; 
  color: #F7F8FF;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: black;
  overflow: hidden;  
  opacity: 0.0;
  transition: opacity 2s; /* Defina a duração da transição conforme necessário */





  
  
  .secretDivRow{
    display:flex;
    width: 100%;       
    flex-direction: row;
    justify-content: right;
    height: 350px; 
    ;

   .saibaMais {
    height: 350px;
    margin: 0;
    padding: 0;
    border: 0; 
    position: relative;
    transform: translateX(-100%);
    transition: 1s;
    background-color: black;
    color: white;
  }
  
  .saibaMais.show-Button {
    height: 350px;
    margin: 0;
    padding: 0;
    border: 0; 
    position: relative;
    left: 0px;   
    transform: translateX(0);
    transition: 1s;
  }
  
  
  .saibaMais.show-Button.show-Button-transition {
  /* Defina a terceira animação aqui */
  transition: transform 1.0s ease-in-out, background-color 0.3s ease-in-out, color 0.01s ease-in-out, border-radius 0.01s; /* Agrupe as propriedades de transição com diferentes tempos */
  transform: translateX(100vw) scale(100);
  /* font-size: 0; */
  color: transparent;
  background-color: white;
  border-radius: 50%;
  
}

  
  }

  .secretDivColumn{
    display: flex;
    flex-direction: column;
    

    width: 100vw;
    height: 350px;
    
    justify-content: flex-end;
    p{
      padding-left: 40%;
      font-size: 35px;
      color: #F7F8FF;
    }
    a{
      text-decoration: none;
    }
  }

  .Acess{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    
    align-items: flex-end;
  }
  .AcessDois{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    
    white-space: nowrap;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p{
      display: flex;
      font-size: 20px;
      align-self: center;
      padding-left: -80px;
      color: #F7F8FF;

    }
    svg{
      display: flex;
      font-size: 30px;
      align-self: center;
      padding-left: 70px;
      color: #F7F8FF;
    }
  }
  .carousel { 
  height: 350px;
  position: relative;
  top: -50px;
  right: 1200px;
  z-index:-1;
  opacity: 0.5;

  .slide {
  display: none;  
  transition: opacity 0.5s ease-in-out;
 
}

.active {
  display: flex; /* ou o valor apropriado para exibição */
  
  
}
  
}
.slide.active.EcommerceSecretOne {
  position: relative;
  object-fit: cover;
  left: -600px;
  bottom: 300px;     
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.EcommerceSecretTwo {
  position: relative;
  object-fit: cover;
  transform: scale(0.9);
  left: -600px;
  bottom: 350px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.EcommerceSecretThree {
  position: relative;
  object-fit: cover;
  transform: scale(1.0);
  left: -700px;
  bottom: 500px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.GGWPSecretOne {
  position: relative;   
  left: -600px;
  bottom: 10px;   
  zoom: 2.0;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.GGWPSecretTwo {
  position: relative;  
  zoom: 2.0;
  left: -400px;
  bottom: 400px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.GGWPSecretThree {
  position: relative;
  zoom: 2.0;
  left: -400px;
  bottom: 950px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.SoundGardenSecretOne {
  position: relative;
  object-fit: cover;   
  left: -400px;
  bottom: 350px;   
  zoom: 2.0;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.SoundGardenSecretTwo {
  position: relative;  
  zoom: 1.2;
  left: -360px;
  bottom: 125px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.SoundGardenSecretThree {
  position: relative;
  zoom: 2.0;
  left: -500px;
  bottom: 350px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.CodeleapSecretOne {
  position: relative;  
  left: -300px;
  bottom: 120px;   
  zoom: 1.2;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.CodeleapSecretTwo {
  position: relative;  
  zoom: 1.2;
  left: -350px;
  bottom: 125px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.CodeleapSecretThree {
  position: relative;
  zoom: 1.3;
  left: -410px;
  bottom: 150px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.BarbershopSecretOne {
  position: relative;  
  left: -50px;
  bottom: 0px;   
  zoom: 4.0;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.BarbershopSecretTwo {
  position: relative;  
  zoom: 4.0;
  left: -50px;
  bottom: 75px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.BarbershopSecretThree {
  position: relative;
  zoom: 4.0;
  left: -50px;
  bottom: 50px;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.agenciaSecretOne {
  position: relative;  
  left: -100px;
  bottom: 100px;   
  zoom: 1.3;
  animation: shaking 4s ease-in-out infinite;
}
.slide.active.agenciaSecretTwo {
  position: relative;  
  zoom: 1.2;
  left: -100px;
  bottom: 0px;
  animation: shakingInverse 4s ease-in-out infinite;
}
.slide.active.agenciaSecretThree {
  position: relative;
  zoom: 1.3;
  left: -100px;
  bottom: 50px;
  animation: shaking 4s ease-in-out infinite;
}


}


@keyframes shaking
{
   /* 0% { width: 0; height: 0vh;fill-opacity: 0;}
    50% { width: 0; height: 0vh;fill-opacity: 0;}
    100% {width:600px; height: 500px; fill-opacity: 1;} */
    0% {
		
		transform:translatex(0)
	}
	100%{
		
		transform:translatex(-20px)
	}   
}
@keyframes shakingInverse
{
   /* 0% { width: 0; height: 0vh;fill-opacity: 0;}
    50% { width: 0; height: 0vh;fill-opacity: 0;}
    100% {width:600px; height: 500px; fill-opacity: 1;} */
    0% {
		
		transform:translatex(0)
	}
	100%{
		
		transform:translatex(20px)
	}   
}

.card {
  position: relative;
  overflow: hidden;
 /*  overflow-y:scroll; */
    width: 550px;
  height: 300px;
  margin: 50px 0;
  background-color: none;
  .textDiv h2{
    margin-bottom: 20px;
  }
  .textDiv p{
    margin-top: 0px;
  }
}

.card img {
  width: 100%;
  object-fit: contain;  
  transition: transform 0.3s ease-in-out;
}

.Ecommerce{
  position: relative;
  transform: scale(1.05);
  top: -20px;
  left: 6px;
  /* transform: translateY(2px); */
}


.GGWP{
  position: relative;
  transform: scale(14.05);
  top: 1680px;
  left: 130px;
  /* transform: translateY(2px); */
}
.Soundgarden{
  position: relative;
  transform: scale(3.25);
  top: 320px;
  left: -5px;
  /* transform: translateY(2px); */
}
.Codeleap{
  position: relative;
  transform: scale(1.16);
  top: 0px;
  left: 0px;
  /* transform: translateY(2px); */
}
.BarberShop{
  position: relative;
  transform: scale(5.0);
  top: 340px;
  left: 0px;
  /* transform: translateY(2px); */
}
.Sheilla{
  position: relative;
  transform: scale(1.1);
  top: 0px;
  left: 25px;
  /* transform: translateY(2px); */
}

@media only screen and (max-width: 1260px){

  h1{
    font-size: 50px;
    align-self: center;
  }
  .footer h2{
    font-size: 35px;
  }
  .leftProjects{
    h2{
      font-size: 35px;
      padding-left: 20px;
      margin: 10px 0;
    }
    p{
      font-size: 20px;
      padding-left: 20px;
      margin: 10px 0;
     }
     p svg{
      font-size: 20px;
      padding-left: 5px;
     }
     .button{
      height: 25px;
      font-size: 18px;
      width: 100px;
      border-radius: 5px;
      margin-left: 20px;
     }
  }
  .RightProjects{
    h2{
      font-size: 35px;
      
      margin: 10px 0;
    }
    p{
      font-size: 20px;
      
      margin: 10px 0;
     }
     p svg{
      font-size: 20px;
      padding-left: 5px;
     }
     .button{
      height: 25px;
      font-size: 18px;
      width: 100px;
      border-radius: 5px;
      
     }
  }
  .secretDiv .secretDivColumn p{
    font-size: 30px;
  }
}

@media only screen and (max-width: 768px){

    h1{
      font-size: 30px;
      align-self: center;
    }
    .footer h2{
      font-size: 25px;
    }
    .leftProjects{
      display: flex;
      flex-direction: column-reverse;
      height: 400px;
     

     
     
     h2{
      font-size: 20px;
     } 
     p{
      font-size: 15px;
     }
     p svg{
      font-size: 15px;
     }
     .button{
      font-size: 15px;
      width: 80px;
      height: 25px;
      border-radius: 5px;
      margin-bottom: 0;
      padding-bottom: 0;
     }
     .textDiv{
      height: 150px;
      margin: 10px 0; 
      
     }
     img{
      width: 300px;
      height: 250px;
      object-fit: contain;
      margin-top: 0;
      padding-top: 0;         
     }
     .card {
      height: 300px;
      width: 300px;
      background-color: green;
      .Ecommerce{
        top: -50px;
     }
     .Soundgarden{
      top: 150px;
     }
     .BarberShop{
      top: 90px;
      left: 0px;
      transform: scale(3.3);
     }
    }
    .secretDiv{
      background-image: linear-gradient(to right, #005675, #006b6a, #007d58);
        .carousel img{
        display: none
   }
    }
  }
    .RightProjects{
      display: flex;
      flex-direction: column;
      height: 400px;
      overflow: visible;

      .saibaMais{
        height: 400px;
      }
     h2{
      font-size: 20px;
     } 
     p{
      font-size: 15px;
     }
     p svg{
      font-size: 15px;
     }
     .button{
      font-size: 15px;
      width: 80px;
      height: 25px;
      border-radius: 5px;
      margin-bottom: 0;
      padding-bottom: 0;
     }
     .textDiv{
      height: 150px;
      margin: 10px 0; 
      
     }
     img{
      width: 300px;
      height: 200px;
      object-fit: contain;
      margin-top: 0;
      padding-top: 0;
      
      
     }
     .card {
      
     
      width: 300px;
      height: 200px;
      .GGWP{
        top: 1110px;
        left: 45px;
     }
     .Sheilla{
      left: 10px;
     }
    }
    .secretDiv{
      background-image: linear-gradient(to right, #250f26, #1b0813, #000000);
      color: #D0A616;
       .carousel img{
        display: none
   }
    }
  }
    .secretDiv {
      overflow: visible;
      height: 400px;
      color: #D0A616 !important;  
    
     
        .secretDivRow{

          height: 400px;

          
          .saibaMais.show-Button{

            height: 400px;
            
        }
        .secretDivColumn{
              height: 400px;              
              justify-content: center;
              align-items: center;              
              text-align: justify; 
               
              color: #D0A616 !important;    
             
              
              p{
                font-size: 23px;
                padding-left: 10%;
                width: 80%;
                color: #D0A616 !important;
                
              }
              a{
                font-size: 20px;
              }
             
          }
            .AcessDois{
              
             div{
              p{
                font-size: 15px;
                padding-left: 0px;
                color: #FFF7D6;
              }
              svg{
                font-size: 20px;
                padding-left: 20px;
                color: #B6BFFF;
              }
             }
            }
           
           
     }
  }
}

`;
