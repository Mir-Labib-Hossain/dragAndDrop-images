import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    * {
        margin: 0;
        padding: 0;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    /* a{
        text-decoration: none;
        cursor: pointer;
    } */

    p, span, h1, * {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    } 

    
`;

export default GlobalStyle;
