import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { routes } from "./routes";

export const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={<Layout />}>
          <Route element={route.component} path={route.path} />
        </Route>
      ))}
    </Routes>
  );
};
