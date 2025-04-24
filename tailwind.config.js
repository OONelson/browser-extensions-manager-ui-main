import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-gradient": "linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%) ",
        "dark-gradient": "linear-gradient(180deg, #040918 0%, #091540 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
