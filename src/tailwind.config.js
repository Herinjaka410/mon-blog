module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FF6B6B',
          secondary: '#4ECDC4',
          dark: '#292F36',
          light: '#F7FFF7',
        },
        spacing: {
          '128': '32rem',
        }
      },
    },
    plugins: [],
  }
  