import styled from 'styled-components';

export const Columns = styled.div`
  display: flex;
  width: 100%;

  @media screen and (width <= 1200px) {
    display: block;
  }
`;
