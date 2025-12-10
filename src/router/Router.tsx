import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { ProtectedRoute } from "../components/protected-route/ProtectedRoute";
import { routes } from "./routes";

export const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={<Layout />}>
          {route.isAuth ? (
            <Route
              element={<ProtectedRoute>{route.component}</ProtectedRoute>}
              path={route.path}
            />
          ) : (
            <Route element={route.component} path={route.path} />
          )}
        </Route>
      ))}
    </Routes>
  );
};
