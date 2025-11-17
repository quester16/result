# 🖱️ `useHover` - Кастомный хук для отслеживания состояния наведения

Этот кастомный хук React позволяет легко отслеживать, находится ли курсор мыши над элементом DOM. Он возвращает **состояние** наведения (`hovered`) и **ссылку** (`ref`), которую нужно привязать к элементу, наведение на который вы хотите отслеживать.

---

## 📥 Код хука (Файл `useHover.js`)

**Важное исправление:** В функции очистки `useEffect` в исходном коде была ошибка (дважды использовано `removeEventListener("mouseover")`). Ниже представлен исправленный и рабочий код:

```jsx
import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseOut = () => {
    setHovered(false);
  };

  useEffect(() => {
    const element = ref.current;

    // Проверка, чтобы избежать ошибок, если элемент еще не привязан
    if (!element) return;

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      // Корректная очистка слушателей событий
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, []); // Пустой массив зависимостей гарантирует, что эффект запускается только один раз

  return { hovered, ref };
};
```
