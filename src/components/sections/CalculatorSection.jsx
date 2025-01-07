import React, { useState, useEffect } from "react";
import FloatingSquares from "../ui/FloatingSquares";
import { useTranslation } from "react-i18next";

export default function DepositCalculator() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(1000);
  const [duration, setDuration] = useState(3);
  const [rate, setRate] = useState(12);
  const [fadeKey, setFadeKey] = useState(0);  // Состояние для обновления текста с фейдом

  const handleAmountChange = (e) => {
    const value = e.target.value;

    // Ограничиваем ввод только числами и до 9 символов
    if (value === "" || /^[0-9]{1,9}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleDurationChange = (duration, rate) => {
    setDuration(duration);
    setRate(rate);
  };

  const calculateTotal = () => {
    const validAmount = amount === "" ? 0 : parseFloat(amount);
    return (validAmount + (validAmount * rate * duration) / (12 * 100)).toFixed(2);
  };

  useEffect(() => {
    // Перезапуск анимации при каждом изменении текста
    setFadeKey(prev => prev + 1);
  }, [t, amount, duration, rate]);

  return (
    <div>
          <span
            key={fadeKey} // Меняется каждый раз при обновлении
            className="transition-opacity duration-500 text-4xl flex justify-center font-bold font-bold opacity-0 opacity-100"
          >
            {t('calculator.title')}
          </span>

    <div className="min-h-full flex w-full items-center justify-center bg-gradient-to-br mb-12 p-4 relative">
    <section className="relative bg-white p-5 rounded-2xl shadow-xl w-full max-w-lg transform transition-all">
        <div className="mb-4">
          <label className="block text-lg max-sm:text-base font-medium text-gray-700 mb-2">
            {t("calculator.investLabel")}
          </label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg max-sm:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
              maxLength={9}
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 text-lg max-sm:text-base">
              USDT
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 mb-6">
          {[
            { duration: 3, rate: 12, label: t("calculator.options.option1") },
            { duration: 6, rate: 18, label: t("calculator.options.option2") },
            { duration: 12, rate: 24, label: t("calculator.options.option3") },
          ].map(({ duration: btnDuration, rate: btnRate, label }) => (
            <button
              key={btnDuration}
              onClick={() => handleDurationChange(btnDuration, btnRate)}
              className={`flex-1 px-3 py-2 text-sm max-sm:text-xs font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors ${
                duration === btnDuration
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-blue-500 text-white rounded-full p-3 text-lg max-sm:text-base">
              %
            </div>
            <p className="text-lg max-sm:text-base font-medium text-gray-700">
              {t("calculator.resultLabel")}
            </p>
          </div>
          <p className="text-2xl max-sm:text-xl font-bold text-black">
            +{(calculateTotal() - (amount === "" ? 0 : amount)).toFixed(2)} USDT
          </p>
          <p className="text-lg max-sm:text-base font-medium text-gray-700 mt-2">
            {amount === "" ? 0 : amount} USDT = <span className="font-bold">{calculateTotal()} USDT</span>
          </p>
        </div>
        <div className="mt-6">
          <a
            href="https://t.me/CUBE_Fund_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg text-lg max-sm:text-base hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {t("calculator.investButton")}
          </a>
        </div>
      </section>
      <FloatingSquares />
    </div>
    </div>
  );
}
