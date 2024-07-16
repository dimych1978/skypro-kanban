import { LogoDark, LogoLight } from './Logo';
import Nav from './Nav';
import * as S from './Header.styled';
import { Container as SContainer } from '../Main.styled';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/themeContext';

const Header = () => {
  const [isLight] = useContext(ThemeContext);
  return (
    <S.Header>
      <SContainer>
        <S.HeaderBlock>
          {isLight ? <LogoLight /> : <LogoDark />}
          <Nav />
        </S.HeaderBlock>
      </SContainer>
    </S.Header>
  );
};
export default Header;
