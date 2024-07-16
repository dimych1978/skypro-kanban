import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../Home/Home.styled';
import * as S from './Login.styled';
import { GlobalStyles } from '../../Global.styled';
import { useContext, useState } from 'react';
import IfError from '../../components/IfError/IfError';
import { loginUser } from '../../api/api';
import { useLoading } from '../../hooks/useLoading';
import { Spinner } from '../../components/Spinner';
import { useUserContext } from '../../hooks/useUserContext';
import { ThemeContext } from '../../providers/themeContext';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '/src/data';

const Login = () => {
  const navigate = useNavigate();
  const { updateUser } = useUserContext();
  const [isLight] = useContext(ThemeContext);

  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useLoading();

  const [user, setUser] = useState({ login: '', password: '' });

  const handleChange = (e) => {
    setIsError(null);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    setIsError(null);
    setIsLoading(true);

    try {
      for (const key in user) {
        if (!user[key].trim()) throw new Error('Заполните все поля ввода');
      }
      const response = await loginUser(user);
      updateUser(response.user);
      localStorage.setItem('user', JSON.stringify(response.user));
      navigate('/');
    } catch (error) {
      console.warn(error);
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={isLight ? light : dark}>
      <GlobalStyles />
      <Wrapper>
        <S.Container>
          <S.Modal>
            <S.Block>
              <S.Ttl>
                <h2>Вход</h2>
              </S.Ttl>
              <S.LoginForm id="formLogIn" action="#">
                <S.Input
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  onChange={handleChange}
                />
                <S.Input
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  onChange={handleChange}
                />
                {isError && <IfError error={isError} />}
                <S.Button id="btnEnter" onClick={handleClick}>
                  <p>Войти</p>
                </S.Button>
                <Spinner display={isLoading ? 'inline' : 'none'} />
                <S.Group>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={'/registry'}>Регистрируйтесь здесь</Link>
                </S.Group>
              </S.LoginForm>
            </S.Block>
          </S.Modal>
        </S.Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Login;
