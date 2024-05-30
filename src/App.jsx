import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import PopBrows from "./components/Popups/PopBrows/PopBrows";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import PopUser from "./components/Popups/PopUser/PopUser";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* <!-- pop-up start--> */}
        <PopUser />
        <PopNewCard />
        <PopBrows />
        {/* <!-- pop-up end--> */}
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
