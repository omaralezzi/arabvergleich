import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#123B66",
          blue: "#1F5E99",
          orange: "#E67E22",
          mist: "#F3F6F9",
          ink: "#1B2A3A",
        },
      },
      boxShadow: {
        soft: "0 14px 40px rgba(18, 59, 102, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
