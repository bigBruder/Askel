import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";

const RootLayout: FC = () => {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader width="64" height="64" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
