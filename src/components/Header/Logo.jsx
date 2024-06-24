import { Link } from 'react-router-dom';
import * as S from './Logo.styled';

export const LogoDark = () => {
  return (
    <S.LogoDark>
      <Link to={'/'} target="_self">
        <img src="images/logo_dark.png" alt="logo" />
      </Link>
    </S.LogoDark>
  );
};

export const LogoLight = () => {
  return (
    <S.LogoLight>
      <Link to={'/'} target="_self">
        <img src="/img/logo.png" alt="logo" />
      </Link>
    </S.LogoLight>
  );
};
