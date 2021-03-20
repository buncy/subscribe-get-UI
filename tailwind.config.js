module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        card: "2.2rem",
      },
      colors: {
        "btn-disabled": "#C9C9C9",
        "btn-active": "#009FE3",
        input: "#F5F6F9",
        "section-bg1": "#1c2632",
        "section-bg2": "#0D131C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
