/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563eb',
        'secondary': '#F76FC1',
      }, 
      backgroundImage : { 
        'hero-pattern': 'url("./src/assets/img2.jpg")',
        'login-bg' : 'url("./src/assets/login-bg.jpg")',
      }
    },
  },
  plugins: [],
}