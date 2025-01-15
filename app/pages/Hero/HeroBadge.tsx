import React, { useState, useEffect } from 'react';

type HeroBadgeProps = {
  label: string;
  position: string;
  targetNumber: number;
  duration?: number;
  sign: string;
};

const HeroBadge: React.FC<HeroBadgeProps> = ({ label, position, targetNumber, sign, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (targetNumber <= 0) return; // Exit if the target number is not positive

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

  return (
    <div
      className={`z-20 bg-container shadow-2xl px-6 py-2 rounded-2xl flex items-center gap-x-4 absolute ${position} animate-bounceUp duration-300 w-48 hidden lg:block`}
    >
      <div className="text-primary text-3xl font-bold">
        {count}
        {sign}
      </div>
      <h3 className="text-sm">{label}</h3>
    </div>
  );
};

export default HeroBadge;
