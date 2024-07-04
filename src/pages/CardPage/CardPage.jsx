import { Link, useNavigate, useParams } from 'react-router-dom';
import { statusList } from '../../data';
import Calendar from '/src/components/Calendar/Calendar';
import * as S from './CardPage.styled';
import { deleteTask, getTasks } from '../../api/api';
import { useLoading } from '../../hooks/useLoading';
import { Spinner } from '../../components/Spinner';

const CardPage = ({ cardList, token, setCards }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useLoading();

  let { cardId } = useParams();
  const card = cardList.find((item) => item._id === cardId);

  const handleDelete = async () => {
    setIsLoading(true);
    await deleteTask(token, card._id);
    await getTasks(token).then((data) => setCards(data.tasks));
    setIsLoading(false);
    navigate('/');
  };

  return (
    <S.PopBrows id="popBrowse">
      <S.Container>
        <S.Block>
          <S.Content>
            <S.TopBlock>
              <S.Ttl>Название задачи {cardId}</S.Ttl>
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
                  <S.LabelForm htmlFor="textArea01">
                    Описание задачи
                  </S.LabelForm>
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
              <S.ThemeTop $theme={card.topic}>
                <p>{card.topic}</p>
              </S.ThemeTop>
            </S.ThemeDown>
            <S.Btn>
              <S.BtnGroup>
                <S.Button>
                  <Link to="#">Редактировать задачу</Link>
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
