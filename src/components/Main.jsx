import Columns from './Columns/Columns';

const Main = ({ cards }) => {
  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <Columns cards={cards} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
