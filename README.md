# useFetch — кастомный React-хук для выполнения запросов

`useFetch` — простой и универсальный React-хук для выполнения GET-запросов и повторных запросов с параметрами.

## 🚀 Возможности

* Автоматический первичный запрос при инициализации
* Состояния загрузки (`isLoading`)
* Ошибки запроса (`error`)
* Данные ответа (`data`)
* Повторный запрос с параметрами через `refetch()`

## 📦 Использование

```jsx
const {
  data,
  isLoading,
  error,
  refetch
} = useFetch('https://jsonplaceholder.typicode.com/posts');
```

## 🔄 Повторный запрос

```jsx
<button onClick={() => refetch({
  params: { _limit: 3 }
})}>
  Перезапросить
</button>
```

## 🧩 Пример структуры данных

```js
[
  {
    "id": 1,
    "title": "Post title",
    "body": "Post description"
  }
]
```

## 📌 Возвращаемые значения

| Поле        | Тип              | Описание                                                       |
| ----------- | ---------------- | -------------------------------------------------------------- |
| `data`      | `any`            | Данные ответа. Если запрос завершился ошибкой — всегда `null`. |
| `isLoading` | `boolean`        | Показывает, выполняется ли сейчас запрос.                      |
| `error`     | `Error` | `null` | Ошибка запроса, если произошла.                                |
| `refetch`   | `function`       | Повторный запрос с параметрами.                                |

## ⚙️ Логика внутри хука

```js
export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const request = await fetch(url);
        const data = await request.json();
        setData(data);
      } catch (e) {
        setError(e);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  async function refetch({ params }) {
    setIsLoading(true);
    setError(null);
    try {
      const request = await fetch(url + '?' + new URLSearchParams(params));
      const data = await request.json();
      setData(data);
    } catch (e) {
      setError(e);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    data: error ? null : data,
    isLoading,
    error,
    refetch
  };
};
```

## 📝 Примечания

* `data` всегда сбрасывается в `null`, если произошла ошибка.
* Внутри `refetch` и основного запроса логика одинакова.
* Хук подходит только для GET-запросов — POST/PUT/PATCH можно добавить в расширенной версии.
