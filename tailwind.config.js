/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B42F4',
        success: '#26CA54',
        error: '#FF7067',
        secondary: '#A39FD2',
        'body-secondary': '#9894BC',
        'body-text': '#353A44',
        dark: '#040033',
        deepblue: '#21215B',
        indigo: '#2C2C7A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
      boxShadow: {
        'inner-custom': 'inset 0 -8px 20px 0 rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

