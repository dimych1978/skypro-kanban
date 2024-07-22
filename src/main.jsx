import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from './AppRouters.jsx';
import { UserProvider } from './providers/userContext.jsx';
import { CardsProvider } from './providers/cardsContext.jsx';
import ThemeProvider from './providers/themeContext.jsx';
import { PopUserProvider } from './providers/popUserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <CardsProvider>
          <PopUserProvider>
            <AppRouters />
          </PopUserProvider>
        </CardsProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
