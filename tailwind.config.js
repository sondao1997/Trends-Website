/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    '*.{html,js}',
    'node_modules/preline/dist/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    fontFamily: {
      plus: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },

    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        primary: '#23262d',
        secondary: '#FEF200',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'slide-in-left': {
          '0%': {
            visibility: 'visible',
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        extend: {
          '0%': {
            width: '0%',
          },

          '100%': {
            width: '100%',
          },
        },
        revertward: {
          '0%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(100px)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
        'extend-backward': {
          '0%': {
            width: '0%',
          },
          '50%': {
            width: '100%',
          },
          '100%': {
            transform: 'translateX(-100px)',
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'slide-left2': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'slide-left': 'slide-left 25s linear infinite',
        'slide-left2': 'slide-left2 25s linear infinite',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('tailwindcss-animation-delay'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
