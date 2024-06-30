import CardItem from '/src/components/Cards/CardItem/CardItem';
import * as S from './Column.style';

const Column = ({ title, cardList }) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map((card) => (
          <CardItem
            key={card._id}
            topic={card.topic}
            title={card.title}
            color={card.color}
            date={card.date}
            id={card._id}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
};

export default Column;
