/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        prism: {
          indigo: '#4F46E5',
          teal: '#14B8A6',
          charcoal: '#1F2937',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F46E5 0%, #14B8A6 100%)',
      },
    },
  },
  plugins: [],
};