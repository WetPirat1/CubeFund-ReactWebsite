import React, { useState } from "react";

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
    <section className="p-8 bg-white rounded shadow-md max-w-xl mx-auto sm:p-6 md:p-8 lg:p-10">
      {/* Input Section */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Вы вносите</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-full p-3 border border-gray-300 rounded text-center text-lg transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 transform focus:scale-105" // Smooth focus animation
          min="0"
        />
      </div>

      {/* Duration Buttons */}
      <div className="flex flex-wrap justify-between gap-2 mb-6">
        <button
          onClick={() => handleDurationChange(3, 12)}
          className={`px-4 py-2 flex-grow rounded-xl text-lg font-medium text-center transition-all duration-300 ease-in-out transform hover:scale-105 ${
            duration === 3 ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          3 мес - 12%
        </button>
        <button
          onClick={() => handleDurationChange(6, 18)}
          className={`px-4 py-2 flex-grow rounded-xl text-lg font-medium text-center transition-all duration-300 ease-in-out transform hover:scale-105 ${
            duration === 6 ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          6 мес - 18%
        </button>
        <button
          onClick={() => handleDurationChange(12, 24)}
          className={`px-4 py-2 flex-grow rounded-xl text-lg font-medium text-center transition-all duration-300 ease-in-out transform hover:scale-105 ${
            duration === 12 ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          12 мес - 24%
        </button>
      </div>

      {/* Result Section */}
      <div className="text-center mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <img
              className="w-9 h-9"
              src="./src/assets/icons/LogoIcon.png"
              alt=""
            />
            <p className="text-xl mb-2">Вы получите</p>
          </div>
          <p className="text-4xl font-bold">
            +{(calculateTotal() - amount).toFixed(2)} <span className="text-xl font-thin">USDT</span>
          </p>
        </div>
        <div>
          <p className="text-lg">
            {amount} USDT = <span>{calculateTotal()} USDT</span>
          </p>
        </div>
      </div>
    </section>
  );
}
