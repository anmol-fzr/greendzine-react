/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      green: {
        DEFAULT: "#36A546",
        light: "#00FF2580",
        fade: "#36A54680",
        dark: "#36A546CC",
      },
      error: "#ef4444",
    },
  },
  plugins: [],
  darkMode: "class",
};
