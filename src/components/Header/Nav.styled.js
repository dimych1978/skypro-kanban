import styled from 'styled-components';
import { hover01, hover02 } from '/src/Common.styled';

export const Button = styled.button`
  width: 178px;
  height: 30px;
  margin-right: 20px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: red;

  background-color: #565eef;
  border: none;
  border-radius: 4px;

  ${hover01}

  a {
    color: #fff;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 290px;
  padding: 0;
`;

export const HeaderUser = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  height: 20px;

  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  &::after {
    content: '';

    transform: rotate(-45deg);
    display: block;
    width: 6px;
    height: 6px;
    margin: -6px 0 0 5px;
    padding: 0;
    border-bottom: 1.9px solid #565eef;
    border-left: 1.9px solid #565eef;
    border-radius: 1px;
  }
  ${hover02}
`;
