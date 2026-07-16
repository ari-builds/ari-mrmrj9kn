/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: { 500: "#7c5cff", 400: "#a48bff" } },
      fontFamily: { display: ["Space Grotesk", "system-ui"] },
    },
  },
  plugins: [],
};
