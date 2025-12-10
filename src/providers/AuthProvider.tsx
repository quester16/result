import { useState, type ReactNode } from "react";
import { AuthContext } from "../context/authContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(() =>
    Boolean(localStorage.getItem("auth"))
  );

  const handleSetter = (val: boolean, callback?: () => void) => {
    setIsAuth(val);
    localStorage.setItem("auth", "bool");
    if (callback) callback();
  };

  const handleSignOut = (callback: () => void) => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    callback();
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth: handleSetter, signOut: handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
