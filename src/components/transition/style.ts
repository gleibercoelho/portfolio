import styled from "styled-components";

export const TRANSBOX = styled.div`

.stairs{
    .transition-container{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        border: none; 
        pointer-events: none;
        display: flex;
        z-index: 999;

        div{
            position: relative;
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none; 
            background-color: #000000;
            z-index: 999;
        }
    }
    .background{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;       
        z-index: 999;
        background-color: black;

    }
 }









.slide-in{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0f0f0f;
    transform-origin: bottom;
    z-index: 999;

}
.slide-out{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0f0f0f;
    transform-origin: top;
    z-index: 999;

}
`