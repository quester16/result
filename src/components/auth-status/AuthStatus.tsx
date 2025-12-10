import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const AuthStatus = () => {
  const { isAuth, signOut } = useAuth();
  const navigate = useNavigate();

  if (!isAuth) {
    return <span>login in to see categories</span>;
  }

  const handleSignOut = () => {
    signOut(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <span>You are logged in!</span>
      <button onClick={handleSignOut}>Log out</button>
    </div>
  );
};
