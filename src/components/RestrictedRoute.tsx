import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from 'hooks';
type PrivateRouteProps = {
  component: ReactNode;
  redirectTo: string;
};
export const RestrictedRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  //   const { isLoggedIn } = useAuth();
  const test = false;

  return test ? <Navigate to={redirectTo} /> : Component;
};
