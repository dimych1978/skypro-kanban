// import { useRef } from 'react';
import Calendar from '/src/components/Calendar/Calendar';
import * as S from './NewCard.styled';
import {
  CategoriesTheme,
  FormArea,
  LabelForm,
  Subttl,
} from './CardPage.styled';
import { cardList, categoriesList } from '../data';
import { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const NewCard = () => {
  // const ref = useRef();
  const [cards, setCards] = useState(cardList);
  const [newTask, setNewTask] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const onAddCard = () => {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: 'Research',
        color: '_green',
        title: newTask,
        date: format(new Date(), 'dd.MM.yy'),
        status: 'Без статуса',
      },
    ]);
    navigate('/');
    console.log(cards);
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
                    // ref={ref}
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
                  ></FormArea>
                </S.FormBlock>
              </S.Form>
              <Calendar />
            </S.Wrap>
            <CategoriesTheme>
              <Subttl>Категория</Subttl>
              {categoriesList.map((theme) => (
                <CategoriesTheme key={theme} $theme={theme}>
                  {theme}
                </CategoriesTheme>
              ))}
            </CategoriesTheme>
            <S.BtnCreate id="btnCreate" onClick={onAddCard}>
              Создать задачу
            </S.BtnCreate>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.NewCard>
  );
};

export default NewCard;
