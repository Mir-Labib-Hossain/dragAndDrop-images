import styled from "styled-components";

export const Card = styled.div<{ large?: boolean }>`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.secondaryBg};
  height: ${({ large }) => (large ? "320px" : "150px")};
  width: ${({ large }) => (large ? "320px" : "150px")};
  margin: 10px;
  float: left;
  //// Just for mobile
  @media only screen and (max-width: calc(400px)) {
    float: none;
  }
`;
