import { statusList } from "../../data";
import Column from "./Column";

const Columns = ({ cards }) => {
  return (
    <div className="main__content">
      {statusList.map(status => (
        <Column
          key={status}
          title={status}
          cardList={cards.filter(card => card.status === status)}
        />
      ))}
    </div>
  );
};

export default Columns;
