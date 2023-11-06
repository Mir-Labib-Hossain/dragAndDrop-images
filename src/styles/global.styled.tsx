import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body{
        background-color:  ${({ theme }) => theme.secondaryBg};
    }

    svg{
        color:  ${({ theme }) => theme.primary};
    }
    /* a{
        text-decoration: none;
        cursor: pointer;
    } */

    p, span, h2,button {
        color:  ${({ theme }) => theme.primaryText};
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    } 

    
`;

export default GlobalStyle;
