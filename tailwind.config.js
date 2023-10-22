/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontSize: {
          'roboto28': ['28px', {
            fontWeight: 700,
            lineHeight: '32.81px'
          }],
          'roboto15': ['15px', {
            fontWeight: 500,
            lineHeight: '17.58px'
          }],
          'roboto13': ['13px', {
            fontWeight: 500,
            lineHeight: '15.23px'
          }],
          'roboto10': ['10px', {
            fontWeight: 400,
            lineHeight: '11.72px'
          }]
        },
        container: {
          center: true,
        },
        colors: {
          'color-blue': '#0080FF',
          'color-dark-blue': '#005FBC',
          'color-light-blue': '#41A0FF',
          'color-white': '#FFFFFF',
          'color-chrome': '#EEEEEE',
          'color-light-gray': '#CCCCCC',
          'color-gray': '#BBBBBB',
          'color-dark-gray': '#AAAAAA',
          'color-black': '#121212'
        },
        padding: {
          '15px': '15px',
          '22px': '22px',
          '30px': '30px'
        },
        translate: {
          '-12px': '-12px'
        }
      }
    },
    plugins: [
      /* eslint-env node */
      require('@tailwindcss/forms')
    ],
  }
  