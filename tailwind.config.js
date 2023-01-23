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
        primary: {
          DEFAULT: '#D13376',
          light: '#FCA6C5',
          dark: '#872447',
        },
        secondary: { DEFAULT: '#1791D6', light: '#97C9F1', dark: '#214F74' },
        tertiary: '#E9DE65',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
