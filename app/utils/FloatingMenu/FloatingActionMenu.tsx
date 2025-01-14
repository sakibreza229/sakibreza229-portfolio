import React from "react";
import dynamic from 'next/dynamic'
const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), { ssr: false })
import ActionMenu from "./ActionMenu";

const FloatingActionMenu = () => {
  return (
    <div className="fixed top-28 lg:top-36 right-1 xl:right-2 z-50 space-y-10">
      {/* theme toggler */}
      <ThemeSwitcher />
      {/* action menu */}
      <ActionMenu />
    </div>
  );
};

export default FloatingActionMenu;
