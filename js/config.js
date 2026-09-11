tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'sans-serif'] },
          colors: {
            brand: { 
              primary: '#0ea5e9',   // Ocean Cyan
              dark: '#0f172a',      // Sleek Navy/Slate
              accent: '#3b82f6',    // Bright Blue
              lightbg: '#f8fafc'    // Lighter sky background
            }
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'fade-in': 'fadeIn 0.3s ease-out forwards',
            'slide-up': 'slideUp 0.4s ease-out forwards',
            'glow-pulse': 'glowPulse 3s infinite alternate'
          },
          keyframes: {
            float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
            fadeIn: { '0%': { opacity: '0', transform: 'scale(0.98)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
            slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
            glowPulse: { '0%': { opacity: '0.4' }, '100%': { opacity: '0.8' } }
          }
        }
      }
    }
