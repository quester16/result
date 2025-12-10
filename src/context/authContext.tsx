import { createContext } from "react";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (value: boolean, callback?: () => void) => void;
  signOut: (callback: () => void) => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
  signOut: () => {},
});
