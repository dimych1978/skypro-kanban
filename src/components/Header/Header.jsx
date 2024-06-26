import { LogoDark, LogoLight } from './Logo';
import Nav from './Nav';
import * as S from './Header.styled';
import { Container as SContainer } from '../Main.styled';

const Header = ({ isLight, setIsLight }) => {
  const handleTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <S.Header>
      <SContainer>
        <S.HeaderBlock>
          <LogoLight />
          <LogoDark />
          <Nav isLight={isLight} setIsLight={handleTheme} />
        </S.HeaderBlock>
      </SContainer>
    </S.Header>
  );
};
export default Header;
