/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F8F3EA',
          200: '#EFE6D5',
          300: '#E2D3BC',
          400: '#D0BC9A',
          500: '#BFA37B',
        },
        sand: {
          50: '#F7F4F0',
          100: '#EDE5DA',
          200: '#DBCBB8',
          300: '#C9B195',
          400: '#B89878',
          500: '#A67E5B',
          600: '#8B6647',
          700: '#6F5038',
          800: '#533A28',
          900: '#372518',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E5ECE4',
          200: '#CBD8CA',
          300: '#A8BFA7',
          400: '#85A584',
          500: '#678B66',
          600: '#4F7050',
          700: '#3D5640',
          800: '#2B3C2E',
          900: '#1A251C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gentlePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
