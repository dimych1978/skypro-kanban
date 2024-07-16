import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgCard};
`;
export const HeaderBlock = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  padding: 0 10px;
`;
