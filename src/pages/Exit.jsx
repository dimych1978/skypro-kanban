import { Link } from 'react-router-dom';
import * as S from './Exit.styled';

const Exit = ({ handleAuth }) => {
  // const handleAuth = () => {
  //   isAuth(false);
  // };
  return (
    <S.Exit id="popExit">
      <S.Container>
        <S.Block>
          <S.Ttl>Выйти из аккаунта?</S.Ttl>
          <form id="formExit" action="#">
            <S.Group>
              <S.BtnYes id="exitYes" onClick={() => handleAuth(false)}>
                <Link to="/login">Да, выйти</Link>
              </S.BtnYes>
              <S.BtnNo id="exitNo">
                <Link to="/">Нет, остаться</Link>
              </S.BtnNo>
            </S.Group>
          </form>
        </S.Block>
      </S.Container>
    </S.Exit>
  );
};

export default Exit;
