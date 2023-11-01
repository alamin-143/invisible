/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    container: {
        center: true,
        padding: '1rem'
    },
    screens: {
        'sm': '600px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1150px',
        '2xl': '1150px',
    },
    extend: {
      colors: {
        dark: {
            200: '#0F1114',
            400: '#292D35'
        }
      },
    }
  },
  plugins: [],
}

