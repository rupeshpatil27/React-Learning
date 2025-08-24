import { useEffect, useState } from "react";

const useLocalStorage = (key, initialData) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
      setData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
    }
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  // Reset to initial value
  const reset = () => {
    localStorage.setItem(key, JSON.stringify(initialData));
    setData(initialData);
  };

  return [data, updateLocalStorage, reset];
};

export default useLocalStorage;
