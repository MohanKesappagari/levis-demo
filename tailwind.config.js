/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        landing: "0 0 8px 1px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        red: "#C41230",
      },
    },
  },
  plugins: [],
};
