import { NavLink, Outlet } from "react-router-dom";
import { AuthProvider } from "../../providers/AuthProvider";
import { publicRoute } from "../../router/lib/publicRoutes";
import { AuthStatus } from "../auth-status/AuthStatus";
import styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <AuthProvider>
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
            <li>
              <AuthStatus />
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </AuthProvider>
  );
};
