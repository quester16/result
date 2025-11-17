# 🖱️ `useHover` - Кастомный хук для отслеживания состояния наведения

Этот кастомный хук React позволяет легко отслеживать, находится ли курсор мыши над элементом DOM. Он возвращает **состояние** наведения (`hovered`) и **ссылку** (`ref`), которую нужно привязать к элементу, наведение на который вы хотите отслеживать.

---

## 📥 Код хука (Файл `useHover.js`)


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

    if (!element) return;

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, []); 

  return { hovered, ref };
};
```
