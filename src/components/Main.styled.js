import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (width <= 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;
`;
