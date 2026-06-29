import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        vzla: {
          yellow: "#FCE300",
          blue: "#003DA5",
          red: "#EF3340",
          dark: "#121212"
        },
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', 'monospace'],
        retroMono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'retro-sm': '3px 3px 0px 0px #121212',
        'retro-md': '6px 6px 0px 0px #121212',
        'retro-lg': '10px 10px 0px 0px #121212',
        'retro-blue': '6px 6px 0px 0px #003DA5',
        'retro-red': '6px 6px 0px 0px #EF3340',
      }
    },
  },
  plugins: [],
};
export default config;