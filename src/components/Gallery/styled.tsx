import styled from "styled-components";

export const Main = styled.div`
  border-radius: 8px;
  max-width: 1080px;
  width: calc(100% - 30px);
  margin: 30px auto;
  background-color: ${({ theme }) => theme.primaryBg};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  border-bottom: 2px solid ${({ theme }) => theme.secondaryBg};

  & h2 {
    font-weight: 600;
  }

  & svg {
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  color: ${({ theme }) => theme.error};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.error};
  padding: 5px 20px;
  border-radius: 8px;
  transition: 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.secondaryBg};

  & svg {
    color: ${({ theme }) => theme.error};
  }

  &:hover {
    color: ${({ theme }) => theme.primaryBg};
    background-color: ${({ theme }) => theme.error};

    & svg {
      color: ${({ theme }) => theme.primaryBg};
    }
  }

  &:active {
    border: none; // for clicked effect
  }
`;

export const GridContainer = styled.div`
  padding: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Creates 5 equal-width columns */
  gap: 1rem; /* Adjusting the gap as needed */

  & > div {
    aspect-ratio: 1 / 1;
  }

  //// style for large 'image-card'
  & > div:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr); /* Creates 4 equal-width columns */
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr); /* Creates 3 equal-width columns */
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr); /* Creates 2 equal-width columns */
  }
`;
