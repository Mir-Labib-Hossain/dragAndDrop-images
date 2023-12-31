import styled from "styled-components";

export const Card = styled.div`
  border-radius: 8px;
  border: 2px dashed ${({ theme }) => theme.secondaryBg};
  background-color: ${({ theme }) => theme.addBtnBg};
  aspect-ratio: 1 / 1;

  /* padding: 100%; */
  
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100%;
  }
`;
