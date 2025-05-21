const { fontFamily } = require("tailwindcss/defaultTheme")  // Fixed import path

// const extendConfig = require(`@conversiondigital/headless-basics-components/src/theme/${process.env.SITE_THEME || "harvard"}/tailwind.extend`);

// console.log("Using theme: ", process.env.SITE_THEME || "harvard");
// console.log("Using theme config: ", extendConfig);

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "pages/**/*.{ts,tsx}",
      "theme/**/*.{ts,tsx}",
      "sites/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "utils/**/*.{ts,tsx}",
      "./node_modules/@conversiondigital/headless-basics-components/src/theme/default/**/*.{ts,tsx}",
      "./../headless-basics-components/src/theme/default/**/*.{ts,tsx}",
      "../../node_modules/@conversiondigital/headless-basics-components/src/theme/default/**/*.{ts,tsx}",
      "./../../../headless-basics-components/src/theme/default/**/*.{ts,tsx}",

      "./node_modules/@conversiondigital/headless-basics-components/src/theme/harvard/**/*.{ts,tsx}",
      "./../headless-basics-components/src/theme/harvard/**/*.{ts,tsx}",
      "../../node_modules/@conversiondigital/headless-basics-components/src/theme/harvard/**/*.{ts,tsx}",
      "./../../../headless-basics-components/src/theme/harvard/**/*.{ts,tsx}",
      
      "./node_modules/@conversiondigital/headless-basics-components/src/components/**/*.{ts,tsx}",
      "../../node_modules/@conversiondigital/headless-basics-components/src/components/**/*.{ts,tsx}",
      "./../headless-basics-components/src/components/**/*.{ts,tsx}",
      "./../../../headless-basics-components/src/components/**/*.{ts,tsx}",
    ],
    purge: {
      enabled: true,
      content: [
        "pages/**/*.{ts,tsx}",
        "theme/**/*.{ts,tsx}",
        "sites/**/*.{ts,tsx}",
        "utils/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}"],
      options: {
        whitelistPatterns: [/^bg-/, /^text-/],
      },
    },
    theme: {
      minHeight: {
        96: "24rem",
        81: "317px",
        100: "100%",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1360px",
        },
      },
      extend: {
        colors: {
          charcoal: "var(--charcoal)",
          charcoal20: "var(--charcoal-20)",
          black45: "var(--black-45)",
          black20: "var(--black-20)",
          black80: "var(--black-80)",
          "my-yellow": "var(--yellow)",
          lighterYellow: "var(--lighter-yellow)",
          "my-white": "var(--white)",
          "my-black": "var(--black)",
          "my-blue": "var(--blue)",
          "my-brown-grey": "var(--ata-brown-grey)",
          "my-grey": "var(--grey)",
          "my-dark-blue": "var(--dark-blue)",
          "my-dark-blue-400": "var(--dark-blue-400)",
  
          // Harvard specific colors
          "harvard-crimson": "#A51C30",
          "harvard-black": "#000000",
          "harvard-white": "#FFFFFF",
          "harvard-gray": "#8C8179",
          "harvard-gold": "#C8AA76",
          
          // need to be updated
          primary: "#570df8",
          primaryText: "#fff",
          secondary: "#f000b8",
          secondaryText: "#ffffff",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
          urbanist: ["var(--font-urbanist)", "sans"],
        },
        fontSize: {
          h1: "80px",
          h2: "60px",
          h3: "40px",
          h4: "26px",
          h5: "16px",
          strap: "20px",
          body1: "16px",
          body2: "14px",
          nav: "14px",
          xxs: "10px",
        },
        lineHeight: {
          h1: "120px",
          h2: "90px",
          h3: "60px",
          h4: "39px",
          h5: "24px",
          strap: "30px",
          body1: "24px",
          body2: "21px",
          nav: "21px",
        },
        fontWeight: {
          800: 800,
          500: 500,
          400: 400,
        },
        letterSpacing: {
          "0.1em": "0.1em",
        },
        boxShadow: {
          "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
          navContent: "0 0 10px rgba(0, 0, 0, 0.2)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-25%)' }, // Adjust percentage based on number of duplicate sets
          },
        },
        animation: {
          'scroll': 'scroll var(--scroll-speed) linear infinite',
          'pause': 'none',
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        height: {
          '168': '673px',
          '100': '400px',
          '61': '245px',
          '58': '233px',
          '25': '100px',
          '48': '194px',
          '18': '75px',
        },
        width: {
          '25': '100px',
          '61': '245px',
          '95-per': '95%',
        },
        maxWidth: {
          '170': '170px',
          '236': '236px',
          '793': '793px',
        },
        zIndex: {
          '100': '100',
        },
        margin: {
          '7-per': '7%',
        }
      },
    },
    plugins: [
      // require("tailwindcss-animate"), require("daisyui"),
    ],
    daisyui: {
      themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "dark", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
    },
  }