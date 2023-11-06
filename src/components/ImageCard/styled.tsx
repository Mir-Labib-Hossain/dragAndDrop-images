import styled from "styled-components";

export const Card = styled.div<{ image: string; selected?: boolean }>`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.secondaryBg};
  background-image: url(${({ image }) => image});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px;
  transition: 0.5s ease-in-out;

  svg {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    opacity: ${({ selected }) => (selected ? 1 : 0)}; // used 'opacity' instead of 'display' for better animation
    background-color: #fff;
    border-radius: 4px;
  }

  &:hover {
    background-size: 110%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ image }) => image});

    svg {
      opacity: 1;
    }
  }
`;
