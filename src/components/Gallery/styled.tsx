import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  max-width: 1080px;
  margin: 30px auto;
  background-color: ${({ theme }) => theme.primaryBg};
  //
  //// ⚠️ NB: I calculated width each time just for more readability & understanding, for production purpose, I will manually calculate & write the result directly without using 'calc()'
  //
  //// ✨ Here comes the magic of responsiveness of floating i just created
  //// Here we just subtracted width each card:
  //
  @media only screen and (max-width: 1080px) {
    width: calc(1080px - 150px - 20px); //// currentWidth - imageCardWidth - imageCardLeftRightMargin = newWidth
  }
  @media only screen and (max-width: calc(1080px - 150px - 20px)) {
    width: calc(1080px - 300px - 40px); //// currentWidth - (imageCardWidth * 2) - (imageCardLeftRightMargin * 2) = newWidth
  }
  @media only screen and (max-width: calc(1080px - 300px - 40px)) {
    width: calc(1080px - 450px - 60px);
  }
  @media only screen and (max-width: calc(1080px - 450px - 60px)) {
    width: calc(1080px - 600px - 80px);
  }
  //// this is our smallest width -  for mobile we will use '%'
  //// calc(1080px - 600px - 80px) = 400px
  @media only screen and (max-width: calc(400px)) {
    width: 90%;
  }
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
  overflow: hidden;
  //// Just for mobile
  @media only screen and (max-width: calc(400px)) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
