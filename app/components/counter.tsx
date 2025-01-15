import React, { useState, useEffect } from "react";

type StaticCounterProps = {
  targetNumber: number;
  duration?: number;
};

export const StaticCounter: React.FC<StaticCounterProps> = ({
  targetNumber,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (targetNumber <= 0) {
      setCount(0);
      return;
    } // Exit if the target number is not positive

    const intervalTime = Math.max(duration / targetNumber, 1); // Ensure a minimum interval time of 1ms

    let currentNumber = 0;
    const interval = setInterval(() => {
      currentNumber += 1;
      setCount(currentNumber);
      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetNumber, duration]);

  return <>{count}</>;
};
