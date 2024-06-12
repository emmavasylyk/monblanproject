/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
      xsOnly: { max: "344px" },
      extra: { min: "464px", max: "767.98px" },
      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXl: { max: "1279.98px" },
    },
    boxShadow: {
      grayy:
        "0px 12px 24px 0px rgba(0, 0, 0, 0.12) inset, 0px 4px 24px 0px rgba(0, 0, 0, 0.12);", // class="shadow-grey"
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        body: "#FAFAFA",
        blue: "#3D8EDA",
        grey: "#DEDEDE",
        black: "#000000",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "1.5rem",
          md: "2rem",
          xl: "2rem",
        },
      },
    },
  },
  plugins: [],
};
