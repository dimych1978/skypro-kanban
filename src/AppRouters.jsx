import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Registry from './pages/Registry/Registry';
import CardPage from './pages/CardPage/CardPage';
import Exit from './pages/Exit/Exit';
import Home from './pages/Home/Home';
import NewCard from './pages/NewCard/NewCard';
import { PrivateRoute } from './PrivateRote';
import { useUserContext } from './hooks/useUserContext';
import Edit from './pages/Edit/Edit';

const appRouters = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRY: '/registry',
  CARD: '/card/:cardId',
  EDIT: '/edit/:cardId',
  NEWCARD: '/newcard',
  EXIT: '/exit',
};

const AppRouters = () => {
  const { user } = useUserContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute token={user?.token} />}>
          <Route path={appRouters.HOME} element={<Home />}>
            <Route path={appRouters.CARD} element={<CardPage />}></Route>
            <Route path={appRouters.EDIT} element={<Edit />}></Route>
            <Route path={appRouters.NEWCARD} element={<NewCard />}></Route>
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
