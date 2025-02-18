import React from 'react';
import { StaticCounter } from '@/app/components/counter';

// Define the props for the HeroBadge component
type HeroBadgeProps = {
  label: string; // The label to display on the badge
  position: string; // CSS position class for the badge
  targetNumber: number; // The target number for the counter
  duration?: number; // The duration for the counter animation in milliseconds (default: 2000)
  sign: string; // The sign to display after the number (e.g., "+")
};

const HeroBadge: React.FC<HeroBadgeProps> = ({
  label,
  position,
  targetNumber,
  sign,
  duration = 2000, // Default duration is 2000ms
}) => {
  return (
    <div
      className={`z-20 bg-container shadow-2xl px-6 py-2 rounded-2xl flex items-center gap-x-4 absolute ${position} 
      animate-bounceUp duration-300 w-48 hidden lg:block`}
    >
      {/* Counter Display */}
      <div className="text-primary text-3xl font-bold">
        <StaticCounter targetNumber={targetNumber} duration={duration} />
        {sign} {/* Display the sign (e.g., "+") after the number */}
      </div>

      {/* Label */}
      <h3 className="text-sm">{label}</h3>
    </div>
  );
};

export default HeroBadge;