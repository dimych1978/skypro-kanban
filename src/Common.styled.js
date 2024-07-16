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
    border-color: #33399b;
  }
  &:hover a {
    color: #fff;
  }
`;

export const Orange = css`
  color: ${({ theme }) => theme.orangeColor};
  background-color: ${({ theme }) => theme.orangeBg};
`;

export const Green = css`
  color: ${({ theme }) => theme.greenColor};
  background-color: ${({ theme }) => theme.greenBg};
`;

export const Purple = css`
  color: ${({ theme }) => theme.purpleColor};
  background-color: ${({ theme }) => theme.purpleBg};
`;

export const Gray = css`
  color: ${({ theme }) => theme.greyColor};
  background-color: ${({ theme }) => theme.greyBg};
`;

export const ActiveCategory = css`
  opacity: 1 !important;
`;

export const Hide = css`
  display: none;
`;
