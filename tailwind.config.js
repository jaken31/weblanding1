/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      'white': '#ffffff',
      'kaki': "#b3a394",
      'platinum': '#cdd7d6',
      'bittersweet': '#f87060',
      'oxfordblue': '#102542',
      'richblack': '#0d1f2d',
      'paynegray': '#546a7b',
      'timberwolf': '#e3dbdb',
      'prussianblue': '#002642',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        display: 'Outfit, ui-serif' 
      },
    },
  },
}
