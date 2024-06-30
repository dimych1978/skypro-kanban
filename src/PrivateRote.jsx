import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ token }) => {
  console.log(token);
  return token ? <Outlet /> : <Navigate to="/login" />;
};
