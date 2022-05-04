const { join } = require('path');

// available since Nx v 12.5
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  mode: 'jit',
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*!(*.stories|*.spec).{ts,tsx}'),
    join(__dirname, 'layouts/**/*!(*.stories|*.spec).{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'notification-enter': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        'notification-out': {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(20%)'
          },
        }
      },
      animation: {
        slideup: 'notification-enter 0.4s cubic-bezier(.66,-0.01,.25,1.04)',
        slidedown: 'notification-out 0.4s cubic-bezier(.66,-0.01,.25,1.04)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
