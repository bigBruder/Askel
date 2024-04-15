import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import RootLayout from "./components/Layouts/RootLayout";

function App() {
  const DashBoardPage = lazy(() => import("./pages/DashBoardPage"));
  const SignUpPage = lazy(() => import("./pages/SignUpPage"));
  const SignInPage = lazy(() => import("./pages/SignInPage"));
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<DashBoardPage />}
              />
            }
          />
        </Route>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/signin" component={<DashBoardPage />} />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/" component={<SignInPage />} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
