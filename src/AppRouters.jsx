import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Registry from './pages/Registry';
import CardPage from './pages/CardPage';
import Exit from './pages/Exit';
import Home from './pages/Home';
import NewCard from './pages/NewCard';
import { PrivateRoute } from './PrivateRote';
import { useState } from 'react';
import { cardList } from './data';
import { format } from 'date-fns/format';

const appRouters = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRY: '/registry',
  CARD: '/card/:cardId',
  NEWCARD: '/newcard',
  EXIT: '/exit',
};

const AppRouters = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [cards, setCards] = useState(cardList);

  const onAddCard = (newTask) => {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: 'Research',
        color: '_green',
        title: newTask,
        date: format(new Date(), 'dd.MM.yy'),
        status: 'Без статуса',
      },
    ]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={appRouters.HOME} element={<Home cards={cards} />}>
            <Route path={appRouters.CARD} element={<CardPage />}></Route>
            <Route
              path={appRouters.NEWCARD}
              element={<NewCard addCards={onAddCard} />}
            ></Route>
            <Route
              path={appRouters.EXIT}
              element={<Exit handleAuth={setIsAuth} />}
            ></Route>
          </Route>
        </Route>
        <Route
          path={appRouters.LOGIN}
          element={<Login handleAuth={setIsAuth} />}
        ></Route>
        <Route path={appRouters.REGISTRY} element={<Registry />}></Route>
        <Route path={'/*'} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
