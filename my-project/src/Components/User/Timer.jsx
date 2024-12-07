/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(100);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    /* To clear the previous interval otherwise it would show some
        unwanted behaviour */
    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  return (
    <>
      <div className="timerHolder flex justify-center items-center h-[20vmin] w-[20vmin] lg:h-[12vmin] lg:w-[12vmin] rounded-[10vmin] lg:rounded-[6vmin] bg-purple text-white">
        <p className="text-[5.5vmin] lg:text-[3vmin]">{timer}</p>
      </div>
    </>
  );
};

export default Timer;
