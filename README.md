# `useViewPort` - Кастомный хук для отслеживания состояния размера видимой области браузера

Этот кастомный хук React позволяет легко отслеживать текущий размер **ширины** и **высоты** браузера вне зависимости какие были внесены стили для **body**, `{width, height}` - возвращают нам видимую область браузера.

---

## 📥 Код хука (Файл `useHover.js`)

```jsx
import { useEffect, useState } from "react";

export const useViewportSize = () => {
  const [rects, setRects] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setRects({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { height: rects.height, width: rects.width };
};
```
