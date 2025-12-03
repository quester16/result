````markdown
# Result — фронтенд проект с формами авторизации на React + Vite

---

## Что реализовано

- **Страница авторизации (`AuthPage`)** — переключение между входом и регистрацией:

  - Компонент `SignIn` — форма входа с полями email и пароля
  - Компонент `SignUp` — форма регистрации с полями: имя, email, никнейм, пароль, выбор пола
  - Логика переключения между режимами с проверкой совпадения паролей при регистрации

- **UI-компонент `Input`** — универсальный компонент ввода:

  - Поддерживает различные типы: `text`, `email`, `password`, `radio`
  - Опциональная иконка слева (через проп `iconUrl`)
  - Пробрасывает все стандартные атрибуты HTML (`placeholder`, `id`, `required` и т.д.)

- **Сборка:** Vite — быстрый dev-сервер и скрипты в `package.json`

---

## 📥 Компоненты (примеры кода)

### Input компонент (`src/components/ui/input/index.jsx`)

```jsx
export const Input = ({ iconUrl, value, onChange, type, name, ...rest }) => {
  return (
    <div style={{ display: "flex" }}>
      <span style={{ padding: 5 }}>
        {iconUrl && (
          <img src={`${iconUrl}`} alt="input icon" width={30} height={30} />
        )}
      </span>
      <input
        style={{ padding: 5 }}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
```

### SignIn форма (фрагмент)

```jsx
const [inputs, setInputs] = useState({
  email: "",
  password: "",
});

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(inputs);
};

return (
  <form onSubmit={handleSubmit}>
    <Input
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
```

---

## Как запустить

```bash
npm install
npm run dev
```

---

## Структура

- `src/main.jsx` — точка входа
- `src/App.jsx` — главный компонент
- `src/components/auth/` — компоненты авторизации (AuthPage, SignIn, SignUp)
- `src/components/ui/input/` — UI-компонент Input
- `src/assets/` — статические файлы (иконки, изображения)
- `vite.config.js` — конфигурация сборки
````
