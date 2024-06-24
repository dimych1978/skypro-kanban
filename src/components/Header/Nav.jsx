import { useState } from 'react';
import PopNewCard from '../Popups/PopNewCard/PopNewCard';
import * as S from './Nav.styled';

const PopupUser = ({ isLight, setIsLight }) => {
  const handleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <div className="header__pop-user-set pop-user-set" id="user-set-target">
      {/* <!-- <a href="">x</a> --> */}
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input
          type="checkbox"
          className="checkbox"
          name="checkbox"
          onClick={handleTheme}
        />
      </div>
      <button type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  );
};

const Nav = ({ onVisible, isLight, setIsLight }) => {
  const [popupUser, setPopupUser] = useState(false);
  const [popupCard, setPopupCard] = useState(false);
  const handleUser = () => {
    setPopupUser(!popupUser);
  };

  const handleTheme = () => {
    setIsLight(isLight);
  };

  const handleNewTask = () => {
    setPopupCard(!popupCard);
  };

  return (
    <S.Nav>
      <S.Button id="btnMainNew" onClick={onVisible}>
        <a onClick={handleNewTask}>Создать новую задачу</a>
      </S.Button>
      {popupCard && <PopNewCard />}
      <S.HeaderUser onClick={handleUser}>Ivan Ivanov</S.HeaderUser>
      {popupUser && <PopupUser isLight={isLight} setIsLight={handleTheme} />}
    </S.Nav>
  );
};

export default Nav;
