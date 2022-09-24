/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#095f66",
        
"secondary": "#f99af5",
        
"accent": "#95ff91",
        
"neutral": "#1D1B23",
        
"base-100": "#F9F5FA",
        
"info": "#7AB6DC",
        
"success": "#26977D",
        
"warning": "#987106",
        
"error": "#EF2536",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}