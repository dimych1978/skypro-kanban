import styled from 'styled-components';
import { hover01 } from '../../Common.styled';

export const Container = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bg};
  /* background: rgba(0, 0, 0, ${({ theme }) => theme.opacity}); */
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: #ffffff;
  }
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgCard};
  border: 0.7px solid ${({ theme }) => theme.border};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const Ttl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-bottom: 7px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgCard};

  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;

  &:first-child {
    margin-bottom: 7px;
  }

  &:not(:last-child) {
    margin-bottom: 7px;
  }

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${hover01}

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const Group = styled.div`
  text-align: center;

  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`;
