/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        navy: '#0c1824',
        navy2: '#112035',
        navy3: '#0f1e30',
        card: '#112035',
        gold: '#b8973a',
        gold2: '#d4aa50',
        gold3: '#e8c96a',
        offwhite: '#f0ede6',
        muted: '#8da4ba',
        crimson: '#d9243a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        logo: ['Marcellus', 'Georgia', 'serif'],
      },
      animation: {
        slideInLeft: 'slideInLeft 0.7s ease both',
        slideInLeft2: 'slideInLeft 0.8s 0.1s ease both',
        slideInLeft3: 'slideInLeft 0.85s 0.15s ease both',
        fadeIn: 'fadeIn 0.9s 0.2s ease both',
      },
      keyframes: {
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
