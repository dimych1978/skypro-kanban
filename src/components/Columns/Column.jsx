import CardItem from "/src/components/Cards/CardItem/CardItem";

const Column = ({ title, cardList }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map(card => (
          <CardItem
            key={card.id}
            theme={card.theme}
            title={card.title}
            color={card.color}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
