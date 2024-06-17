import { css } from 'styled-components';

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-bottom-color: #33399b;
    border-left-color: #33399b;
  }
`;

export const hover03 = css`
  &:hover {
    color: #fff;
    background-color: #33399b;
  }
  a {
    color: #fff;
  }
`;

export const orange = css`
  color: #ff6d00;
  background-color: #ffe4c2;
`;

export const green = css`
  color: #06b16e;
  background-color: #b4fdd1;
`;

export const purple = css`
  color: #9a48f1;
  background-color: #e9d4ff;
`;

export const gray = css`
  color: #fff;
  background: #94a6be;
`;

export const activeCategory = css`
  opacity: 1 !important;
`;
