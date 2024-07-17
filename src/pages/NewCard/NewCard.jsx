import Calendar from '../../components/Calendar/CalendarDayPicker';
import * as S from './NewCard.styled';
import { CategoriesTheme, Subttl } from '../CardPage/CardPage.styled';
import { categoriesList } from '../../data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../hooks/useLoading';
import { Spinner } from '../../components/Spinner';
import IfError from '../../components/IfError/IfError';
import { addTask, getTasks } from '../../api/api';
import { useUserContext } from '../../hooks/useUserContext';
import { useCardsContext } from '../../hooks/useCardsContext';

const NewCard = () => {
  const navigate = useNavigate();
  const { updateCards } = useCardsContext();

  const { user } = useUserContext();
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useLoading();

  const [newTask, setNewTask] = useState({ name: '', text: '' });
  const [date, setDate] = useState(new Date());
  const [topic, setTopic] = useState('Web Design');

  const handleDate = (date) => {
    setDate(date);
  };

  const handleChange = (e) => {
    setIsError(null);
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const changeTheme = (theme) => {
    setTopic(theme);
  };

  const onAddCard = async ({ name, text }, topic) => {
    const newTask = {
      topic: topic,
      title: name,
      date: new Date(date),
      status: 'Без статуса',
      description: text,
    };
    if (!name || !text) throw new Error('Укажите название и описание задачи');

    await addTask(user.token, newTask);
    getTasks(user.token).then((data) => updateCards(data.tasks));
  };

  const handleCreate = async () => {
    try {
      setIsLoading(true);
      await onAddCard(newTask, topic);
      navigate('/');
    } catch (error) {
      setIsError(error.message);
      console.warn(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <S.NewCard id="popNewCard">
      <S.Container>
        <S.Block>
          <S.Content>
            <S.Ttl>Создание задачи</S.Ttl>
            <S.StyledLink to={'/'}>&#10006;</S.StyledLink>
            <S.Wrap>
              <S.Form id="formNewCard" action="#">
                <S.FormBlock>
                  <S.LabelForm htmlFor="formTitle">Название задачи</S.LabelForm>
                  <S.FormInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    onChange={handleChange}
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.LabelForm htmlFor="textArea" className="subttl">
                    Описание задачи
                  </S.LabelForm>
                  <S.Area
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={handleChange}
                  ></S.Area>
                </S.FormBlock>
              </S.Form>
              <Calendar selectDate={handleDate} thisDate={new Date()} />
            </S.Wrap>
            <S.CategoriesTheme>
              <Subttl>Категория</Subttl>
              {categoriesList.map((theme) => {
                return (
                  <CategoriesTheme
                    key={theme}
                    $theme={theme}
                    $active={theme === topic}
                    onClick={() => changeTheme(theme)}
                  >
                    <p>{theme}</p>
                  </CategoriesTheme>
                );
              })}
            </S.CategoriesTheme>
            <div style={{ display: 'flex', float: 'right' }}>
              {isError && <IfError error={isError} />}
              <S.BtnCreate id="btnCreate" onClick={handleCreate}>
                Создать задачу
              </S.BtnCreate>
              <Spinner display={isLoading ? 'inline' : 'none'} />
            </div>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.NewCard>
  );
};

export default NewCard;
