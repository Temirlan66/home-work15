import { useState } from "react";

export const useCounter = (num,num2) => {
  const [count, setCount] = useState(0,num2);
  const increment = () => {
    setCount((prev) => prev + num);
  };

  const decremnt = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - num2;
      }
      return prev;
    });
  };

  const resetHandler = () => {
    setCount(0);
  };

  return {
    count,
    increment,
    decremnt,
    resetHandler,
  };
};
