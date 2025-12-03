import { useState } from "react";
import { SignIn } from "./sign-in";
import { SignUp } from "./sign-up";
import styles from "./styles.module.scss";

const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";

export const AuthPage = () => {
  const [mode, setMode] = useState(SIGNIN);

  console.log(mode);

  return (
    <div className={styles.wrapper}>
      {mode === SIGNUP ? <SignIn /> : <SignUp />}

      {mode === SIGNIN ? (
        <div>
          Есть аккаунт?
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => setMode(SIGNUP)}
          >
            Войти
          </span>
        </div>
      ) : (
        <div>
          Нету аккаунта?
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => setMode(SIGNIN)}
          >
            Зарегистрироваться
          </span>
        </div>
      )}
    </div>
  );
};
