import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from './AppRouters.jsx';
import { UserProvider } from './providers/userContext.jsx';
import { CardsProvider } from './providers/cardsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CardsProvider>
        <AppRouters />
      </CardsProvider>
    </UserProvider>
  </React.StrictMode>,
);
