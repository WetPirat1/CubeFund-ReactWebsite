import React, { useState } from "react";
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
  const [initialDeposit, setInitialDeposit] = useState(100);
  const [contribution, setContribution] = useState(5);
  const [contributionFrequency, setContributionFrequency] = useState("daily");
  const [yearsToGrow, setYearsToGrow] = useState(5);
  const [annualReturn, setAnnualReturn] = useState(25);

  const [chartData, setChartData] = useState(null); // Храним данные для графика

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
    return totalData;
  };

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
        },
        {
          label: "Profit",
          data: data.map((d) => d.profit),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    setChartData(updatedChartData);
  };

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

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-6 p-4 sm:p-6 lg:p-12 bg-gray-50 min-h-screen">
      {/* Калькулятор */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Deposit Calculator</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Initial Deposit</label>
          <input
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            className="w-full px-4 py-2 border-b-2 border-blue-500 focus:ring-0 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Contribution</label>
          <input
            type="number"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            className="w-full px-4 py-2 border-b-2 border-blue-500 focus:ring-0 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Frequency</label>
          <select
            value={contributionFrequency}
            onChange={(e) => setContributionFrequency(e.target.value)}
            className="w-full px-4 py-2 border-b-2 border-blue-500 focus:ring-0 focus:outline-none"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>
        </div>

        <div className="mb-4 flex items-center gap-4">
          <label className="block text-sm font-medium text-gray-700">Years to Grow</label>
          <input
            type="range"
            min="1"
            max="30"
            value={yearsToGrow}
            onChange={(e) => setYearsToGrow(e.target.value)}
            className="slider-custom"
          />
        </div>

        <div className="mb-4 flex items-center gap-4">
          <label className="block text-sm font-medium text-gray-700">Annual Return (%)</label>
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
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-3xl shadow-lg">
        {chartData ? <Bar data={chartData} options={chartOptions} /> : <p className="text-center text-gray-500">Enter data and click calculate to see the chart.</p>}
      </div>
    </div>
  );
}
