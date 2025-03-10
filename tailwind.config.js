/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Karanlık mod desteği ekledik
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
