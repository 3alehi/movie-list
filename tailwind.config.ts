import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:"#141414",
        "black-velvet" : "#0F0F0F",
        "text-gray" : "#BFBFBF",
        "bg-black" : "#1A1A1A",
        "gray-9" : "#999999",
        "red-btn" : "#E50000",
        "bg-navbar" : "#333333",
        "hr":"#262626"
      
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1300px'
      },
      
    },
  },
  plugins: [],
} satisfies Config;
