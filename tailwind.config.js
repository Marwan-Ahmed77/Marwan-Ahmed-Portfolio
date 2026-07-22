/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],
=======
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
<<<<<<< HEAD
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
=======
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        ink: '#0A0A0F',
        slate: {
          850: '#1a1f2e',
          900: '#0f1420',
          950: '#080c14',
        },
        gold: {
          300: '#f5d67a',
          400: '#e8c547',
          500: '#d4a d17',
          DEFAULT: '#C9A84C',
        },
        azure: '#1e6fff',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'line-grow': 'lineGrow 1.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
    },
  },
  plugins: [],
}
