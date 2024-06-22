import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Registry from './pages/Registry';
import CardPage from './pages/CardPage';

const appRouters = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRY: '/registry',
  CARD: '/card/:cardId',
  EXIT: '/exit',
};

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRouters.HOME} element={<App />}></Route>
        <Route path={appRouters.LOGIN} element={<Login />}></Route>
        <Route path={appRouters.REGISTRY} element={<Registry />}></Route>
        <Route path={appRouters.CARD} element={<CardPage />}></Route>
        <Route path={'/*'} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
