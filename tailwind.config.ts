import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        

        primary: {
          "100": "#B4D4FD",
          "200": "#83B7FC",
          
        },
        white: "#ffffff",
        black: "#000",
        border:"#e5eceb",
        lightText:"#7b8192"
      },
    },
  },
  plugins: [],
};
export default config;
