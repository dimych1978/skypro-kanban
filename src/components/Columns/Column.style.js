import styled from 'styled-components';

export const MainColumn = styled.div`
  display: block;
  width: 20%;
  margin: 0 auto;

  @media screen and (width <= 1200px) {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ColumnTitle = styled.div`
  margin: 15px 0;
  padding: 0 10px;

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    color: #94a6be;
    text-transform: uppercase;
  }
`;

export const Cards = styled.div`
  position: relative;
  display: block;
  width: 100%;

  @media screen and (width <= 1200px) {
    overflow-y: auto;
    display: flex;
    width: 100%;
  }
`;
