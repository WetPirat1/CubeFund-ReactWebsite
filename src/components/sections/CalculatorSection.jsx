import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DepositCalculator() {
  // Устанавливаем начальные значения для первого расчёта
  const initialDepositValue = 1000;
  const contributionValue = 50;
  const contributionFrequencyValue = "monthly";
  const yearsToGrowValue = 5;
  const annualReturnValue = 10;

  const [initialDeposit, setInitialDeposit] = useState(initialDepositValue);
  const [contribution, setContribution] = useState(contributionValue);
  const [contributionFrequency, setContributionFrequency] = useState(contributionFrequencyValue);
  const [yearsToGrow, setYearsToGrow] = useState(yearsToGrowValue);
  const [annualReturn, setAnnualReturn] = useState(annualReturnValue);
  const [chartData, setChartData] = useState(null);
  const [futureBalance, setFutureBalance] = useState(null); // Новая переменная для итогового баланса

  // Функция для расчета будущего баланса
  const calculateFutureBalance = () => {
    const frequency = {
      daily: 365,
      weekly: 52,
      monthly: 12,
      annual: 1,
    }[contributionFrequency];

    let balance = parseFloat(initialDeposit);
    let totalContributions = parseFloat(initialDeposit);
    const contributions = parseFloat(contribution);
    const ratePerPeriod = (annualReturn / 100) / frequency;

    const totalData = [];
    for (let year = 1; year <= yearsToGrow; year++) {
      for (let period = 1; period <= frequency; period++) {
        balance += contributions;
        totalContributions += contributions;
        balance += balance * ratePerPeriod;
      }
      totalData.push({
        year: new Date().getFullYear() + year,
        investment: totalContributions.toFixed(2),
        profit: (balance - totalContributions).toFixed(2),
      });
    }

    setFutureBalance(balance.toFixed(2)); // Устанавливаем итоговый баланс
    return totalData;
  };

  // Функция для установки данных графика
  const handleCalculate = () => {
    const data = calculateFutureBalance();
    const labels = data.map((d) => d.year);

    const updatedChartData = {
      labels,
      datasets: [
        {
          label: "Investment",
          data: data.map((d) => d.investment),
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          borderRadius: 10, // Добавляем закругление углов столбцов
        },
        {
          label: "Profit",
          data: data.map((d) => d.profit),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          borderRadius: 10, // Добавляем закругление углов столбцов
        },
      ],
    };

    setChartData(updatedChartData);
  };

  // Эффект для предварительного расчета при загрузке компонента
  useEffect(() => {
    handleCalculate(); // Раннее вычисление при первой загрузке
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "Arial, sans-serif",
          },
          color: "#4A5568",
        },
      },
      title: {
        display: true,
        text: "Investment and Profit Growth Over Time",
        font: {
          size: 18,
          family: "Arial, sans-serif",
        },
        color: "#2D3748",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          font: {
            size: 14,
          },
          color: "#4A5568",
        },
        grid: {
          color: "#E2E8F0",
        },
        stacked: true,
      },
      y: {
        title: {
          display: true,
          text: "Amount (USD)",
          font: {
            size: 14,
          },
          color: "#4A5568",
        },
        grid: {
          color: "#E2E8F0",
        },
        stacked: true,
      },
    },
  };

  // Функция для обработки только числового ввода
  const handleNumberInput = (e, setter) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {  // Позволяет только числа с возможной десятичной точкой
      setter(value);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-6 p-6 sm:p-8 lg:p-12 min-h-screen">
      {/* Калькулятор */}
      <div className="w-full lg:w-1/3 bg-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">Deposit Calculator</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Initial Deposit</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-lg">$</span>
            <input
              type="text"
              value={initialDeposit}
              onChange={(e) => handleNumberInput(e, setInitialDeposit)} // Применение функции обработки ввода
              className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-full text-lg focus:ring-0 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Contribution</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-lg">$</span>
            <input
              type="text"
              value={contribution}
              onChange={(e) => handleNumberInput(e, setContribution)} // Применение функции обработки ввода
              className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-full text-lg focus:ring-0 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
          <div className="grid grid-cols-2 gap-4">
            {["daily", "weekly", "monthly", "annual"].map((option) => (
              <button
                key={option}
                onClick={() => setContributionFrequency(option)}
                className={`px-3 py-2 rounded-full text-base font-medium shadow-sm focus:outline-none transition-all transform ${
                  contributionFrequency === option
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">Years to Grow</label>
            <span className="text-blue-600 font-bold">{yearsToGrow} years</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={yearsToGrow}
            onChange={(e) => setYearsToGrow(e.target.value)}
            className="slider-custom"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">Annual Return (%)</label>
            <span className="text-blue-600 font-bold">{annualReturn}%</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(e.target.value)}
            className="slider-custom"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300"
        >
          Calculate
        </button>
      </div>

      {/* График */}
      <div className="w-full lg:w-2/3 bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
        {chartData ? (
          <>
            <div className="mb-6 text-center">
              <h2 className="text-xl font-light ">Potential Future Balance:</h2>
              <p className="text-4xl font-bold text-blue-500">${futureBalance}</p>
            </div>
            <Bar data={chartData} options={chartOptions} />
          </>
        ) : (
          <p className="text-center text-gray-500">Enter data and click calculate to see the chart.</p>
        )}
      </div>
    </div>
  );
}
