import styled from "styled-components";


export const Container = styled.div`
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
