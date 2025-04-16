
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: { keyframes: {
      bounceCustom: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
    animation: {
      bounceCustom: 'bounceCustom 1s infinite',
    },
  },
  },
  plugins: [],
};
