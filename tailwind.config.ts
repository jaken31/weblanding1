const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
/** @type {import('tailwindcss').Config} */

  module.exports = {
    content: ["./src/**/*.{ts,tsx}",
      './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: "class",
    theme: {
      extend: {
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
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        screens: {
          'sm': '576px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
        animation: {
          first: "moveVertical 30s ease infinite",
          second: "moveInCircle 20s reverse infinite",
          third: "moveInCircle 40s linear infinite",
          fourth: "moveHorizontal 40s ease infinite",
          fifth: "moveInCircle 20s ease infinite",
        },
        keyframes: {
          moveHorizontal: {
            "0%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
            "50%": {
              transform: "translateX(50%) translateY(10%)",
            },
            "100%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
          },
          moveInCircle: {
            "0%": {
              transform: "rotate(0deg)",
            },
            "50%": {
              transform: "rotate(180deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          moveVertical: {
            "0%": {
              transform: "translateY(-50%)",
            },
            "50%": {
              transform: "translateY(50%)",
            },
            "100%": {
              transform: "translateY(-50%)",
            },
          },
        },
        
      },
    },
    plugins: [],
  };
  

