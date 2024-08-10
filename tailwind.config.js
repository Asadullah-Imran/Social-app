/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        cusBg: "#FFE1D7",
        cusDOrange: "#D46B4A",
        cusLOrange: "#FCA082",
        cusOrange: "#E6734F",
        cusError: "#F86D6D",
        cusTText: "#47001F",
        cusSText: "#8A4F71",
        cusBlack: "#101010",
      },
    },
  },
  plugins: [],
};
