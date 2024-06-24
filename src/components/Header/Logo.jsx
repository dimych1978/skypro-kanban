import * as S from './Logo.styled';

export const LogoDark = () => {
  return (
    <div className="header__logo _dark">
      <a href="" target="_self">
        <img src="images/logo_dark.png" alt="logo" />
      </a>
    </div>
  );
};

export const LogoLight = () => {
  return (
    <S.LogoLight>
      <a href="" target="_self">
        <img src="/img/logo.png" alt="logo" />
      </a>
    </S.LogoLight>
  );
};
