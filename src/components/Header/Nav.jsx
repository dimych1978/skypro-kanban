import { useState } from 'react';
import * as S from './Nav.styled';
import { Link } from 'react-router-dom';
import { user } from '../../data';

const PopupUser = ({ isLight, setIsLight }) => {
  const handleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <S.PopUserHeader id="user-set-target">
      <S.PopUserName>{user.name}</S.PopUserName>
      <S.PopUserMail>{user.login}</S.PopUserMail>
      <S.PopUserTheme>
        <p>Темная тема</p>
        <input
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

const Nav = ({ isLight, setIsLight }) => {
  const [popupUser, setPopupUser] = useState(false);
  const handleUser = () => {
    setPopupUser(!popupUser);
  };
  const handleTheme = () => {
    setIsLight(isLight);
  };

  return (
    <S.Nav>
      <S.Button id="btnMainNew">
        <Link to={'/newcard'}>Создать новую задачу</Link>
      </S.Button>
      <S.HeaderUser onClick={handleUser}>{user.name}</S.HeaderUser>
      {popupUser && <PopupUser isLight={isLight} setIsLight={handleTheme} />}
    </S.Nav>
  );
};

export default Nav;
