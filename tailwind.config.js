const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/useNavigation.js",
  ],
  theme: {
    screens: {
      xs: "520px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "blue-grey": {
          50: "#eceff1",
          100: "#cfd8dc",
          200: "#b0bec5",
          300: "#90a4ae",
          400: "#78909c",
          500: "#607d8b",
          600: "#546e7a",
          700: "#455a64",
          800: "#37474f",
          900: "#263238",
        },
        white: "#ECEFF1",
        header: {
          DEFAULT: "#18FFFF",
        },
        secondary: {
          DEFAULT: "#878787",
        },
        background: {
          DEFAULT: "#0f1415",
        },
        "background-secondary": {
          DEFAULT: "#121616",
        },
        cta: {
          DEFAULT: "#263238",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.serif],
        mono: ["Inconsolata", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
