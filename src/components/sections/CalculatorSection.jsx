import React, { useState } from "react";
import FloatingSquares from "../ui/FloatingSquares";

export default function DepositCalculator() {
  const [amount, setAmount] = useState(1000);
  const [duration, setDuration] = useState(3);
  const [rate, setRate] = useState(12);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleDurationChange = (duration, rate) => {
    setDuration(duration);
    setRate(rate);
  };

  const calculateTotal = () => {
    return (amount + (amount * rate * duration) / (12 * 100)).toFixed(2);
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-gradient-to-br mb-20 p-4 relative">
      {/* FloatingSquares as background */}
      <div className="absolute inset-0 z-0"></div>

      {/* Main content section */}
      <section className="relative p-8 rounded-3xl max-w-xl mx-auto sm:p-6 md:p-8 lg:p-10 shadow-2xl transform transition-all z-10">
        <h2 className="text-4xl md:text-5xl mb-12 text-center font-semibold text-black">
          Calculate Profit
        </h2>

        {/* Input Section */}
        <div className="mb-8">
          <label className="block text-lg font-light mb-2 text-gray-700">
            You invest
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-4 border border-gray-300 rounded-lg text-center text-lg focus:ring-4 focus:ring-blue-500 focus:outline-none transition-transform transform hover:scale-105 shadow-md"
            min="0"
          />
        </div>

        {/* Duration Buttons */}

        <div className="flex flex-wrap justify-between gap-4 mb-8">
          {[
            { duration: 3, rate: 12, label: "3 мес - 12%" },
            { duration: 6, rate: 18, label: "6 мес - 18%" },
            { duration: 12, rate: 24, label: "12 мес - 24%" },
          ].map(({ duration: btnDuration, rate: btnRate, label }) => (
            <button
              key={btnDuration}
              onClick={() => handleDurationChange(btnDuration, btnRate)}
              className={`px-6 py-3 flex-grow rounded-xl text-lg font-medium text-center animate shadow-md focus:ring-4 focus:ring-blue-300 focus:outline-none ${
                duration === btnDuration
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Result Section */}
        <div className="text-center mt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 justify-center sm:justify-start mt-4">
              <span className="bg-blue-500 rounded-full text-white py-3 px-4 text-xl">
                %
              </span>
              <p className="text-xl  text-gray-700 font-medium">Вы получите</p>
            </div>
            <p className="text-4xl font-bold text-black mt-4 mb-4 ">
              +{(calculateTotal() - amount).toFixed(2)}{" "}
              <span className="text-xl font-medium">USDT</span>
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-700">
              {amount} USDT ={" "}
              <span className="font-bold text-black">
                {calculateTotal()} USDT
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a
            className="hover:bg-blue-600 transition-colors py-4 text-white text-xl bg-blue-500 flex w-full justify-center rounded-xl"
            href="https://t.me/CUBE_Fund_bot"
            target="_blank"
          >
            Invest
          </a>
        </div>
      </section>
  );
}
