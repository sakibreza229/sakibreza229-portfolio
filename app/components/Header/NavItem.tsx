import React from "react";
import Link from "next/link";

interface NavItemProps {
  sectionId: string;
  navName: string;
  navIcon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ sectionId, navName, navIcon }) => {
  return (
    <div className="nav__item relative">
      <Link
        href={sectionId}
        className="flex flex-col items-center gap-y-1 font-medium text-foreground hover:text-primary"
      >
        <span className="text-xl lg:hidden">{navIcon}</span>
        <span className="hidden xs:block text-xs lg:text-base">{navName}</span>
      </Link>
    </div>
  );
};

export default NavItem;
