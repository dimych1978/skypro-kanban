import { Link } from 'react-router-dom';
import { Wrapper } from './Home.styled';
import * as S from './Login.styled';

const Registry = () => {
  return (
    <Wrapper>
      <S.Container>
        <S.Modal>
          <S.Block>
            <S.Ttl>
              <h2>Регистрация</h2>
            </S.Ttl>
            <S.LoginForm id="formLogUP" action="#">
              <S.Input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.Input
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.Input
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.Button id="SignUpEnter">
                <a href="../main.html">Зарегистрироваться</a>
              </S.Button>
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
  );
};

export default Registry;
