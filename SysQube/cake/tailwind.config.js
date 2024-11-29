/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyrene: ['Cyrene', 'sans-serif'], // Add your font here
        poppins: ['Poppins', 'serif']
      },
      screens: {
        xs: '425px',
        sm: '567px',
        md: '768px',
        lg: '1080px',
        xl: '1150px',
        '2xl': '1150px'
      },
      container: {
        center: 'true',
        padding: '0.5px'
      },
  
    },
  },
  plugins: [],
}