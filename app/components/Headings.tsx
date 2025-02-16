"use client";

import React from "react";

interface HeadingPrimaryProps {
  title: string;
  subtitle: string;
  context?: React.ReactNode; // Optional
}

interface HeadingSecondaryProps {
  title: string;
  subtitle: string;
}

export const HeadingPrimary: React.FC<HeadingPrimaryProps> = ({
  title,
  subtitle,
  context,
}) => {
  return (
    <div className="sm:flex justify-between items-end md:border-b-2 pt-8 md:pb-4 mb-6 md:mb-8 md:border-divider">
      <div className="text-center sm:text-left mb-4 md:mb-0">
        <div className="flex justify-center sm:justify-normal items-center gap-x-4">
          <span className="hidden sm:inline h-[2px] w-[60px] bg-primary-700"></span>
          <h2 className="font-bold text-3xl md:font-medium text-foreground md:text-primary md:text-xl capitalize">
            {title}
          </h2>
        </div>
        <p className="md:font-bold font-medium text-sm md:text-4xl text-primary md:text-foreground md:font-secondary mt-1">
          {subtitle}
        </p>
      </div>
      <div className="text-center">{context}</div>
    </div>
  );
};

export const HeadingSecondary: React.FC<HeadingSecondaryProps> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <h2 className="text-center font-bold text-3xl md:text-4xl font-secondary text-foreground mt-12 mb-1 capitalize">
        {title}
      </h2>
      <span className="block text-center font-medium text-primary text-sm mb-8 md:mb-10">
        {subtitle}
      </span>
    </>
  );
};
