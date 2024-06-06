/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      // maxWidth: {
      //   "prose-narrow": "20ch",
      // },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      colors: {
        // msky: "#E2EBFE",
        msky: "#DFECFF",
        mred: "#DD466F",
        msun: "#FDFAEF",
        lbox: "#020927",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
  // darkMode: "class",
};
