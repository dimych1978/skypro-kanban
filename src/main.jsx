import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from './AppRouters.jsx';
import { UserProvider } from './providers/userContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <AppRouters />
    </UserProvider>
  </React.StrictMode>,
);
