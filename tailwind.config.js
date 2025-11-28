/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f0ff',
          200: '#b6e1ff',
          300: '#86cdff',
          400: '#47b0ff',
          500: '#1792ff',
          600: '#0b74d9',
          700: '#0c5db1',
          800: '#0f4e8f',
          900: '#103f72'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.25)',
      },
    },
  },
  plugins: [],
}
