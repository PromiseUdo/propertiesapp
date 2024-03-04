import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {},
    },
    colors: {
      ...colors,
      voks: {
        "overlay-bg": "var(--overlay-bg)",
        primary: "var(--shades-red)",
        secondary: "var(--shades-blue)",
        "shades-black": "var(--shades-black)",
        "shades-white": "var(--shades-white)",
        "shades-gray-3": "var(--shades-gray-3)",
        "shades-gray-2.5": "var(--shades-gray-25)",
        "shades-gray-2": "var(--shades-gray-2)",
        text: "var(--shades-gray-1)",
        border: "var(--border)",
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
