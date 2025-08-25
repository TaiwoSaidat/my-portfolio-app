/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d3557",
        secondary: "#a8dadc",
        tertiary: "#3b5b89",
        white: "#f1faee",
        accent: "#457b9d",
        gray: "#d1d5db",
        // #a8dadc
      },
    },
  },
  plugins: [],
};
