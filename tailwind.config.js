/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#154270',
          'blue-dark': '#0f3258',
          'blue-deep': '#0B2239',
          green: '#10B981',
          'green-dark': '#0ea372',
          orange: '#EB7100',
          'orange-dark': '#cf6300',
          navy: '#0B2239',
          ink: '#0a1a2a',
          soft: '#F8FAFC',
          cream: '#FAF7F2'
        }
      },
      borderColor: {
        brand: 'rgba(21, 66, 112, 0.14)'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        card: '0 12px 40px -10px rgba(11, 34, 57, 0.18), 0 4px 12px -4px rgba(11, 34, 57, 0.08)',
        'card-hover': '0 28px 60px -12px rgba(11, 34, 57, 0.28), 0 10px 22px -8px rgba(11, 34, 57, 0.14)',
        glass: '0 30px 80px -25px rgba(11, 34, 57, 0.45), 0 8px 24px -10px rgba(11, 34, 57, 0.18)',
        profile: '0 30px 80px -20px rgba(11, 34, 57, 0.45), 0 10px 25px -10px rgba(11, 34, 57, 0.18)'
      },
      backgroundImage: {
        'glass-card':
          'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.45) 100%)'
      },
      maxWidth: {
        hero: '1440px',
        prose: '720px'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
