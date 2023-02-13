/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: '#2cb67d',
        grey: '#94a1b2',
        white: '#fffffe',
        purple: '#7f5af0',
        'dark-grey': '#242629',
        'bg-shade': '#121315',
        react: '#61DBFB',
        javascript: '#F0DB4F',
        css: '#2965f1',
        html: '#f06529',
        node: '#3c873a',
        tailwind: '#3490dc',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
      }),
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        leagueSpartan: ['League Spartan', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      screens: {
        xs: '480px',
        ss: '550px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
    screens: {
      xs: '480px',
      ss: '550px',
    },
  },
  plugins: [],
};
