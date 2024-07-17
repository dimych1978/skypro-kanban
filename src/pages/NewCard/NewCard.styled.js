import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormArea } from '../CardPage/CardPage.styled';
import { hover01 } from '../../Common.styled';

export const NewCard = styled.div`
  position: absolute;
  z-index: 6;
  top: 0;
  left: 0;

  width: 100%;
  min-width: 375px;
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
  position: relative;

  display: block;

  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  padding: 40px 30px 48px;

  background-color: ${({ theme }) => theme.bgCard};
  border: 0.7px solid ${({ theme }) => theme.border};
  border-radius: 10px;
`;

export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const Ttl = styled.h3`
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.text};
`;

export const StyledLink = styled(Link)`
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 30px;

  color: #94a6be;

  &:hover {
    color: #000;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: block;
  width: 100%;
  max-width: 370px;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelForm = styled.label`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Area = styled(FormArea)`
  background-color: ${({ theme }) => theme.bgCard};
  color: ${({ theme }) => theme.text};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 14px;
  margin: 20px 0;

  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  background: transparent;
  border: 0.7px solid rgb(148 166 190 / 40%);
  border-radius: 8px;
  outline: none;

  color: ${({ theme }) => theme.text};

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const CategoriesTheme = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

export const BtnCreate = styled.button`
  float: right;

  width: 132px;
  height: 30px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #fff;

  background-color: #565eef;
  border: 0;
  border-radius: 4px;
  outline: none;

  ${hover01}
`;
