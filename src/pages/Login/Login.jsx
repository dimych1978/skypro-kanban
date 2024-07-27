import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../Home/Home.styled';
import * as S from './Login.styled';
import { GlobalStyles } from '../../Global.styled';
import { useContext, useRef, useState } from 'react';
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

  const [isError, setIsError] = useState({ err: null, unavailable: false });
  const [borderLogin, setBorderLogin] = useState(false);
  const [borderPass, setBorderPass] = useState(false);
  const [isLoading, setIsLoading] = useLoading();

  const [user, setUser] = useState({ login: '', password: '' });

  const loginRef = useRef();
  const passRef = useRef();

  const handleChange = (e) => {
    setIsError({ err: null, unavailable: false });
    borderLogin === true &&
      setBorderLogin(loginRef.current.value === '' && true);
    borderPass === true && setBorderPass(passRef.current.value === '' && true);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      for (const key in user) {
        if (!user[key].trim()) throw new Error('Заполните все поля ввода');
      }

      const response = await loginUser(user);
      if (response) {
        await updateUser(response.user);
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate('/');
      }
    } catch (error) {
      console.warn(error.message);
      if (error.message === 'Заполните все поля ввода') {
        setIsError({
          err: error.message,
          unavailable: true,
        });
        setBorderLogin(user.login.trim() === '' && true);
        setBorderPass(user.password.trim() === '' && true);
        return;
      }

      setIsError({ err: error.message, unavailable: true });
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
                  ref={loginRef}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  $isErr={borderLogin}
                  onChange={handleChange}
                />
                <S.Input
                  ref={passRef}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  $isErr={borderPass}
                  onChange={handleChange}
                />
                {isError.err && <IfError error={isError.err} />}
                <S.Button
                  id="btnEnter"
                  type="submit"
                  onClick={handleClick}
                  disabled={isError.unavailable}
                >
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
