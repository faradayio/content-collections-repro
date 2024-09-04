const { fontFamily } = require("tailwindcss/defaultTheme");
const { colors } = require("./src/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1344px",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      xr: "1.125rem",
      md: "1.25rem",
      lg: "1.5rem",
      xm: "2rem",
      xl: "2.5rem",
      xxl: "3rem",
      "2xl": "3.375rem",
    },
    extend: {
      keyframes: {
        rightToLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        spinx: {
          "0%": { transform: "rotateX(0)" },
          "100%": { transform: "rotateX(1turn)" },
        },
      },
      animation: {
        "right-to-left": "rightToLeft 0.2s ease-out",
        "fade-in-down": "fadeInDown 0.1s",
        spinx: "spinx 1.35s ease-in-out infinite",
      },
      zIndex: {
        header: "100",
        overlay: "200",
        dialog: "300",
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "2/1": "2 / 1",
      },
      container: {
        center: true,
      },
      backgroundImage: {
        notebook_coil: "url('/images/notebook_coil.svg')",
      },
      fontFamily: {
        sans: ["var(--font-aktiv-grotesk)", ...fontFamily.sans],
      },
      colors,
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#000",
            a: {
              color: theme("colors.supertrope.ui"),
              "&:hover": {
                textDecoration: "none",
              },
            },
            "h1,h2,h3,h4,h5,h6": { fontWeight: 600 },
            // Docs often use blockquote tags to callout text, but they aren't real quotes.
            // Blogs do use some quotes. Style them more generally to suit both cases.
            blockquote: {
              fontStyle: "normal",
              paddingInline: theme("spacing.2"),
              borderLeft: "2px solid",
              borderColor: theme("colors.heliotrope"),
              "& > p": {
                "&:before": {
                  content: "''", // this means no content 🥴
                },
                "&:after": {
                  content: "''",
                },
              },
            },
            // Remove backticks from default styles. Monospace font is enough indicator.
            // Can't just use a `code: {}` style block here. See issue:
            // https://github.com/tailwindlabs/tailwindcss-typography/issues/18
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
