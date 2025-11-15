import { useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type FunctionReturn = [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export const useLocalStorage = (key: string): FunctionReturn => {
  const [value, setValue] = useState<LocalStorageReturnValue>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  });

  const setItem = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return [value, { setItem, removeItem }];
};
