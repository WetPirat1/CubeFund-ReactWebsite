// src/components/ui/Loader.jsx

import { useState, useEffect } from "react";
import LogoSpin from "../../../public/assets/icons/LogoFooterIcon"; // Импорт логотипа

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Отключаем прокрутку на время показа лоадера
    document.body.style.overflow = "none"; 

    // Таймер задержки перед скрытием лоадера
    const timer = setTimeout(() => {
      setIsLoaded(true); // После 3 секунд загрузка считается завершенной
    }, 1150); // Задержка в 3000 миллисекунд (3 секунды)

    // Восстановление прокрутки через 3 секунды
    const restoreScroll = setTimeout(() => {
      document.body.style.overflow = "auto"; // Включаем прокрутку
    }, 1150); // Время, совпадающее с длительностью показа лоадера

    // Очистка таймеров и восстановление прокрутки при размонтировании компонента
    return () => {
      clearTimeout(timer);
      clearTimeout(restoreScroll);
      document.body.style.overflow = "auto"; // Восстановить прокрутку при размонтировании компонента
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white flex justify-center items-center z-50 transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Логотип с анимацией вращения */}
      <div className="animate-spin-stop">
        <LogoSpin className="w-32 h-32 text-white" />
      </div>
    </div>
  );
};

export default Loader;
