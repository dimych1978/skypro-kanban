import styled from 'styled-components';
import { hover01, hover02, hover03 } from '../../Common.styled';

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

export const PopUserHeader = styled.div`
  position: absolute;
  z-index: 2;
  top: 61px;
  right: 0;

  display: block;

  width: 213px;
  height: 205px;
  padding: 34px;

  text-align: center;

  background: #fff;
  border: 0.7px solid rgb(148 166 190 / 40%);
  border-radius: 10px;
  box-shadow: 0 10px 39px 0 rgb(26 56 101 / 21%);
`;

export const PopUserName = styled.p`
  margin-bottom: 4px;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #000;
  letter-spacing: -0.14px;
`;

export const PopUserMail = styled.p`
  margin-bottom: 10px;

  font-size: 14px;
  line-height: 21px;
  color: #94a6be;
  letter-spacing: -0.14px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    font-size: 14px;
    line-height: 21px;
    color: #000;
    letter-spacing: -0.14px;
  }

  input[type='checkbox'] {
    position: relative;

    width: 24px;
    height: 13px;

    appearance: none;
    background: #eaeef6;
    border-radius: 100px;
    outline: none;
  }

  input[type='checkbox']::before {
    content: '';

    position: absolute;
    top: 1px;
    left: 1px;

    width: 11px;
    height: 11px;

    background-color: #94a6be;
    border-radius: 50%;

    transition: 0.5s;
  }

  input:checked[type='checkbox']::before {
    left: 12px;
  }
`;

export const BntExit = styled.button`
  width: 72px;
  height: 30px;

  color: #565eef;

  background: transparent;
  border: 1px solid #565eef;
  border-radius: 4px;

  ${hover03} {
    color: #565eef;
  }
`;
