/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'HeroHome':'url(/public/images/HeroHome.webp)',
        'Leadership':'url(/public/images/BgLeadership.webp)',
        'TeamWork':'url(/public/images/BgTeamWork.webp)'
      },


    },
  },
  plugins: [require('daisyui'),],
}

