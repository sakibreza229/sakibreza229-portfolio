"use client";

import React from 'react';
import { StaticCounter } from '@/app/components/counter';

type HeroBadgeProps = {
  label: string; // The label to display on the badge
  position: string; // CSS position class for the badge
  targetNumber: number;
  duration?: number; // The duration for the counter animation in milliseconds (default: 2000)
  sign: string;
};

const HeroBadge: React.FC<HeroBadgeProps> = ({ label, position, targetNumber, sign, duration = 2000 }) => {
  return (
    <div
      className={`z-20 bg-container shadow-2xl px-6 py-2 rounded-2xl flex items-center gap-x-4 absolute ${position} 
      animate-bounceUp duration-300 w-48 hidden lg:block`}
    >
      <div className="text-primary text-3xl font-bold">
        <StaticCounter targetNumber={targetNumber} duration={duration} />
        {sign}
      </div>
      <h3 className="text-sm">{label}</h3>
    </div>
  );
};

export default HeroBadge;
