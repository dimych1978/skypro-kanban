import Cards from "./Cards";

const WithoutStatus = () => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>Без статуса</p>
      </div>
      <Cards />
    </div>
  );
};

export default WithoutStatus;
