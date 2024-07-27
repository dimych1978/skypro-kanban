import { useContext } from 'react';
import { CardsContext } from '../providers/cardsContext';

export const useCardsContext = () => {
  const cards = useContext(CardsContext);

  return cards;
};
