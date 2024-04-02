/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        Shrikhand: ['Shrikhand', 'sans-serif'],
      },
      colors: {
        primary: '#234645',
        secondary: '#F2D7DB',
        white: '#FFFAFA',
        darky: '#262626',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

