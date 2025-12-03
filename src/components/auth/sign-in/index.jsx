import { useState } from "react";
import reactSvg from "../../../assets/react.svg";
import { Input } from "../../ui/input";

export const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const handleInputs = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        iconUrl={reactSvg}
        type="email"
        name="email"
        value={inputs.email}
        onChange={handleInputs}
      />
      <Input
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleInputs}
      />
      <button type="submit">Войти</button>
    </form>
  );
};
