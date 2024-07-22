import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../Home/Home.styled';
import * as S from '../Login/Login.styled';
import { GlobalStyles } from '/src/Global.styled';
import { registryUser } from '/src/api/api';
import { useContext, useRef, useState } from 'react';
import IfError from '/src/components/IfError/IfError';
import { useLoading } from '/src/hooks/useLoading';
import { Spinner } from '/src/components/Spinner';
import { light, dark } from '/src/data';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../providers/themeContext';

const Registry = () => {
  const navigate = useNavigate();
  const [isLight] = useContext(ThemeContext);

  const [isError, setIsError] = useState({ err: null, unavailable: false });
  const [borderLogin, setBorderLogin] = useState(false);
  const [borderPass, setBorderPass] = useState(false);
  const [borderName, setBorderName] = useState(false);
  const [isLoading, setIsLoading] = useLoading();

  const [user, setUser] = useState({
    name: '',
    login: '',
    password: '',
  });

  const loginRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();

  const handleChange = (e) => {
    setIsError({ err: null, unavailable: false });
    borderLogin === true &&
      setBorderLogin(loginRef.current.value === '' && true);
    borderPass === true && setBorderPass(passRef.current.value === '' && true);
    borderName === true && setBorderName(nameRef.current.value === '' && true);

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegistry = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      for (const key in user) {
        if (!user[key].trim()) throw new Error('Заполните все поля ввода');
      }

      await registryUser(user);
      navigate('/login');
    } catch (error) {
      console.warn(error.message);

      if (error.message === 'Заполните все поля ввода') {
        setIsError({
          err: error.message,
          unavailable: true,
        });
        setBorderLogin(user.login.trim() === '' && true);
        setBorderPass(user.password.trim() === '' && true);
        setBorderName(user.name.trim() === '' && true);
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
                <h2>Регистрация</h2>
              </S.Ttl>
              <S.LoginForm id="formLogUP">
                <S.Input
                  ref={nameRef}
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  $isErr={borderName}
                  onChange={handleChange}
                />
                <S.Input
                  ref={loginRef}
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  $isErr={borderLogin}
                  onChange={handleChange}
                />
                <S.Input
                  ref={passRef}
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  $isErr={borderPass}
                  onChange={handleChange}
                />
                {isError.err && <IfError error={isError.err} />}
                <S.Button
                  id="SignUpEnter"
                  onClick={handleRegistry}
                  disabled={isError.unavailable}
                >
                  {' '}
                  <p to="/login">Зарегистрироваться</p>
                </S.Button>
                <Spinner display={isLoading ? 'inline' : 'none'} />
                <S.Group>
                  <p>
                    Уже есть аккаунт? <Link to={'/login'}>Войдите здесь</Link>
                  </p>
                </S.Group>
              </S.LoginForm>
            </S.Block>
          </S.Modal>
        </S.Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Registry;
