import { Links, NotFoundStyle } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <NotFoundStyle>Страница не существует...</NotFoundStyle>
      <Links to={'/login'}>Вход</Links>
      <br />
      <Links to={'/registry'}>Регистрация</Links>
    </>
  );
};

export default NotFound;
