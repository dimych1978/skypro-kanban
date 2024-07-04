import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundStyle = styled.h1`
  color: red;
  text-align: center;
  margin-top: 50vh;
`;

export const Links = styled(Link)`
  display: block;
  text-align: center;
  color: gray;
  font-size: 20px;
  &:hover {
    color: blue;
    text-decoration: none;
  }
`;
