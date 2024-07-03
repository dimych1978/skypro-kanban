import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Registry from './pages/Registry';
import CardPage from './pages/CardPage';
import Exit from './pages/Exit';
import Home from './pages/Home';
import NewCard from './pages/NewCard';
import { PrivateRoute } from './PrivateRote';
import { useEffect, useState } from 'react';
import { format } from 'date-fns/format';
import { addTask, getTasks } from './api/api';
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

  console.log(cards);

  useEffect(() => {
    try {
      getTasks(user.token)
        .then((data) => {
          setIsError(null);
          return setCards(data.tasks);
        })
        .catch((err) => {
          setIsError('Не удалось загрузить данные, попробуйте позже');
          console.error(err.message);
        });
    } catch (err) {
      console.log(err.message);
    }
  }, [user]);

  const onAddCard = async ({ name, text }, topic) => {
    console.log(name, text);
    const newTask = {
      topic: topic,
      title: name,
      date: format(new Date(), 'MM.dd.yyyy'),
      status: 'Без статуса',
      description: text,
    };
    await addTask(user.token, newTask);
    getTasks(user.token).then((data) => setCards(data.tasks));
  };

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
              element={<NewCard addCards={onAddCard} />}
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
