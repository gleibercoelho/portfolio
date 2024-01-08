import styled from "styled-components";


export const GridContainer = styled.div`

  display: grid;
  background-image: linear-gradient(to right, #01674a, #01664a, #016549, #016549, #016448);
  grid-template-columns: repeat(auto-fit, minmax(100px, 3fr));
  grid-template-rows: repeat(13, 100px); /* Defina as alturas desejadas aqui */
  gap: 10px;
  background-color: black;

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  max-width: 1400px !important;
  min-width: 1236px !important;
  justify-content: center;
  justify-self: center;
  width: 100%;
  @media only screen and (max-width: 1236px){
    grid-template-columns: repeat(auto-fit, minmax(100px, 6fr));
    grid-template-rows: repeat(7, 100px);
    max-width: 100% !important;
    min-width: 100% !important;
  }
 
  @media only screen and (max-width: 768px){
    grid-template-columns: repeat(auto-fit, minmax(100px, 3fr));
    grid-template-rows: repeat(28, 100px);
    max-width: 100% !important;
  min-width: 100% !important;
  }
`;

export const GridItem = styled.div`
  background-color: #3498db;
  color: #fff;
  text-align: center;
  padding: 0px;
  border-radius: 5px;
  overflow: hidden;
 

.CafeHero{
  transform: scale(1.0);
  object-fit: cover; 
  width: 100%;
  height: 100%;
}
.pokedexHero{
  transform: scale(1.6);
  object-fit: contain; 
  width: 100%;
  height: 120%;
  position: relative;
  top: 70px;
  left: 100px;
  }
.ommaHero{
  transform: scale(1.0);
  object-fit: cover; 
  width: 100%;
  height: 100%;
}
.gadgetsHero{
  transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.ggwpHero{
  transform: scale(1.0);
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.pompomHero{
  transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-color: #ffc0cb;
}
.soundgardenHero{
  transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.netflixHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.dindinHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.mechHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.codeleapHero{
    transform: scale(1.1);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.APIFeriadoHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 95%;
  height: 100%;
}
.APICEPHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.APICEPHero{
    transform: scale(1.0);
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;

}

p{
  position: relative;
  bottom: 70px;
  font-family: "Poppins", "sans-serif";
  font-size: 50px;
  background-color: rgba(220, 000, 000, 0.7);
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  font-weight: 600;
}
.pokedex{
  position: relative;
  bottom: 110px;
  transition: opacity 0.8s ease-in-out;
}
&:hover{
  p{
    opacity: 1;
    transition: opacity 0.8s ease-in-out;
  }
}
@media only screen and (max-width: 1236px){
  grid-column: span 3 !important;
  grid-row: span 2 !important;
  
}
@media only screen and (max-width: 768px){

  grid-column: span 3 !important;
  grid-row: span 2 !important;
  grid-row-gap: wrap;
  margin: 0 20px;
}
`;

export const ShowcaseBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
min-width: 1236px !important;
background-image: linear-gradient(to right, #01674a, #01664a, #016549, #016549, #016448);
a{
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: white;
}
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: linear-gradient(to right, #01674a, #01664a, #016549, #016549, #016448);
}
h1{
  font-family: "Poppins", sans-serif;
  font-size: 70px;
  align-self: center;
  justify-self: center;
  color: #00B1FF;
}

padding-bottom: 20px;
@media only screen and (max-width: 1236px){
  min-width: 100% !important;

 
}
@media only screen and (max-width: 768px){
  min-width: 100% !important;
  
}
`
;