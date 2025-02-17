import React from "react";
import Link from "next/link";

// Define the props interface for the NavItem component
interface NavItemProps {
  sectionId: string; // The ID of the section to link to (e.g., "#hero")
  navName: string; // The name of the navigation item (e.g., "Home")
  navIcon: React.ReactNode; // The icon to display for the navigation item
}

// NavItem component: Represents a single navigation item in the navbar
const NavItem: React.FC<NavItemProps> = ({ sectionId, navName, navIcon }) => {
  return (
    <div className="nav__item relative">
      {/* Link to the section using Next.js's Link component */}
      <Link
        href={sectionId}
        className="flex flex-col items-center gap-y-1 font-medium text-foreground hover:text-primary"
      >
        {/* Display the icon (visible on smaller screens) */}
        <span className="text-xl lg:hidden">{navIcon}</span>

        {/* Display the navigation name (hidden on smaller screens, visible on larger screens) */}
        <span className="hidden xs:block text-xs lg:text-base">{navName}</span>
      </Link>
    </div>
  );
};

export default NavItem;