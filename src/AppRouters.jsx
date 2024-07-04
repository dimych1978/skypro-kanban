import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Registry from './pages/Registry/Registry';
import CardPage from './pages/CardPage/CardPage';
import Exit from './pages/Exit/Exit';
import Home from './pages/Home/Home';
import NewCard from './pages/NewCard/NewCard';
import { PrivateRoute } from './PrivateRote';
import { useEffect, useState } from 'react';
import { getTasks } from './api/api';
import { useUserContext } from './hooks/useUserContext';

const appRouters = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRY: '/registry',
  CARD: '/card/:cardId',
  NEWCARD: '/newcard',
  EXIT: '/exit',
};

const AppRouters = () => {
  const { user } = useUserContext();
  const [cards, setCards] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    // user.token &&
    try {
      getTasks(user.token)
        .then((data) => setCards(data.tasks))
        .catch((err) => {
          if (err.message === 'Failed to fetch')
            setIsError('Не удалось загрузить данные, попробуйте позже');
          setIsError(err.message);
          console.error(err.message);
        });
    } catch (error) {
      console.warn(error.message);
    }
  }, [user.token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute token={user?.token} />}>
          <Route
            path={appRouters.HOME}
            element={<Home cards={cards} isError={isError} />}
          >
            <Route
              path={appRouters.CARD}
              element={
                <CardPage
                  cardList={cards}
                  token={user?.token}
                  setCards={setCards}
                />
              }
            ></Route>
            <Route
              path={appRouters.NEWCARD}
              element={<NewCard setCards={setCards} />}
            ></Route>
            <Route path={appRouters.EXIT} element={<Exit />}></Route>
          </Route>
        </Route>
        <Route path={appRouters.LOGIN} element={<Login />}></Route>
        <Route path={appRouters.REGISTRY} element={<Registry />}></Route>
        <Route path={'/*'} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
