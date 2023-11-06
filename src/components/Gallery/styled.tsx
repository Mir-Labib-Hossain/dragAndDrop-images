import styled from "styled-components";

export const Main = styled.div`
  border-radius: 8px;
  max-width: 1080px;
  width: calc(100% - 30px);
  margin: 30px auto;
  background-color: ${({ theme }) => theme.primaryBg};
`;

export const Github = styled.a`
  position: absolute;
  right: 0;
  bottom: 100px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryText};
  padding: 10px;
  border-radius: 20px 0 0 20px;
  z-index: 999999999;
  cursor: pointer;
  svg{
    color: ${({ theme }) => theme.primaryText};
  }
`

export const TypeToggler = styled.div`
  position: absolute;
  text-align: right;
  right: 0;
  top: 100px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryText};
  padding: 10px;
  border-radius: 20px 0 0 20px;
  z-index: 999999999;
  cursor: pointer;
  svg{
    color: ${({ theme }) => theme.primaryText};
  }
`;

export const Body = styled.div`
  position: relative;

  ///// placeholder container
  & > div:first-child {
    background-color: ${({ theme }) => theme.primaryBg};

    > div {
      border-radius: 8px;
      border: 2px solid ${({ theme }) => theme.secondaryBg};
    }
  }

  .grid-container {
    position: absolute;
    display: grid !important;
    width: 100%;
    grid-template-columns: repeat(5, 1fr); /* Creates 5 equal-width columns */
    gap: 1rem; /* Adjusting the gap as needed */
    padding: 30px;

    @media only screen and (max-width: 850px) {
      grid-template-columns: repeat(4, 1fr); /* Creates 4 equal-width columns */
    }
    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(3, 1fr); /* Creates 3 equal-width columns */
    }
    @media only screen and (max-width: 400px) {
      grid-template-columns: repeat(2, 1fr); /* Creates 2 equal-width columns */
    }

    // each image-card component
    & div {
      aspect-ratio: 1 / 1;
      cursor: grab;
    }

    // style for large 'image-card'
    & > div:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }

    // style for dragging-item
    .dragging {
      cursor: grabbing !important;
      box-shadow: 2px 20px 30px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }
  }
`;
