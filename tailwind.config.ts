import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12305B",
        secondary: "#FC5959",
        tertiary: "#FBF9F2",
        text_secondary: "#4D533C",
        text_tertiary: "#213842",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        hero: "url('/hero.png')",
        "footer-texture": "url('/texture.png')",
      },
    },
  },
  plugins: [],
};
export default config;
