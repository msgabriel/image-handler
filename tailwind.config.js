/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      light: '#E4E1FE',
      primary: '#A9A0F5',
      secondary: '#1D1632',
      dark: '#00010F',
    },
    extend: {
      borderWidth: {
        1.5: '1.5px',
      },
    },
  },
  plugins: [],
}
