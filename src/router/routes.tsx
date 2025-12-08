import { Categories } from "../pages/Categories";
import { Home } from "../pages/Home";
import { SingleCategory } from "../pages/SingleCategory";
import { publicRoute } from "./lib/publicRoutes";

export const routes = [
  {
    path: publicRoute.home,
    component: <Home />,
  },
  {
    path: publicRoute.categories,
    component: <Categories />,
  },
  {
    path: publicRoute.category,
    component: <SingleCategory />,
  },
];
