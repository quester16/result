import { useState } from "react";
import atIcon from "../../../assets/at.svg";
import { Input } from "../../ui/input";

const MALE = "MALE";
const FEMALE = "FEMALE";

export const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    userName: "",
    gender: MALE,
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.password !== inputs.confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    console.log("Данные для регистрации:", inputs);
    setInputs({
      name: "",
      userName: "",
      gender: MALE,
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleInputs = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">имя</label>
      <Input
        id="name"
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleInputs}
        placeholder="Введите ваше имя"
        required
      />
      <label htmlFor="email">почта</label>
      <Input
        id="email"
        type="email"
        name="email"
        value={inputs.email}
        onChange={handleInputs}
        placeholder="example@mail.com"
        required
      />
      <label htmlFor="username">ник</label>
      <Input
        id="username"
        iconUrl={atIcon}
        type="text"
        name="userName"
        value={inputs.userName}
        onChange={handleInputs}
        placeholder="Уникальный никнейм"
        required
      />
      <label htmlFor="password">пароль</label>
      <Input
        id="password"
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleInputs}
        placeholder="Введите пароль"
        required
      />
      <label htmlFor="confirmPassword">повторите пароль</label>
      <Input
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        value={inputs.confirmPassword}
        onChange={handleInputs}
        placeholder="Повторите пароль"
        required
      />

      <div>
        <label>Пол</label>
        <div>
          <Input
            id="gender-male"
            type="radio"
            name="gender"
            value={MALE}
            checked={inputs.gender === MALE}
            onChange={handleInputs}
            required
          />
          <label htmlFor="gender-male">Мужской</label>
        </div>
        <div>
          <Input
            id="gender-female"
            type="radio"
            name="gender"
            value={FEMALE}
            checked={inputs.gender === FEMALE}
            onChange={handleInputs}
            required
          />
          <label htmlFor="gender-female">Женский</label>
        </div>
      </div>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};
