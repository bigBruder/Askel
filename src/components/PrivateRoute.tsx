import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
type PrivateRouteProps = {
  component: ReactNode;
  redirectTo: string;
};
export const PrivateRoute: FC<PrivateRouteProps> = ({
  redirectTo,
  component,
}) => {
  //   const { isLoggedIn, isRefreshing } = useAuth();
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;
  const test = false;

  return test ? <Navigate to={redirectTo} /> : component;
};
