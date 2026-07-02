import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "med-bg": "#000000",
        "med-panel": "#05070d",
        "med-panel-soft": "#080d16",
        "med-cyan": "#39e6d0",
        "med-blue": "#48a8ff",
        "med-ink": "#d8f7ff"
      },
      boxShadow: {
        glow: "0 0 34px rgba(57, 230, 208, 0.18)"
      },
      backgroundImage: {
        "radial-scan": "radial-gradient(circle at 20% 10%, rgba(72, 168, 255, 0.14), transparent 30%), radial-gradient(circle at 80% 0%, rgba(57, 230, 208, 0.1), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
