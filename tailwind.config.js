/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          50:'#E5F6F4',
          100:'#CCEDE9',
          200:'#99DBD4',
          300:'#66CABE',
          400:'#33B8A9',
          500:'#00A693',
          600:'#008576',
          700:'#006458',
          800:'#004B49',
          900:'#00211D'
        },
        neutralGrey:{
          50:'#F5F6F9',
          100:'#E6E9F0',
          200:'#D7DBE6',
          300:'#C9CEDD',
          400:'#BAC1D4',
          500:'#9CA6C1',
          600:'#818EB0',
          700:'#546286',
          800:'#323B50',
          900:'#11141B'
        },
        error:{
          50:'#FEF2F2',
          100:'#FEE2E2',
          200:'#FECACA',
          300:'#FCA5A5',
          400:'#F87171',
          500:'#EF4444',
          600:'#DC2626',
          700:'#B91C1C',
          800:'#991B1B',
          900:'#7F1D1D'
        },
        shades:{
          50:'#001412',
          300:'#FFFFFF'
        }
      },
      screens: {
          '3xl': '1920px', // Adds 3xl, keeps defaults
      },
    },
    fontFamily:{
      outfit:["Outfit","sans-serif"],
      supreme:["Supreme","sans-serif"],
      switzer:["Switzer","sans-serif"],
      ttCommons: ['TT Commons Pro', 'sans-serif']
    },
    transitionDuration: {
      DEFAULT: "200ms",
    },
    transitionTimingFunction: {
      DEFAULT: "linear",
    },
  },
  plugins: [
    
  ],
}