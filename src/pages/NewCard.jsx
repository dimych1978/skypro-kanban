// import { useRef } from 'react';
import Calendar from '/src/components/Calendar/Calendar';
import * as S from './NewCard.styled';
import {
  CategoriesTheme,
  FormArea,
  LabelForm,
  Subttl,
} from './CardPage.styled';
import { categoriesList } from '../data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../hooks/useLoading';
import { Spinner } from '../components/Spinner';
import IfError from '../components/IfError/IfError';

const NewCard = ({ addCards }) => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useLoading();

  const [newTask, setNewTask] = useState({ name: '', text: '' });
  const [topic, setTopic] = useState('Web Design');

  const handleChange = (e) => {
    console.log(e.target);
    setIsError(null);
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const changeTheme = (theme) => {
    setTopic(theme);
  };

  const handleCreate = async () => {
    try {
      setIsLoading(true);
      console.log(newTask);
      await addCards(newTask, topic);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsError(error.message);
      console.warn(isError, error.message);
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
                  <LabelForm htmlFor="formTitle">Название задачи</LabelForm>
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
                  <LabelForm htmlFor="textArea" className="subttl">
                    Описание задачи
                  </LabelForm>
                  <FormArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={handleChange}
                  ></FormArea>
                </S.FormBlock>
              </S.Form>
              <Calendar />
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
