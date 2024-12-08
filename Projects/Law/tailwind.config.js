/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],

  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1100px',
      xl: '1300px',
    },
    extend: {
      fontFamily: {
        libre: ['"Libre Franklin"', 'sans-serif'],
        alef: ['"Alef"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: "1px",
      },
    },
  },
  plugins: [],
}