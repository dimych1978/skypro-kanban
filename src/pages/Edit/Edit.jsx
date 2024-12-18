import { Link, useNavigate, useParams } from 'react-router-dom';
import { statusList } from '../../data';
import Calendar from '/src/components/Calendar/CalendarDayPicker';
import * as S from './Edit.styled';
import { deleteTask, editTask } from '../../api/api';
import { useLoading } from '../../hooks/useLoading';
import { Spinner } from '../../components/Spinner';
import { useCardsContext } from '../../hooks/useCardsContext';
import { useUserContext } from '../../hooks/useUserContext';
import { useState } from 'react';
import IfError from '../../components/IfError/IfError';

const Edit = () => {
  const navigate = useNavigate();

  const { user } = useUserContext();

  const { cards, updateCards } = useCardsContext();

  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useLoading();

  let { cardId } = useParams();
  const card = cards.find((item) => item._id === cardId);

  const [newStatus, setNewStatus] = useState(card.status);

  const [date, setDate] = useState(new Date(card.date));

  const [newDescription, setNewDescription] = useState(card.description);

  const handleDate = (date) => {
    setDate(date);
  };

  const handleChange = (e) => {
    setIsError(null);
    setNewDescription(e.target.value);
  };

  const changeStatus = (status) => {
    setNewStatus(status);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const changedTask = {
        title: card.title,
        topic: card.topic,
        date: new Date(date),
        status: newStatus,
        description: newDescription,
      };

      if (newDescription.trim() === '')
        throw new Error('Описание задачи должно содержать какой-то текст');

      const tasks = await editTask(user.token, cardId, changedTask);
      await updateCards(tasks.tasks);

      navigate('/');
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteTask(user.token, card._id);
      navigate('/');
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.PopBrows>
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
                  <S.StatusTheme
                    key={status}
                    $visible={newStatus === status}
                    onClick={() => changeStatus(status)}
                  >
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
                    placeholder="Введите описание задачи..."
                    defaultValue={card.description}
                    onChange={handleChange}
                  ></S.FormArea>
                </S.FormBlock>
              </S.Form>
              <Calendar selectDate={handleDate} thisDate={card.date} />
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
                <S.Button onClick={handleSave}>Сохранить</S.Button>
                <S.Button onClick={() => navigate(`/card/${card._id}`)}>
                  Отменить
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

export default Edit;
