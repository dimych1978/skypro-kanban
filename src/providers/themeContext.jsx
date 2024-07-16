import { createContext, useState } from 'react';

export const ThemeContext = createContext({ isLight: true });

const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeContext.Provider value={[isLight, setIsLight]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
