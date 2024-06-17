import { statusList } from '../../data';
import Column from './Column';
import { Columns as SColumns } from './Columns.styled';

const Columns = ({ cards }) => {
  return (
    <SColumns>
      {statusList.map((status) => (
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
