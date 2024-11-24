import { createContext, useState } from 'react';

export const PopUserContext = createContext();

export const PopUserProvider = ({ children }) => {
  const [popupUser, setPopupUser] = useState(false);

  return (
    <PopUserContext.Provider value={{ popupUser, setPopupUser }}>
      {children}
    </PopUserContext.Provider>
  );
};
