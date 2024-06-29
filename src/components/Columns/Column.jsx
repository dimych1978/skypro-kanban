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
            key={card.id}
            theme={card.theme}
            title={card.title}
            color={card.color}
            date={card.date}
            id={card.id}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
};

export default Column;
