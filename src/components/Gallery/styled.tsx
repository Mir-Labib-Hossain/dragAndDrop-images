import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  max-width: 1080px;
  width: calc(100% - 30px);
  margin: 30px auto;
  background-color: ${({ theme }) => theme.primaryBg};
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

  & p {
    color: ${({ theme }) => theme.error};
  }
`;

export const Body = styled.div`
  padding: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Creates 5 equal-width columns */
  gap: 1rem; /* Adjust the gap as needed */

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
