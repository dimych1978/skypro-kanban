import CardItem from "/src/components/Cards/CardItem/CardItem";

const AtWork = () => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>В работе</p>
        <div className="cards">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
};

export default AtWork;
