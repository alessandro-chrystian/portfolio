/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'primary': "#3855d8",
        "primary-content": "#ffffff",
        "primary-dark": "#243fb9",
        "primary-light": "#6379e0",

        'secondary': "#8638d8",
        "secondary-content": "#ffffff",
        "secondary-dark": "#6d24b9",
        "secondary-light": "#a063e0",

        'background': "#ecedf3",
        'foreground': "#fafbfc",
        'border': "#d8dae6",

        'copy': "#1e212f",
        "copy-light": "#4f577d",
        "copy-lighter": "#727ca6",

        'success': "#38d838",
        'warning': "#d8d838",
        'error': "#d83838",

        "success-content": "#030e03",
        "warning-content": "#0e0e03",
        "error-content": "#ffffff",

        'dark-background': "#14161f",
        'dark-foreground': "#1e212f",
        'dark-border': "#31364e",

        'dark-copy': "#fafbfc",
        'dark-copy-light': "#d0d3e1",
        'dark-copy-lighter': "#9199ba",

        'javascript-logo': '#f0db4f',
        'react-logo': '#61DBFB',
        'node-logo': '#3c873a',
        'bootstrap-logo': '#563d7c',
        'tailwind-logo': '#6d28d9',
        'css-logo': '#264de4',
        'html-logo': '#f06529'
    },
  },
}