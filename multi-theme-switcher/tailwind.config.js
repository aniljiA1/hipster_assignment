/** @type {import('tailwindcss').Config} */


export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        text: 'var(--text)',
      },
      fontFamily: {
        theme: 'var(--font)',
      },
    },
  },
  plugins: [],
};

