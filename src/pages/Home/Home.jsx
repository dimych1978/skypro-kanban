import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main';
import { dark, light } from '../../data';
import { Wrapper } from './Home.styled';
import { GlobalStyles } from '../../Global.styled';
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import IfError from '../../components/IfError/IfError';
import { useCardsContext } from '../../hooks/useCardsContext';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLight, setIsLight] = useState(true);
  const { cards, isError } = useCardsContext();

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
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              marginTop: '50vh',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1 style={{}}>...Данные загружаются</h1>
            <Spinner width="200px" height="200px" />
          </div>
        ) : (
          <>
            <Header isLight={isLight} setIsLight={setIsLight} />
            {isError && <IfError error={isError}>{isError}</IfError>}
            <Main cards={cards} />
            <Outlet />
          </>
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default Home;
