/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2e073f",
        "secondary-color": "#7a1cac",
        "card-color": "#EBD3F8",
        "section-color": "#EBD3F8",
      },
    },
  },
  plugins: [],
};
