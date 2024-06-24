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

const NewCard = ({ onAddCard, isVisible }) => {
  // const ref = useRef();
  // const handleChange = (e) => {
  //   console.log(onChange);
  //   onChange(e.target.value);
  // };

  return (
    <S.NewCard id="popNewCard" style={{ display: isVisible }}>
      <S.Container>
        <S.Block>
          <S.Content>
            <S.Ttl>Создание задачи</S.Ttl>
            <S.StyledLink
              to={'/'}
              // className="pop-new-card__close"
              // onClick={handleVisible}
            >
              &#10006;
            </S.StyledLink>
            <S.Wrap>
              <S.Form id="formNewCard" action="#">
                <S.FormBlock>
                  <LabelForm htmlFor="formTitle">Название задачи</LabelForm>
                  <S.FormInput
                    // ref={ref}
                    // className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    // onChange={handleChange}
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
              {/* {/* <div className="categories__themes">
                <div className="categories__theme _orange _active-category"> */}
              {/* <p className="_orange">Web Design</p> */}
              {/* </div>
                <div className="categories__theme _green"> */}
              {/* <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>*/}
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
