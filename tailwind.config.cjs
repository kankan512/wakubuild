/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#334c9c',
        'primary-dark': '#253578',
        accent: '#ffe34a',
        'accent-text': '#f7f076',
        subtle: '#f7f7f5',
        'text-body': '#464646',
        'text-deco': '#f1f1f1',
        // Legacy aliases — safe to remove once all external references are gone
        brand: {
          primary: '#334c9c',
          dark: '#253578',
          accent: '#ffe34a',
          muted: '#f7f7f5',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Gill Sans"', '"Gill Sans MT"', 'Calibri', '"Trebuchet MS"', 'sans-serif'],
        futura: ['Futura', '"Century Gothic"', '"Trebuchet MS"', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'reveal-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'reveal-up': 'reveal-up 0.7s ease-out both',
      }
    }
  },
  plugins: [],
};
