/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0097b2',
          dark: '#007a8f',
          accent: '#f6b800',
          muted: '#eef5fb'
        }
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', 'Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both'
      }
    }
  },
  plugins: [],
};
