import { createContext, useEffect, useState } from 'react';
import { getTasks } from '../api/api';
import { useUserContext } from '../hooks/useUserContext';

export const CardsContext = createContext([]);

export const CardsProvider = ({ children }) => {
  const [isError, setIsError] = useState(null);

  const [cards, setCards] = useState([]);
  const { user } = useUserContext();

  const updateCards = (newCards) => {
    setCards(newCards);
  };

  useEffect(() => {
    try {
      user &&
        getTasks(user.token)
          .then((data) => {
            setCards(data.tasks);
          })
          .catch((err) => {
            if (err.message === 'Failed to fetch')
              setIsError('Не удалось загрузить данные, попробуйте позже');
            console.error(isError);
          });
    } catch (error) {
      console.warn(error.message);
    }
  }, [user, isError]);

  useEffect(() => {
    updateCards(cards);
  }, [cards]);

  return (
    <CardsContext.Provider value={{ cards, updateCards, isError }}>
      {children}
    </CardsContext.Provider>
  );
};
