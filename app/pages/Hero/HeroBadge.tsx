import React from "react";

type HeroBadgeProps = {
  text: string;
  number: number | string;
  position: string;
};

const HeroBadge: React.FC<HeroBadgeProps> = ({ text, number, position }) => {
  return (
    <div
      className={`z-20 bg-container shadow-2xl px-6 py-2 rounded-2xl flex items-center gap-x-4 absolute ${position} animate-bounceUp duration-300 w-48 hidden lg:block`}
    >
      <div className="text-primary text-3xl font-bold">{number}</div>
      <h3 className="text-sm">{text}</h3>
    </div>
  );
};

export default HeroBadge;
