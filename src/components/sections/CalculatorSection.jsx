// Импортируем необходимые модули
import React, { useState } from "react";
import FloatingSquares from "../ui/FloatingSquares";
import { useTranslation } from "react-i18next";

export default function DepositCalculator() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(1000);
  const [duration, setDuration] = useState(3);
  const [rate, setRate] = useState(12);

  const handleAmountChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setAmount("");
      return;
    }

    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setAmount(parsedValue);
    }
  };

  const handleDurationChange = (duration, rate) => {
    setDuration(duration);
    setRate(rate);
  };

  const calculateTotal = () => {
    const validAmount = amount === "" ? 0 : amount;
    return (validAmount + (validAmount * rate * duration) / (12 * 100)).toFixed(2);
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-gradient-to-br mb-20 p-4 relative">
      <section className="relative p-6 rounded-3xl max-w-xl mx-auto max-sm:p-4 md:p-6 lg:p-8 shadow-2xl transform transition-all z-40 bg-white">
        <h2 className="text-3xl max-sm:text-2xl mb-6 text-center font-semibold text-black">
          {t('calculator.title')}
        </h2>
        <div className="mb-6">
          <label className="block text-lg max-sm:text-base font-light mb-2 text-gray-700">
            {t('calculator.investLabel')}
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-3 max-sm:p-2 border border-gray-300 rounded-lg text-center text-lg max-sm:text-base focus:ring-4 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105 shadow-md"
            min="0"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-3 max-sm:gap-2 mb-6">
          {[
            { duration: 3, rate: 12, label: t('calculator.options.option1') },
            { duration: 6, rate: 18, label: t('calculator.options.option2') },
            { duration: 12, rate: 24, label: t('calculator.options.option3') }
          ].map(({ duration: btnDuration, rate: btnRate, label }) => (
            <button
              key={btnDuration}
              onClick={() => handleDurationChange(btnDuration, btnRate)}
              className={`px-5 py-2 max-sm:px-4 sm:py-1 flex-grow rounded-xl text-lg max-sm:text-base font-medium text-center animate shadow-md focus:ring-4 focus:ring-blue-300 focus:outline-none ${
                duration === btnDuration
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="text-center mt-3 flex flex-col sm:flex-row sm:justify-between max-sm:items-center gap-4">
          <div className="max-sm:flex max-sm:items-center max-sm:gap-2">
            <div className="flex items-center gap-3 justify-center max-sm:justify-start mt-4 max-sm:mt-0">
              <span className="bg-blue-500 rounded-full text-white py-2 max-sm:py-1 px-3 max-sm:px-2 text-xl max-sm:text-lg">
                %
              </span>
              <p className="text-xl max-sm:text-lg text-gray-700 font-medium">
                {t('calculator.resultLabel')}
              </p>
            </div>
            <p className="text-3xl sm:text-2xl font-bold text-black my-4 max-sm:text-xl max-sm:my-2">
              +{(calculateTotal() - (amount === "" ? 0 : amount)).toFixed(2)}{" "}
              <span className="text-xl sm:text-lg font-medium">USDT</span>
            </p>
          </div>
          <div>
            <p className="text-lg max-sm:text-base font-medium text-gray-700">
              {amount === "" ? 0 : amount} USDT ={" "}
              <span className="font-bold text-black">
                {calculateTotal()} USDT
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6 max-sm:mt-4">
          <a
            className="hover:bg-blue-600 transition-colors py-4 sm:py-3 text-white text-xl max-sm:text-lg bg-blue-500 flex w-full justify-center rounded-xl"
            href="https://t.me/CUBE_Fund_bot"
            target="_blank"
          >
            {t('calculator.investButton')}
          </a>
        </div>
      </section>
      <FloatingSquares />
    </div>
  );
}
