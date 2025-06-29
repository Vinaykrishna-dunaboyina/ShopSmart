/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#C084FC',   // Light purple
          DEFAULT: '#A855F7', // Main purple
          dark: '#6B21A8',    // Dark purple
        },
      },
    },
  },
  plugins: [],
};
