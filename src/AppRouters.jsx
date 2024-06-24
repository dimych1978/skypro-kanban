import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Registry from './pages/Registry';
import CardPage from './pages/CardPage';
import Exit from './pages/Exit';
import Home from './pages/Home';
import NewCard from './pages/NewCard';

const appRouters = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRY: '/registry',
  CARD: '/card/:cardId',
  NEWCARD: '/newcard',
  EXIT: '/exit',
};

export const PrivateRoute = ({ isAuth }) => {
  return isAuth ? <Home /> : <Navigate to="/login" />;
};

const AppRouters = () => {
  const isAuth = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={appRouters.HOME} element={<Home />}></Route>
          <Route path={appRouters.CARD} element={<CardPage />}></Route>
          <Route path={appRouters.NEWCARD} element={<NewCard />}></Route>
          <Route path={appRouters.EXIT} element={<Exit />}></Route>
        </Route>
        <Route path={appRouters.LOGIN} element={<Login />}></Route>
        <Route path={appRouters.REGISTRY} element={<Registry />}></Route>
        <Route path={'/*'} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
