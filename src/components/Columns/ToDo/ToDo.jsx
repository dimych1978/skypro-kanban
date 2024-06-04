import CardItem from "/src/components/Cards/CardItem/CardItem";

const ToDo = () => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Нужно сделать</p>
      </div>
      <div className="cards">
        <CardItem />
      </div>
    </div>
  );
};

export default ToDo;
