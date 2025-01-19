import { useEffect, useState } from 'react';
import { fetchProfitData, fetchReserveData } from '../../api/supabaseClient'; // Импорты
import FloatingSquares from "../ui/FloatingSquares"; // Ваш компонент для фона
import { useInView } from 'react-intersection-observer'; // Хук для отслеживания видимости элемента

const ProfitBoxes = () => {
  const [profitData, setProfitData] = useState({ invested: 0, rewarded: 0 });
  const [displayProfitData, setDisplayProfitData] = useState({ invested: 0, rewarded: 0 }); // Анимируемое состояние
  const [reserve, setReserve] = useState(0);
  const [displayReserve, setDisplayReserve] = useState(0); // Анимируемое состояние для резерва
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 }); // Отслеживание видимости

  // Загружаем данные из Supabase при монтировании компонента
  useEffect(() => {
    const getData = async () => {
      const profit = await fetchProfitData(); // Получаем данные о прибыли
      const reserveValue = await fetchReserveData(); // Получаем данные о резервах

      if (profit) setProfitData(profit);
      setReserve(reserveValue); // Устанавливаем значение резерва
    };

    getData();
  }, []);

  // Анимация чисел (с плавным изменением и медленной скоростью, замедленной на 10%)
  const animateValue = (start, end, duration, setter) => {
    const range = end - start;
    let current = start;
    const stepTimeBase = 5.5; // Увеличили значение на 10%, чтобы сделать анимацию медленнее

    const timer = () => {
      const stepTime = stepTimeBase * Math.max(1, Math.floor((range / (end - current)) * 10)); // Ускоряем изменение числа
      current += Math.sign(range) * (range / 100); // Быстро увеличиваем или уменьшаем на больший процент

      setter(Math.round(current)); // Округляем до целых чисел

      if (Math.abs(current - end) >= 1) {
        requestAnimationFrame(timer); // Рекурсивный вызов для плавной анимации
      } else {
        setter(Math.round(end)); // Обеспечиваем точный результат
      }
    };

    timer(); // Запуск анимации
  };

  // Запускаем анимацию, когда элемент появляется в области видимости
  useEffect(() => {
    if (inView) {
      animateValue(0, profitData.invested, 1000, (value) =>
        setDisplayProfitData((prev) => ({ ...prev, invested: value }))
      );
      animateValue(0, profitData.rewarded, 1000, (value) =>
        setDisplayProfitData((prev) => ({ ...prev, rewarded: value }))
      );
      animateValue(0, reserve, 1000, setDisplayReserve);
    }
  }, [inView, profitData, reserve]);

  return (
    <div
      ref={ref}
      className="w-full relative flex flex-col justify-center items-center lg:mb-32 px-4 sm:px-8"
    >
      {/* Floating Squares Background */}
      <FloatingSquares overflowEnabled={true} />

      {/* Контейнер для плашек с максимальной шириной */}
      <div
        className={`w-full max-sm:mt-12 max-w-[1200px] lg:gap-10 md:gap-10 flex flex-col space-y-8 sm:space-y-0 sm:flex-row justify-between items-center z-10 relative opacity-0 transform translate-y-10 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
      >
        {/* Invested Box */}
        <div className="flex-1 w-full max-w-none">
          <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-md px-6 py-6 sm:py-8 rounded-3xl flex flex-col justify-center items-center">
            <span className="px-6 py-1 bg-blue-300 rounded-3xl font-mono text-xl">Invested</span>
            <span className="text-4xl mt-3 p-3 rounded-3xl">{`$${displayProfitData.invested.toLocaleString()}`}</span>
          </div>
        </div>

        {/* Rewarded Box */}
        <div className="flex-1 w-full max-w-none">
          <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-md px-6 py-6 sm:py-8 rounded-3xl flex flex-col justify-center items-center">
            <span className="px-6 py-1 bg-green-300 rounded-3xl font-mono text-xl">Rewarded</span>
            <span className="text-4xl mt-3 p-3 rounded-3xl">{`$${displayProfitData.rewarded.toLocaleString()}`}</span>
          </div>
        </div>
      </div>

      {/* Fund Reserve Balance */}
      <div
        className={`mt-12 w-full max-w-[800px] flex justify-center opacity-0 transform translate-y-10 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
      >
        <div className="bg-opacity-50 backdrop-blur-md px-6 py-6 sm:py-8 rounded-3xl flex flex-col justify-center items-center">
          <span className="px-6 py-1 bg-gray-800 rounded-3xl font-mono text-white text-xl">Fund Reserves</span>
          <span className="text-6xl mt-3 p-3 rounded-3xl">{`$${displayReserve.toLocaleString()}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfitBoxes;
