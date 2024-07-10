import styled from 'styled-components';
import { Green, Orange, Purple } from '../../../Common.styled';
import { Link } from 'react-router-dom';

export const Item = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;

  width: 220px;
  height: 130px;
  padding: 15px 13px 19px;

  background-color: #fff;
  border-radius: 10px;

  @media screen and (width <= 1200px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;

    width: 220px;
    height: 130px;
    padding: 15px 13px 19px;

    background-color: #fff;
    border-radius: 10px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 20px;
  margin-bottom: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  height: 64px;
`;

export const Theme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  ${(props) => props.$theme === 'Web Design' && Orange}
  ${(props) => props.$theme === 'Research' && Green}
  ${(props) => props.$theme === 'Copywriting' && Purple}

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000;
`;

export const CardBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 24px;
  height: 24px;
  padding: 2px;
  div {
    width: 4px;
    height: 4px;
    background-color: #94a6be;
    border-radius: 50%;
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    width: 13px;
  }
  p {
    margin-left: 6px;

    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
