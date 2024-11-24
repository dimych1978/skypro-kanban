import { Link, useNavigate } from 'react-router-dom';
import * as S from './Exit.styled';
import { useContext } from 'react';
import { PopUserContext } from '../../providers/popUserContext';

const Exit = () => {
  const navigate = useNavigate();
  const { setPopupUser } = useContext(PopUserContext);

  const handleAuth = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleStay = () => {
    setPopupUser(false);
    navigate('/');
  };

  return (
    <S.Exit id="popExit">
      <S.Container>
        <S.Block>
          <S.Ttl>Выйти из аккаунта?</S.Ttl>
          <form id="formExit" action="#">
            <S.Group>
              <S.BtnYes id="exitYes" onClick={handleAuth}>
                <Link to="/login">Да, выйти</Link>
              </S.BtnYes>
              <S.BtnNo id="exitNo" onClick={handleStay}>
                <Link to={'/'}>Нет, остаться</Link>
              </S.BtnNo>
            </S.Group>
          </form>
        </S.Block>
      </S.Container>
    </S.Exit>
  );
};

export default Exit;
