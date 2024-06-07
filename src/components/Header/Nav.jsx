import { useState } from 'react';
import PopNewCard from '../Popups/PopNewCard/PopNewCard';

const PopupUser = () => {
  return (
    <div className="header__pop-user-set pop-user-set" id="user-set-target">
      {/* <!-- <a href="">x</a> --> */}
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <button type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  );
};

const Nav = ({ onVisible }) => {
  const [popupUser, setPopupUser] = useState(false);
  const [popupCard, setPopupCard] = useState(false);
  const handleUser = () => {
    setPopupUser(!popupUser);
  };

  const handleNewTask = () => {
    setPopupCard(!popupCard);
  };

  return (
    <nav className="header__nav">
      <button
        className="header__btn-main-new _hover01"
        id="btnMainNew"
        onClick={onVisible}
      >
        <a onClick={handleNewTask}>Создать новую задачу</a>
      </button>
      {popupCard && <PopNewCard />}
      <a onClick={handleUser} className="header__user _hover02">
        Ivan Ivanov
      </a>
      {popupUser && <PopupUser />}
    </nav>
  );
};

export default Nav;
