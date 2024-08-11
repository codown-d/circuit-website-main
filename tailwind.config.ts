import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        outer: "0px 0px 20px rgba(0, 0, 0, 0.10)",
        gb: "0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset",
      },
      fontFamily: {
        monument: ["Monument Extended", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};
export default config;
