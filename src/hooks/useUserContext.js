import { useContext } from 'react';
import { UserContext } from '../providers/userContext';

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (!user) throw new Error('Пользователь не обнаружен');

  return user;
};
