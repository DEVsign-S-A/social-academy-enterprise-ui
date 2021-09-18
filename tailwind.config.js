// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#24345F",
        second: "#DB255D",
        BlueSocial: "#409FFF",
        GreenSocial: "#3DCC79",
        SkySocial: "#22CCE2",
        YellowOfficial: '#FFC500',
        WhiteSocial: "#fafafa",
      },
      spacing: {
        '80': '240px',
        '90': '320px',
        '100': '580px',
        '110': '700px',
        '90/0': '90%',
        '93/0': '93%'
      },

      screens: {
        'mobile': '300px',
        // => @media (min-width: 340px) { ... }

        'tablet': '600px',
        // => @media (min-width: 600px) { ... }

        'tabletbig': '730px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      
    },

    fontSize: {
      '1s': '10px',
      '2s': '16px',
      '1xl': '1rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '10xl': '12rem',
     },
     fontFamily: {
      Poppins: ['Poppins'],
      Montserrat: ['Montserrat'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
