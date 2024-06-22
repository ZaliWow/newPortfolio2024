/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'HeroHome':'url(/public/images/HeroHome.webp)',
        'Leadership':'url(/public/images/BgLeadership.webp)',
        'TeamWork':'url(/public/images/BgTeamWork.webp)',
        'Achievements':'url(/public/images/bgAchievements.webp)',
        'ProjectSlider':'url(/public/images/projectSlide.webp)',
        'sky':'url(/public/images/sky.webp)'
      },


    },
  },
  plugins: [require('daisyui'),],
}

