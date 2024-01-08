import styled from "styled-components";


export const ProjectDetailBox = styled.div`
display: flex;
flex-direction: column;
background-image: linear-gradient(to left, #aa076b, #980369, #860267, #730363, #61045f);
color: #C2FCF4;
font-family: 'Poppins', sans-serif;


    .heroPhoto{
        height: 90vh;
        width: 100%;
        overflow: hidden;
        position: relative;
        /* img{
            height: 90vh;
            width: 98vw;
            object-fit: cover;
        }   */      
    
        transform-origin: bottom;
        top: 0;
    }

    .infoDiv{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding-left: 80px;
        margin-top: 30px;
        height: 100%;
        h1{
            font-size: 50px;
            color: #DB98B5;
        }
        h2{
            font-size: 30px;
            text-align: justify;
        }

        p{
            font-size: 20px;
        }
        div{
            display: flex;
        flex-direction: column;
        padding: 20px;

        }
        .subtextDiv{
        width: 75vw;
        margin-top: 15px;
        margin-bottom: 15px;
            p{
                font-size: 27px;
                text-align: justify;
            }
        }
     

        .infoEnd{
            width: 45vw;
            margin-top: 45px;
            p{
                padding: 0;
                margin: 0;
                font-size: 22px;
            }
            a{
                text-decoration: none;               
                color: #DB98B5;                
                font-family: 'Poppins', sans-serif;
            }
            svg{
                font-size: 30px
            }
        }
    }
    .bodyDiv{
        display: flex;
        flex-direction: row;
        padding-right: 80px;
        margin-top: 20px;
        img{
            
            width: 65vw;
            padding-left: 80px;
            object-fit: cover;
        }

        p{
            font-size: 25px;
            text-align: justify;
            margin-left: 35px;
        }
        .pBottom{
            padding-left: 50px;
        }
    }

    .carosselDiv{
        display: flex;
        flex-direction: row;
        .carousel{
        
            .slide {
                display: none;  
                transition: opacity 0.5s ease-in-out;
            }
            .slide.active {
            display: flex; /* ou o valor apropriado para exibição */
  
                    
            }
            img{
                width: 65vw;
                padding-left: 80px;
                object-fit: cover;
                margin-bottom: 50px;
            }
        }
        p{
            font-size: 24px;
            text-align: justify;
            margin-left: 35px;
            padding-right: 80px;
        }
    }

    .links{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        a{
            display: flex;
            text-decoration: none;
            color: #C2FCF4;
            font-size: 40px;
            align-items: center;
            &:hover{
              color:  #DB98B5
            }
        }
        svg{
            font-size: 50px;
            align-items: center;
        }
    }
    @media only screen and (max-width: 1236px){
        .heroPhoto{
            height: 60vh;
        }
        .infoDiv{
            flex-direction: column;
            padding: 0 20px 0 20px;
        }
        .bodyDiv{
            flex-direction: column;
            padding: 0 20px 0 20px !important;
            img{
                width: 100%;
                padding: 0 !important;
            }
            p{
                margin-left: 0px;
            }
            p.pBottom{
                padding-left: 0px !important;
                margin: 0px !important;
            }    
        }
        .carosselDiv{
            flex-direction: column;
            padding: 0 20px 0 20px;

            .carousel .slide.active img{
                width: 100% !important;
                padding-left: 0px !important;
            }
            p{
                margin-left: 20px;
                padding-right: 20px; 
                margin-bottom: 60px;
            }
        }
    }
    @media only screen and (max-width: 768px){
        .heroPhoto{
            display: none;
        }
        .infoDiv{
            flex-direction: column;
            padding: 0 20px 0 20px;
        }
        .bodyDiv{
            flex-direction: column;
            padding-left: 20px !important;
            padding: 0 20px 0 20px !important;
            img{
                width: 100%;
                padding: 0 !important;
            }
        p{
            margin-left: 0px;
        }
        p.pBottom{
            padding-left: 0px !important;
            margin: 0px !important;
        }
        }
        .carosselDiv{
            flex-direction: column;
            padding: 0 20px 0 20px;

            img{
                width: 75vw !important;
                padding-left: 0px !important;
                padding: 0 20px !important;
                object-fit: contain !important;
                margin-bottom: 50px !important;
            }
            p{
                margin-left: 20px;
                padding-right: 20px; 
                margin-bottom: 60px;
            }
        }

        .links{
            a{
            
            font-size: 20px;
            }
            svg{
            font-size: 20px;
            ;
        }
        }
    }
`