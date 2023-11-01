import styled from "styled-components";

export const Card = styled.div`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.secondaryBg};
  background-color: ${({ theme }) => theme.addBtnBg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 150px;
  width: 150px;
  margin: 10px;
  float: left;
  //// Just for mobile
  @media only screen and (max-width: calc(400px)) {
    float: none;
  }
`;
