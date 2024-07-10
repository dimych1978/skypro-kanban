import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../Home/Home.styled';
import * as S from '../Login/Login.styled';
import { GlobalStyles } from '/src/Global.styled';
import { registryUser } from '/src/api/api';
import { useState } from 'react';
import IfError from '/src/components/IfError/IfError';
import { useLoading } from '/src/hooks/useLoading';
import { Spinner } from '/src/components/Spinner';

const Registry = () => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useLoading();

  const [user, setUser] = useState({
    name: '',
    login: '',
    password: '',
  });

  const handleChange = (e) => {
    setIsError(null);

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegistry = async () => {
    setIsError(null);
    setIsLoading(true);

    try {
      for (const key in user) {
        if (!user[key]) throw new Error('Заполните все поля ввода');
      }

      await registryUser(user);
      navigate('/login');
    } catch (error) {
      setIsError(error.message);
      console.warn(error.message);
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
                <h2>Регистрация</h2>
              </S.Ttl>
              <S.LoginForm id="formLogUP">
                <S.Input
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  onChange={handleChange}
                />
                <S.Input
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  onChange={handleChange}
                />
                <S.Input
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  onChange={handleChange}
                />
                {isError && <IfError error={isError} />}
                <S.Button id="SignUpEnter" onClick={handleRegistry}>
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
    </>
  );
};

export default Registry;
