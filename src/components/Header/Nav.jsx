import { useContext, useEffect, useRef } from 'react';
import * as S from './Nav.styled';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import { ThemeContext } from '../../providers/themeContext';
import { PopUserContext } from '../../providers/popUserContext';

const PopupUser = () => {
  const { user } = useUserContext();
  const [isLight, setIsLight] = useContext(ThemeContext);
  const ref = useRef();

  const handleTheme = () => {
    setIsLight(!isLight);
  };

  useEffect(() => {
    if (!isLight) ref.current.checked = true;
  }, [isLight]);

  return (
    <S.PopUserHeader id="user-set-target">
      <S.PopUserName>{user.name}</S.PopUserName>
      <S.PopUserMail>{user.login}</S.PopUserMail>
      <S.PopUserTheme>
        <p>Темная тема</p>
        <input
          ref={ref}
          type="checkbox"
          className="checkbox"
          name="checkbox"
          onClick={handleTheme}
        />
      </S.PopUserTheme>
      <S.BntExit>
        <Link to="/exit">Выйти</Link>
      </S.BntExit>
    </S.PopUserHeader>
  );
};

const Nav = () => {
  const { popupUser, setPopupUser } = useContext(PopUserContext);
  const { user } = useUserContext();

  const handleUser = () => {
    setPopupUser(!popupUser);
  };

  return (
    <S.Nav>
      <S.Button id="btnMainNew">
        <Link to={'/newcard'}>Создать новую задачу</Link>
      </S.Button>
      <S.HeaderUser onClick={handleUser}>{user.name}</S.HeaderUser>
      {popupUser && <PopupUser />}
    </S.Nav>
  );
};

export default Nav;
