import styled from "styled-components";

export const Card = styled.div<{ image: string; selected?: boolean }>`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.secondaryBg};
  background-image: url(${({ image }) => image});
  background-size: 100%;
  background-position: center;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  svg {
    transition: 0.3s ease-in-out;
    opacity: ${({ selected }) => (selected ? 1 : 0)}; // used 'opacity' instead of 'display' for better animation
  }

  &:hover {
    background-size: 110%;

    svg {
      opacity: 1;
    }
  }
`;
