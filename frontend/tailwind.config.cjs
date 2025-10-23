/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#EF4444',
          accent: '#06B6D4',
          alt: '#F97316'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#FAFAFB'
        },
        ui: {
          900: '#0F172A',
          600: '#475569',
          400: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        pill: '9999px'
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(15,23,42,0.04)',
        card: '0 8px 20px rgba(12,20,41,0.06)'
      }
    }
  },
  plugins: []
};