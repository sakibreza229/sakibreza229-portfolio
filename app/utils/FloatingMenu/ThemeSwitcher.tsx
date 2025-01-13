import React from "react";
import { useTheme } from "next-themes";
import { MdSunny, MdNightsStay } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div>
      {theme === "light" ? (
        <button
          className="text-2xl rounded-full p-3 shadow-lg transition-all text-foreground bg-container hover:scale-105"
          aria-label="Theme Switcher"
          onClick={handleThemeChange}
        >
          <MdNightsStay className="hover:rotate-[360deg] transition-transform" />
        </button>
      ) : (
        <button
          className="text-2xl rounded-full p-3 shadow-lg transition-all text-foreground bg-container hover:scale-105"
          aria-label="Theme Switcher"
          onClick={handleThemeChange}
        >
          <MdSunny className="hover:rotate-180 transition-transform" />
        </button>
      )}
    </div>
  );
};
export default ThemeSwitcher;