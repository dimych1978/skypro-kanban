import { Link, useNavigate, useParams } from 'react-router-dom';
import { statusList } from '../../data';
import Calendar from '/src/components/Calendar/CalendarFix';
import * as S from './CardPage.styled';
import { deleteTask } from '../../api/api';
import { useLoading } from '../../hooks/useLoading';
import { Spinner } from '../../components/Spinner';
import { useCardsContext } from '../../hooks/useCardsContext';
import { useUserContext } from '../../hooks/useUserContext';
import { useState } from 'react';
import IfError from '../../components/IfError/IfError';

const CardPage = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const { cards, updateCards } = useCardsContext();

  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useLoading();

  let { cardId } = useParams();
  const card = cards.find((item) => item._id === cardId);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const tasks = await deleteTask(user.token, card._id);
      updateCards(tasks.tasks);

      navigate('/');
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.PopBrows id="popBrowse">
      <S.Container>
        <S.Block>
          <S.Content>
            <S.TopBlock>
              <S.Ttl>Название задачи: {card.title}</S.Ttl>
              <S.ThemeTop $theme={card.topic} $active="active">
                <p>{card.topic}</p>
              </S.ThemeTop>
            </S.TopBlock>
            <S.Status>
              <S.Subttl>Статус</S.Subttl>
              <S.StatusThemes>
                {statusList.map((status) => (
                  <S.StatusTheme key={status} $visible={card.status === status}>
                    <p>{status}</p>
                  </S.StatusTheme>
                ))}
              </S.StatusThemes>
            </S.Status>
            <S.Wrap>
              <S.Form id="formBrowseCard" action="#">
                <S.FormBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                    value={card.description}
                  ></S.FormArea>
                </S.FormBlock>
              </S.Form>
              <Calendar selectDate={card.date} />
            </S.Wrap>
            <S.ThemeDown>
              <S.Subttl>Категория</S.Subttl>
              <S.ThemeTop $theme={card.topic}>
                <p>{card.topic}</p>
              </S.ThemeTop>
            </S.ThemeDown>
            <S.Btn>
              {isError && <IfError error={isError} />}
              <S.BtnGroup>
                <S.Button>
                  <Link to={`/edit/${card._id}`}>Редактировать задачу</Link>
                </S.Button>
                <div style={{ display: 'flex', float: 'right' }}>
                  <S.Button onClick={handleDelete}>Удалить задачу</S.Button>
                  <Spinner display={isLoading ? 'inline' : 'none'} />
                </div>
              </S.BtnGroup>
              <S.BtnClose>
                <Link to="/">Закрыть</Link>
              </S.BtnClose>
            </S.Btn>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.PopBrows>
  );
};

export default CardPage;
