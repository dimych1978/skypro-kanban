import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main';
import PopBrows from './components/Popups/PopBrows/PopBrows';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard';
import PopUser from './components/Popups/PopUser/PopUser';
import { cardList, dark, light } from './data';
import { format } from 'date-fns';
import { Wrapper } from './App.styled';
import { GlobalStyles } from './Global.styled';
import { ThemeProvider } from 'styled-components';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLight, setIsLight] = useState(true);
  const [cards, setCards] = useState(cardList);
  const [isVisible, setIsVisible] = useState('none');
  const [newTask, setNewTask] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const onAddCard = () => {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: 'Research',
        color: '_green',
        title: newTask,
        date: format(new Date(), 'dd.MM.yy'),
        status: 'Без статуса',
      },
    ]);
    setIsVisible('none');
  };

  const handleVisible = () => {
    isVisible === 'none' ? setIsVisible('block') : setIsVisible('none');
  };

  const handleChange = (newTask) => {
    setNewTask(newTask);
  };

  return (
    <ThemeProvider theme={isLight ? light : dark}>
      <GlobalStyles />
      <Wrapper>
        {isLoading ? (
          <h1 style={{ textAlign: 'center', marginTop: '50vh' }}>
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
            <Header
              onVisible={handleVisible}
              isLight={isLight}
              setIsLight={setIsLight}
            />
            <Main cards={cards} />
          </>
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
