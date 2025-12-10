import { Login } from "../components/login/Login";
import { Categories } from "../pages/Categories";
import { Home } from "../pages/Home";
import { SingleCategory } from "../pages/SingleCategory";
import { authRoutes, publicRoute } from "./lib/publicRoutes";

export const routes = [
  {
    path: publicRoute.home,
    component: <Home />,
  },
  {
    path: publicRoute.categories,
    component: <Categories />,
    isAuth: true,
  },
  {
    path: publicRoute.category,
    component: <SingleCategory />,
    isAuth: true,
  },
  {
    path: authRoutes.login,
    component: <Login />,
  },
];
