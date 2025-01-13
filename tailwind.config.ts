const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blinking: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        sliding: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fading-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fading-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "rotate-up": {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
            borderRadius: "0",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(720deg)",
            opacity: "0",
            borderRadius: "50%",
          },
        },
        "scroll-down": {
          "0%": {
            transform: "translateY(0)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
        },
      },
      animation: {
        blink: "blinking 1s ease-in-out infinite",
        slide: "sliding 0.5s ease-in-out",
        "fade-in": "fading-in 0.5s ease-in",
        "fade-out": "fading-out 0.5s ease-out",
        "rotate-up": "rotate-up 25s linear infinite",
        "scroll-down": "scroll-down 1.5s linear infinite",
      },
    },
    fontFamily: {
      primary: ["var(--font-poppins)", "sans-serif"],
      secondary: ["var(--font-ubuntu)", "sans-serif"],
    },
    screens: {
      xs: "378px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#E0E0FF",
            foreground: "#000033",
            container: "#F5F5FF",

            // light mode primary color
            primary: {
              DEFAULT: "#6C6CFF",
              hover: "#573DEE",
              light: "#CCCCFF",
              dark: "#C4CBFF",
            },

            // light mode secondary color
            secondary: "#60678A",
          },
        },
        dark: {
          colors: {
            background: "#151527",
            foreground: "#FFFFFF",
            container: "#1F2544",

            // dark mode primary color
            primary: {
              DEFAULT: "#6364FF",
              light: "#7A7AFF",
              dark: "#151527",
            },

            // dark mode secondary color
            secondary: "#4C516D",
          },
        },
      },
    }),
  ],
};
