import { statusList } from '../../data';
import { useCardsContext } from '../../hooks/useCardsContext';
import Column from './Column';
import { Columns as SColumns } from './Columns.styled';

const Columns = () => {
  const { cards } = useCardsContext();

  return (
    <SColumns>
      {cards &&
        statusList.map((status) => (
          <Column
            key={status}
            title={status}
            cardList={cards.filter((card) => card.status === status)}
          />
        ))}
    </SColumns>
  );
};

export default Columns;
