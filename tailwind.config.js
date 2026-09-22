/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF8F6',
          100: '#F2E8E5',
          200: '#EADDD7',
          300: '#E0CEC7',
          400: '#D2BAB0',
          500: '#A45D43',
          600: '#8C442A',
          700: '#73321A',
          800: '#5C2411',
          900: '#3D1507',
          gold: '#C59B27',
          'gold-light': '#F3E5AB',
          dark: '#111827',
          onyx: '#0B0F19',
          accent: '#E11D48'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 8px 30px rgba(0,0,0,0.06)',
        'float': '0 20px 40px -15px rgba(0,0,0,0.15)'
      }
    },
  },
  plugins: [],
}
