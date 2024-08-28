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
      spacing: {
        '112': '28rem',  // New custom value (448px)
        '128': '32rem',  // New custom value (512px)
        '144': '36rem',  // New custom value (576px)
        '160': '40rem',  // New custom value (640px)
        '176': '44rem',  // New custom value (704px)
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};

export default config;
