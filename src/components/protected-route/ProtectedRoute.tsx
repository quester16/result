import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (!isAuth)
    return (
      <Navigate to={"/login"} replace state={{ from: location.pathname }} />
    );

  return children;
};
