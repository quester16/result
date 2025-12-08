import { NavLink, Outlet } from "react-router-dom";
import { publicRoute } from "../../router/lib/publicRoutes";
import styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to={publicRoute.home}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to={publicRoute.categories}
            >
              Characters
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
