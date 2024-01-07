import styled from "styled-components"

export const ContactComponentBox = styled.div`
    display:flex;
    flex-direction:column;
    font-family: "Poppins", "sans-serif";
    background-image: linear-gradient(to left bottom, #6b004b, #520935, #390d23, #220b14, #000000);
    color: #00C9AB;

    --toastify-color-success: #00C9AB;
    --toastify-icon-color-success:#00C9AB;
    --toastify-toast-background: #6b004b;
    
    h1{
        
        align-self: center;
        font-size: 45px;
        color: #FFE4FC;
        margin-bottom: 20px;
    }

    .MapNFormBox{
        display:flex;
        flex-direction:row;
        justify-content: space-around;
}
    .FormBox{
        display:flex;
        flex-direction:column;        
        width: 40%;
        

        h2{
        font-size: 30px;
        font-weight: 500;
        margin-left: 30px;
        }

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding-left: 20px;      
    input{
        font-family: "Poppins", "sans-serif";
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 30px;
        height: 35px;
        margin: 5px;
        width: 520px;    
        border: none;
        outline: none;  
        border-radius: 5px;
        color: #00C9AB;
        background-color: #54424B;
        padding-left: 20px;
        padding-right: 20px;
    }
    textarea{
        font-family: "Poppins", "sans-serif";
        width: 520px;
        margin: 5px;
        height: 300px;
        font-size: 30px;
        border: none;
        outline: none;
        resize: none;
        overflow-y: auto;
        border-radius: 5px;
        color: #00C9AB;
        background-color: #54424B;
        padding-left: 20px;
        padding-right: 20px;
    }

    button{
        font-family: "Poppins", "sans-serif";
        font-size:30px;
        margin: 5px;
        width: 560px !important;
        border-radius: 5px;
        cursor: pointer;
        background-color: #00C9AB;
        color: #54424B;
    }
    ::placeholder{
        
        font-family: "Poppins", "sans-serif";
        color: #A2407C;
      }
    }
}
    .MapBox{
        display:flex;
        flex-direction:column;
        p{
            font-size: 30px;
        }

        
}
    .ContactWayBox{
        display: flex;
        flex-direction: row !important;
        justify-content: space-around;
        margin-top: 30px;
        span{
           color: #FFE4FC;
        }
        svg{
            color: #A2407C;
        }
        a{
            text-decoration: none;
        }

    .SubContactOne{
        display: flex;
        flex-direction: column;
        font-size: 25px;
        justify-content: space-evenly;

        .zapzap{
            color:  #37c638;
            font-size: 30px;
            padding: 0 15px 0 15px;
        }
    }
    .SubContactTwo{
        display: flex;
        flex-direction: column;
        font-size: 25px;
    }
}
@media only screen and (max-width: 1260px){
    .MapNFormBox{
        flex-direction: column;
        align-items: center;
    }
    .FormBox{
        width: 100%;
        align-items: center;
        }
        .ContactWayBox{
            padding-left: 20px;
            padding-right: 20px;
        }
 }


@media only screen and (max-width: 768px){

    .MapNFormBox{
        flex-direction: column;
    }

    .FormBox{
        width: 85%;
        h2{
           
            align-self: center;
        }
        form{

            input{
                width: 290px;
            }
            textarea{
                width: 290px;
            }
            button{
                width: 330px !important;
            }
        }
    }
        .MapBox{
            
            p{
            width: 300px !important;
            font-size: 25px;
            white-space: wrap !important;
            align-self: center;
            }
            span{
                width: 300px !important;
            font-size: 25px;
                white-space: wrap !important; 
                align-self: center;
            }          
        }
        .ContactWayBox{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap; 
           padding-left: 20px;
           padding-right: 20px;
            
            p{
                font-size: 20px;
            }
            .SubContactOne{
            flex-wrap: wrap;  

            }
            
        }
}

`;