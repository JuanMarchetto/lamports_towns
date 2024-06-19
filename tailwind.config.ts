import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

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
    },
  },
  plugins: [
    plugin(function ({ addComponents }: { addComponents: any }) {
      addComponents({
        '.btn': {
          heigth: 'min-content',
          "--tw-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          "--tw-shadow-colored": "0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",
          boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
          padding: "0.5rem 0.25rem",
          '&:hover': {
            "--tw-shadow": "0 0 #0000",
            "--tw-shadow-colored": "0 0 #0000",
            boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
          },
          backgroundColor: "rgb(156 163 175)",
          borderRadius: "0.250rem"
        }
      })
    })
  ],
};
export default config;
