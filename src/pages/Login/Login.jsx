import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../Home/Home.styled';
import * as S from './Login.styled';
import { GlobalStyles } from '../../Global.styled';
import { useState } from 'react';
import IfError from '../../components/IfError/IfError';
import { loginUser } from '../../api/api';
import { useLoading } from '../../hooks/useLoading';
import { Spinner } from '../../components/Spinner';

const Login = ({ setToken }) => {
  const navigate = useNavigate();

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
      const response = await loginUser(user);
      localStorage.setItem('user', JSON.stringify(response.user));
      setToken(response.user.token);
      navigate('/');
    } catch (error) {
      console.warn(error);
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
    </>
  );
};

export default Login;
