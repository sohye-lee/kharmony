/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      serif: ['"PT Serif"'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['Inter'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        // current: 'currentColor',
        primary: '#D13376',
        secondary: '#1791D6',
        tertiary: '#E9DE65',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
