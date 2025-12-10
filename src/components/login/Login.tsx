import type { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const fromPath = location.state?.from || "/";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAuth(true, () => {
      navigate(fromPath, {
        replace: true,
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Войти</button>
    </form>
  );
};
