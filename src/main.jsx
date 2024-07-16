import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from './AppRouters.jsx';
import { UserProvider } from './providers/userContext.jsx';
import { CardsProvider } from './providers/cardsContext.jsx';
import ThemeProvider from './providers/themeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <CardsProvider>
          <AppRouters />
        </CardsProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
