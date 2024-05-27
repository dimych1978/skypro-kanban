import Cards from "./Cards";

const ToDo = () => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Нужно сделать</p>
      </div>
      <Cards />{" "}
    </div>
  );
};

export default ToDo;
