import { useEffect, useState } from "react";

function getSavedVlaue(key, initialVlaue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  return initialVlaue;
}

function useLocalStorage(key, initialVlaue) {
  const [value, setValue] = useState(() => {
    return getSavedVlaue(key, initialVlaue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
