/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include TypeScript files
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0F172A",
          secondary: "#eceff3",
        },
      },
    },
  },
  darkMode: "class",
};
