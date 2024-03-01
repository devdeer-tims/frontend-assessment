import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#04D1BC',
      'secondary': '#06293D',
      'accent': '#EE8952',
      'white': '#FFFFFF',
      'error': '#E53935',
    },
  },
  plugins: [],
};
export default config;
