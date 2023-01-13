/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blue-primary': "#436AEC",
        'blue-secondary': "#5C81EC",
        'yellow-primary': "#FFC803",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0px)' },
          '10%': { transform: 'translateX(5px)' },
          '20%': { transform: 'translateX(-6px)' },
          '30%': { transform: 'translateX(8px)' },
          '40%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(7px)' },
          '60%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        'waving-sea': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
}
