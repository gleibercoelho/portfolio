import styled from "styled-components";

interface YourComponentProps {
  isOpen?: boolean;
}

export const HeaderBoxCV = styled.div<YourComponentProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: #9296F0;
  font-family: 'Poppins', sans-serif;
  width: 98vw;

  .CV{
    font-size: 30px;
  }
  h1{
    font-size: 30px;
    padding-left: 20px;
  }

 a svg{
    font-size: 25px;
    color: #0EB1D2;
    display: flex;
    align-items: center;
    font-size: 70px;   
    
  }

  a{
    text-decoration: none;
    font-size: 100px;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: #C2F8CB
  }
  a p{
    text-decoration: none;
    font-size: 30px;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: #C2F8CB;
    padding-right: 20px
  }


  color: #9296F0;

  .toast-menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: ${(props) => (props.isOpen ? "0" : "-100%")};
    left: 50%;
    transform: translate(-50%, 0%);
    background-image: linear-gradient(to right bottom, #ff0000, #c60019, #8c001c, #530616, #210003);
    opacity: 0.98;
    z-index: 5;
    transition: top 1.0s ease-in-out;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
 

  .toast-menu.active {
    transition: top 0.5s ease-in-out;
    top: 0;
  }

  .toast-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 100px;
  }

  .fade-in {
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    font-size:0;
    color: transparent;
  }

  .fade-in.show {
    opacity: 1;
    font-size:0;
    color: #E4F68D;
    
    
  }
  .fade-in.show.svg{
    position: relative;
    left: 45%;
    font-size: 40px;
    transition: opacity 0s;
    color: #E4F68D;
  }

  .left-align {
    text-align: left;
  }

  .toast-menu li {
    display: flex;
    justify-content: flex-start; /* Alinhe à esquerda */
    padding: 10px;
    margin-top: 0px;
    font-size: 100px;
    font-weight: 900;
    color: white;
    cursor: pointer;
    padding-left: 35%;    
    align-items: center;
  }

  .button{
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    font-size: 0;
  }

  button.svg{
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    font-size: 0;
  }
  .button.show {
    position: relative;
    font-size: 40px !important;
    color: #E4F68D;
    left: 3%;
    bottom: 70px;
    margin-top: 10px;
    padding: 10px;    
    cursor: pointer;   
    opacity: 1;
    transition: opacity 0s
  }

  @media only screen and (max-width: 768px){

    h1{
      font-size: 15px;
    }
    h2{
      font-size: 15px;
    }
    .menu-icon svg{
      width: 20px;
      display: flex;
    }
    .CV{
    width: 20px;
    }
    a p {
      font-size: 15px;
    }
    .toast-menu{
      left: 50%;
      width: 100%;
      height: 100%;
      svg{
        font-size: 20px;
    }
    li a{
      font-size: 40px;
      color: white;
    }
    li{
      padding-left: 25%
    }
    
  }
  .toast-menu.active .button.show{
    padding-left: 70px;
  }
  .fade-in.show.svg{
    padding-right: 70px;
  }
}
`;

// No seu componente React, você pode usar a classe left-align assim:
// <ul className="toast-menu left-align">
//    ...
// </ul>
