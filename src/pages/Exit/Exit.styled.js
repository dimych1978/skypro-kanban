import styled from 'styled-components';
import { hover01, hover03 } from '../../Common.styled';

export const Exit = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;

  width: 100%;
  min-width: 320px;
  height: 100%;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;

  background-color: ${({ theme }) => theme.bg};
  background: rgba(0, 0, 0, ${({ theme }) => theme.opacity});
`;

export const Block = styled.div`
  display: block;

  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 50px 60px;

  background-color: ${({ theme }) => theme.bgCard};
  border: 0.7px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  box-shadow: 0 4px 67px -12px rgb(0 0 0 / 13%);
`;

export const Ttl = styled.h2`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.4px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BtnYes = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 153px;
  height: 30px;
  margin-right: 10px;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #fff;
  letter-spacing: -0.14px;

  background-color: #565eef;
  border: none;
  border-radius: 4px;
  outline: none;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    color: #fff;
  }

  ${hover01}
`;

export const BtnNo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 153px;
  height: 30px;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;

  background-color: transparent;
  border: 0.7px solid ${({ theme }) => theme.btnBg};
  border-radius: 4px;
  outline: none;

  ${hover03}

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    color: #565eef;
    color: ${({ theme }) => theme.btnText};
  }
`;
