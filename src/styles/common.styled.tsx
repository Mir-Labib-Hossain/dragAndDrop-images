//
//// theme button
//

import styled from "styled-components";

export const ThemeToggler = styled.div`
  position: absolute;
  right: 0;
  top: 180px;
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;
  border-radius: 50% 0 0 50%;
  width: 30px;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.primaryText};
    -webkit-animation-name: out;
    animation-name: out;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;

    &:hover,
    &:active {
      -webkit-animation-name: in;
      animation-name: in;
    }

    @keyframes in {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes out {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }

    @-webkit-keyframes in {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes out {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
  }
`;
