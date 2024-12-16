module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Путь к твоим файлам
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite", // Плавное движение кубиков
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }, // Движение вверх
        },
      },
    },
  },
  plugins: [],
};
