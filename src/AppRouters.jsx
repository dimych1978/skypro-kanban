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

const token = localStorage.getItem('token') || null;

const appRouters = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRY: '/registry',
  CARD: '/card/:cardId',
  NEWCARD: '/newcard',
  EXIT: '/exit',
};

const AppRouters = () => {
  const [cards, setCards] = useState('');
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    token &&
      getTasks(token)
        .then((data) => setCards(data.tasks))
        .catch((err) => {
          setIsError('Не удалось загрузить данные, попробуйте позже');
          console.log(err.message);
        });
  }, []);

  const onAddCard = async (taskName, topic) => {
    const newTask = {
      topic: topic,
      title: taskName,
      date: format(new Date(), 'MM.dd.yyyy'),
      status: 'Без статуса',
      description: 'Подробное описание задачи',
    };
    await addTask(token, newTask);
    getTasks(token).then((data) => setCards(data.tasks));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute token={token} />}>
          <Route
            path={appRouters.HOME}
            element={<Home cards={cards} isError={isError} />}
          >
            {/* {isError && (
              <Route element={} />
            )} */}
            <Route
              path={appRouters.CARD}
              element={
                <CardPage cardList={cards} token={token} setCards={setCards} />
              }
            ></Route>
            <Route
              path={appRouters.NEWCARD}
              element={<NewCard addCards={onAddCard} />}
            ></Route>
            <Route
              path={appRouters.EXIT}
              element={
                <Exit
                // setToken={setToken}
                />
              }
            ></Route>
          </Route>
        </Route>
        <Route
          path={appRouters.LOGIN}
          element={
            <Login
            // setToken={setToken}
            />
          }
        ></Route>
        <Route path={appRouters.REGISTRY} element={<Registry />}></Route>
        <Route path={'/*'} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
