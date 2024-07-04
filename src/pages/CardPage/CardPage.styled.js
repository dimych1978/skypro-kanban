import styled, { css } from 'styled-components';
import {
  ActiveCategory,
  Gray,
  Green,
  Hide,
  Orange,
  Purple,
  hover01,
  hover03,
} from '../../Common.styled';

export const PopBrows = styled.div`
  position: absolute;
  z-index: 7;
  top: 0;
  left: 0;

  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const Block = styled.div`
  position: relative;

  display: block;

  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  padding: 40px 30px 38px;

  background-color: #fff;
  border: 0.7px solid #d4dbe5;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Ttl = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;

  width: auto;
  height: 30px;
  margin-right: 7px;
  padding: 8px 20px;

  opacity: 0.4;
  border-radius: 24px;

  ${({ $active }) => $active && ActiveCategory}

  ${({ $theme }) => $theme === 'Web Design' && Orange}
   ${({ $theme }) => $theme === 'Copywriting' && Purple}
   ${({ $theme }) => $theme === 'Research' && Green}
p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;

    ${({ $theme }) => $theme === 'Web Design' && Orange}
    ${({ $theme }) => $theme === 'Copywriting' && Purple}
   ${({ $theme }) => $theme === 'Research' && Green}
  }
`;

export const ThemeTop = styled(CategoriesTheme)`
  display: block;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

const StatusP = styled.p`
  margin-bottom: 14px;
`;

export const Subttl = styled(StatusP)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #000;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  margin-right: 7px;
  margin-bottom: 7px;
  padding: 11px 14px 10px;

  color: #94a6be;

  border: 0.7px solid rgb(148 166 190 / 40%);
  border-radius: 24px;

  ${({ $visible }) => ($visible ? Gray : Hide)}

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
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

export const LabelForm = styled.label(Subttl);

export const FormArea = styled.textarea`
  width: 100%;
  max-width: 370px;
  height: 200px;
  margin-top: 14px;
  padding: 14px;

  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  background: #eaeef6;
  border: 0.7px solid rgb(148 166 190 / 40%);
  border-radius: 8px;
  outline: none;

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const ThemeDown = styled(CategoriesTheme)`
  display: none;
  margin-bottom: 20px;
`;

export const Btn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BtnGroup = styled(Btn)`
  margin-right: 8px;
`;

const BtnBor = css`
  color: #565eef;

  background: transparent;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  border-radius: 4px;
  outline: none;

  a {
    color: #565eef;
    text-decoration: none;
  }
`;

const BtnBg = css`
  color: #fff;

  background: #565eef;
  border: none;
  border-radius: 4px;
  outline: none;

  margin-right: 8px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  color: #565eef;
  ${hover03}
  ${BtnBg}
  ${BtnBor}
`;

export const BtnClose = styled.button`
  color: #94a6be;
  ${hover01}
  ${BtnBg}
`;
