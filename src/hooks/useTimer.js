import { useEffect, useState } from "react";

export const UseTimer = (num) => {
  const [isSecond, setSecond] = useState(num * 60);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    if (timer === false) {
      const intervalId = setInterval(() => {
        setSecond(isSecond - 1);
      }, 1000);

      if (isSecond === 0) {
        clearInterval(intervalId);
      }

      return () => clearInterval(intervalId);
    }
  });

  const stopTimer = ()=>{
    setTimer(true)
  }
  const restartTimer =()=>{
    setSecond(num * 60)
    setTimer(false)
  }

const continueTimer = ()=>{
  setTimer(false)
}

  return {
    isSecond,
    timer,
    restartTimer,
    stopTimer,
    continueTimer
  }
};
