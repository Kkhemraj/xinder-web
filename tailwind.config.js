/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        
      },
      colors:{
        'primary':'#881337',
        'titleColor':'#0F172A',
        'lightBlue':'#2563EB',
        'lightNavyBlue':'#475569',
        'navyBlue':'#0F172A',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // Other plugins as needed
  ],
}

