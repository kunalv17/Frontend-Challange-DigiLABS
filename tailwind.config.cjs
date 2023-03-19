/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      screens: {
        'sm': '768px',
  
        'md': '1024px',
  
        'lg': '1440px',
      },
    },
  },
  plugins: [],
};
