import styled from "styled-components"

export const AboutComponentBox = styled.div`

display: flex;
flex-direction: row;
justify-content: space-around;
width: 98vw;

background-image: linear-gradient(to right, #6441a5, #56328b, #472473, #39165b, #2a0845);
font-family: 'Poppins', sans-serif;

.imgBox{

    img{
        padding: 100px 50px 100px 100px;
        /* transform: scale(3); */
        filter: saturate(100%)
        opacity(1);
        border-radius: 130px;
        
    }
}
.informationBox{
display: flex;
flex-direction: column;

h1{
    color: #C2F8CB;
    font-size: 70px;
    padding: 50px 0 0 0;
    margin: 0;
    span{
        font-size: 50px;
    }
}
h2{
    color: #C2F8CB;
    font-size: 50px;
    padding: 0;
    margin: 0 0 30px 0;
    span{
        color: #0EB1D2;
        font-size: 70px;
        padding: 0;
    }
}

p{
    color: #95B8D1;
    font-size: 20px;
    text-justify: justify;
    text-align: justify;
    padding-right: 40px;
    span{
        color: #FEF7FF;
    }
}

hr{
    background-color: #0061A7;
    color: #751754;
    height: 2px;
    width: 95%;
    border: none;
}
}
.gridBox{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    white-space: wrap;
    p{
    color: #E8D5B5;
    font-size: 24px;

    span{
        color: #B872EA;
    }
}

}
.gridColumnOne{
    display: flex;
    flex-direction: column;

}
.gridColumnTwo{
    display: flex;
    flex-direction: column;
}
@media only screen and (max-width: 1260px){
    flex-direction: column;
    .imgBox{
        display: flex;
        align-items: center;
        
        justify-content: center;

        img{
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
    }
    .informationBox{
        padding-left: 20px;
        padding-right: 20px;
    }
}
@media only screen and (max-width: 768px){

    flex-direction: column-reverse;
    
    .imgBox{
        img{
            width: 300px;
            object-fit: contain;
            padding: 100px 20px 50px 20px;
            border-radius: 20%;
        }
    }
    .informationBox{
        padding-left: 20px;
        padding-right: 20px;
    
        .gridBox{
            flex-direction: column;
            padding-left: 20px;
        padding-right: 20px;
        }

    }
}
`
