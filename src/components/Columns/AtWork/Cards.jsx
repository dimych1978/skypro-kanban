import CardContent from "../../Cards/CardContent";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__item">
        <div className="cards__card card">
          <div className="card__group">
            <div className="card__theme _green">
              <p className="_green">Research</p>
            </div>
            <a href="#popBrowse" target="_self">
              <div className="card__btn">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </a>
          </div>
          <CardContent />{" "}
        </div>
      </div>

      <div className="cards__item">
        <div className="cards__card card">
          <div className="card__group">
            <div className="card__theme _purple">
              <p className="_purple">Copywriting</p>
            </div>
            <a href="#popBrowse" target="_self">
              <div className="card__btn">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </a>
          </div>
          <CardContent />{" "}
        </div>
      </div>

      <div className="cards__item">
        <div className="cards__card card">
          <div className="card__group">
            <div className="card__theme _orange">
              <p className="_orange">Web Design</p>
            </div>
            <a href="#popBrowse" target="_self">
              <div className="card__btn">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </a>
          </div>
          <CardContent />{" "}
        </div>
      </div>
    </div>
  );
};

export default Cards;
