/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-color":   "#5eb9f0",
        "paragraph-color": "#60697b",
        "heading-color":   "#343f52",
         skyblue:          "#e5f4fd",
         white:            "#ffffff",
        "light-gray":      "#f0f8fe",
         gray:             "#fefefe",
        "footer-p":        "#CACACA",
      },
    },
  },
  plugins: [],
};
