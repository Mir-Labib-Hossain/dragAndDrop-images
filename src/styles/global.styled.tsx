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

    p, span, h2,button {
        color:  ${({ theme }) => theme.primaryText};
    }

    *{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    } 
    
    .dragged .item {
        opacity: 0.1;
    }
`;

export default GlobalStyle;
