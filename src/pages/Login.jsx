import { Link } from 'react-router-dom';
import { Wrapper } from '../App.styled';
import * as S from './Login.styled';

const Login = () => {
  return (
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
              />
              <S.Input
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.Button id="btnEnter">
                <a href="../main.html">Войти</a>
              </S.Button>
              <S.Group>
                <p>Нужно зарегистрироваться?</p>
                <Link to={'/registry'}>Регистрируйтесь здесь</Link>
              </S.Group>
            </S.LoginForm>
          </S.Block>
        </S.Modal>
      </S.Container>
    </Wrapper>
  );
};

export default Login;
