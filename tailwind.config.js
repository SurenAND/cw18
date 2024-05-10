/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6c5ce7",
        secondary: "#a29bfe",
        "light-gray": "#dfe6e9",
        "dark-gray": "#767a7c",
      },
    },
  },
  plugins: [],
};
