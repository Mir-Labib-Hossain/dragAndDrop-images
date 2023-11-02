import styled from "styled-components";

export const Card = styled.div<{ image: string }>`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.secondaryBg};
  background-image: url(${({ image }) => image});
  background-size: cover;
  padding: 10px;
`;
