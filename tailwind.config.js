/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  
    theme: {
      extend: {
        /* =====================
         * Fonts
         * ===================== */
        fontFamily: {
          brand: ['Rajdhani', 'sans-serif'],          // ロゴ・大会名
          ui: ['Inter', 'Noto Sans JP', 'sans-serif'], // UI本文
        },
  
        /* =====================
         * Colors（Training Match用）
         * ===================== */
        colors: {
          brand: {
            blue: '#2563EB',   // メインブルー
            indigo: '#1E1B4B', // ヘッダー深色
            purple: '#4F46E5',
          },
        },
  
        /* =====================
         * Backgrounds
         * ===================== */
        backgroundImage: {
          'hero-gradient':
            'linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E1B4B 100%)',
          'card-gradient':
            'linear-gradient(to bottom right, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
        },
  
        /* =====================
         * Shadows
         * ===================== */
        boxShadow: {
          glass: '0 8px 32px rgba(0,0,0,0.25)',
          soft: '0 4px 20px rgba(0,0,0,0.15)',
        },
  
        /* =====================
         * Border Radius
         * ===================== */
        borderRadius: {
          xl: '0.75rem',
          '2xl': '1rem',
          '3xl': '1.5rem',
        },
  
        /* =====================
         * Letter Spacing
         * ===================== */
        letterSpacing: {
          widebrand: '0.18em', // ロゴ専用
        },
  
        /* =====================
         * Animation（任意）
         * ===================== */
        keyframes: {
          fadeUp: {
            '0%': { opacity: 0, transform: 'translateY(8px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        animation: {
          fadeUp: 'fadeUp 0.4s ease-out',
        },
      },
    },
  
    plugins: [],
  };
  