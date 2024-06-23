import { Link, useParams } from 'react-router-dom';
import { cardList, statusList } from '../data';
import Calendar from '/src/components/Calendar/Calendar';
import * as S from './CardPage.styled';

const CardPage = () => {
  let { cardId } = useParams();
  const card = cardList.find((item) => item.id === +cardId);

  return (
    <S.PopBrows id="popBrowse">
      <S.Block>
        <S.Content>
          <S.TopBlock>
            <S.Ttl>Название задачи</S.Ttl>
            <S.ThemeTop $theme={card.theme}>
              <p>{card.theme}</p>
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
                <S.LabelForm htmlFor="textArea01">Описание задачи</S.LabelForm>
                <S.FormArea
                  name="text"
                  id="textArea01"
                  readOnly
                  placeholder="Введите описание задачи..."
                ></S.FormArea>
              </S.FormBlock>
            </S.Form>
            <Calendar />
          </S.Wrap>
          <S.ThemeDown>
            <S.Subttl>Категория</S.Subttl>
            <S.ThemeTop $theme={card.theme}>
              <p>{card.theme}</p>
            </S.ThemeTop>
          </S.ThemeDown>
          <S.Btn>
            <S.BtnGroup>
              <S.Button>
                <Link to="#">Редактировать задачу</Link>
              </S.Button>
              <S.Button>
                <Link to="#">Удалить задачу</Link>
              </S.Button>
            </S.BtnGroup>
            <S.BtnClose>
              <Link to="/">Закрыть</Link>
            </S.BtnClose>
          </S.Btn>
        </S.Content>
      </S.Block>
    </S.PopBrows>
  );
};

export default CardPage;
