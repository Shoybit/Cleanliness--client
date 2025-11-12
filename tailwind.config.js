import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4CAF50",
          secondary: "#FF9800",
          accent: "#9C27B0",
          neutral: "#2A2E37",
          "base-100": "#f5f5f5",
          "--text-dark": "#1f2937",
          "--text-light": "#f9fafb",
          
        },
      },
    ],
  },
};


