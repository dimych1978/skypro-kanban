import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main';
import { dark, light } from '../data';
import { Wrapper } from './Home.styled';
import { GlobalStyles } from '../Global.styled';
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';

function Home({ cards }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
            <Header isLight={isLight} setIsLight={setIsLight} />
            <Main cards={cards} />
            <Outlet />
          </>
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default Home;
