import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import PopBrows from "./components/Popups/PopBrows/PopBrows";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import PopUser from "./components/Popups/PopUser/PopUser";
import { cardList } from "./data";
import { format } from "date-fns";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(cardList);
  const [isVisible, setIsVisible] = useState("none");
  const [newTask, setNewTask] = useState();

  const whileLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000),
      [];
  };

  useEffect(() => window.addEventListener("load", whileLoading()), []);

  const onAddCard = () => {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: "Research",
        color: "_green",
        title: newTask,
        date: format(new Date(), "dd.MM.yy"),
        status: "Без статуса",
      },
    ]);
    setIsVisible("none");
  };

  const handleVisible = () => {
    isVisible === "none" ? setIsVisible("block") : setIsVisible("none");
  };

  const handleChange = (newTask) => {
    setNewTask(newTask);
  };

  return (
    <div className="wrapper">
      {isLoading ? (
        <h1 style={{ textAlign: "center", marginTop: "50vh" }}>
          ...Данные загружаются
        </h1>
      ) : (
        <>
          {/* <!-- pop-up start--> */}
          <PopUser />
          <PopNewCard
            onAddCard={onAddCard}
            isVisible={isVisible}
            onChange={handleChange}
            onVisible={handleVisible}
          />
          <PopBrows />
          {/* <!-- pop-up end--> */}
          <Header onVisible={handleVisible} />
          <Main cards={cards} />
        </>
      )}
    </div>
  );
}

export default App;
