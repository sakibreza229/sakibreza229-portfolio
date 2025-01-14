import React from "react";

const HeroBgAnimation = () => {
  const filledSquares = [
    { left: 25, size: 80, animationDelay: 0, animationDuration: 15 },
    { left: 10, size: 20, animationDelay: 2, animationDuration: 12 },
    { left: 70, size: 20, animationDelay: 4, animationDuration: 18 },
    { left: 40, size: 60, animationDelay: 0, animationDuration: 20 },
    { left: 65, size: 20, animationDelay: 3, animationDuration: 14 },
  ];
  const borderedSquares = [
    { left: 50, size: 40, animationDelay: 0, animationDuration: 16 },
    { left: 90, size: 70, animationDelay: 2, animationDuration: 14 },
    { left: 50, size: 170, animationDelay: 4, animationDuration: 18 },
    { left: 30, size: 45, animationDelay: 1, animationDuration: 20 },
    { left: 70, size: 80, animationDelay: 0, animationDuration: 22 },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      {filledSquares.map((square, index) => (
        <span
          key={index}
          className="block absolute -bottom-36 bg-[#b8b8ff] dark:bg-[#3f3f6e] rounded animate-rotate-up"
          style={{
            left: `${square.left}%`,
            width: `${square.size}px`,
            height: `${square.size}px`,
            animationDelay: `${square.animationDelay}s`,
            animationDuration: `${square.animationDuration}s`,
          }}
        ></span>
      ))}
      {borderedSquares.map((square, index) => (
        <span
          key={index}
          className="block absolute -bottom-12 bg-transparent border-2 border-[#b8b8ff] dark:border-[#5a5a90] rounded animate-rotate-up"
          style={{
            left: `${square.left}%`,
            width: `${square.size}px`,
            height: `${square.size}px`,
            animationDelay: `${square.animationDelay}s`,
            animationDuration: `${square.animationDuration}s`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default HeroBgAnimation;
