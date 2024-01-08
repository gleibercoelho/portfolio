import styled from "styled-components";

export const AboutBox = styled.div`

.master{
    
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    justify-content: center;
    align-items: start;
    
    height: 100vh;
    background-image: linear-gradient(to left bottom, #1f242d, #10252b, #092422, #122213, #211d00);
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    padding-top: 50px;
  
    
}

h1{
    font-size: 90px;
    color: greenyellow;
    align-self: center;
}
h2{
    font-size: 40px;    
    color: yellowgreen;
    
}

p{
    font-size: 20px;
    color: #0ef;
    font-weight: 600;
    padding: 0 30px 0 30px;    
    line-height: 2px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
   
}

.eight{
        align-self: end;
        padding-top: 280px;
        font-size: 10px;
        color: #1D4D60;
    }

svg{
    display: flex;
    flex-direction: row;
    font-size: 30px;
    line-height: 2px;
    text-align: left;
    align-items: center;
    padding: 0 8px 0 0;

}


.sec-1{

    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    justify-content: space-around;    
    width: 98vw;
    height: 100vh;
   .boxes{
        display: flex;
    flex-direction: column;
    justify-content: start;
    text-justify: left;
    align-items: left;

    }
 
}
@media only screen and (max-width: 1260px){

    .master{
        height: 100%;
    }
    .sec-1{
        height: 100%;
    }
    h1{
        font-size: 60px;      
    }
    h2{
        font-size: 30px;
        margin: 0;
        padding: 0;
        text-justify: center !important;
    }
    p{
        font-size: 20px;
        padding: 0;
        text-justify: center !important;
    }
    svg{
        font-size: 25px;
        padding: 0;
        text-justify: center !important;
    }
    

}
@media only screen and (max-width: 768px){
    justify-content: center !important;
    h1{
        font-size: 40px;
    }
    h2{
        font-size: 25px;
        margin: 20px 0;
        padding: 0;
        text-justify: center !important;
    }
    p{
        font-size: 15px;
        padding: 0;
        text-justify: center !important;
    }
    svg{
        font-size: 20px;
        padding: 0;
        text-justify: center !important;
    }
    .eight{
        padding: 0;
    }

    .master{
        flex-direction: column !important;
        justify-content: center !important;
        height: 100%;
    }
    .sec-1{
        flex-direction: column !important;
        justify-content: center !important;
        height: 100%;
        text-justify: center !important;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100vw;
        flex-wrap: wrap;
        white-space: wrap;
    }
    .sec-1.boxes{
        display: flex;
        justify-content: center !important;
        text-justify: center !important;
        align-items: center;        
        margin: 0;
        padding: 0;
        height: 100%;
    }
}


`