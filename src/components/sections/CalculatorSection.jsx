import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import FloatingSquares from "../ui/FloatingSquares"; // Импортируем FloatingSquares
import { useTranslation } from "react-i18next"; // Импортируем для перевода
import LogoRatio from "../../../public/assets/icons/LogoIcon.png"

export default function DepositCalculator() {
  const { t } = useTranslation(); // Инициализация перевода
  const initialDepositValue = 1000;
  const contributionValue = 50;
  const contributionFrequencyValue = "monthly";
  const yearsToGrowValue = 10;
  const annualReturnValue = 25;

  const [initialDeposit, setInitialDeposit] = useState(initialDepositValue);
  const [contribution, setContribution] = useState(contributionValue);
  const [contributionFrequency, setContributionFrequency] = useState(
    contributionFrequencyValue
  );
  const [yearsToGrow, setYearsToGrow] = useState(yearsToGrowValue);
  const [annualReturn, setAnnualReturn] = useState(annualReturnValue);
  const [chartData, setChartData] = useState([]);
  const [futureBalance, setFutureBalance] = useState(null);

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
    const ratePerPeriod = annualReturn / 100 / frequency;

    const totalData = [];
    for (let year = 1; year <= yearsToGrow; year++) {
      for (let period = 1; period <= frequency; period++) {
        balance += contributions;
        totalContributions += contributions;
        balance += balance * ratePerPeriod;
      }
      totalData.push({
        year: new Date().getFullYear() + year,
        investment: parseFloat(totalContributions.toFixed(2)),
        profit: parseFloat((balance - totalContributions).toFixed(2)),
      });
    }

    setFutureBalance(balance.toFixed(2));
    return totalData;
  };

  const handleCalculate = () => {
    const data = calculateFutureBalance();
    setChartData(data);
  };

  useEffect(() => {
    handleCalculate();
  }, []);

  const handleNumberInput = (e, setter) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-start lg:items-center lg:justify-center gap-6 p-6 sm:p-8 sm:justify-center lg:p-12 min-h-screen">
      <FloatingSquares overflowEnabled={true} />

      {/* Calculator */}
      <div className="block text-center self-center sm:w-90 p-8 rounded-3xl z-10 backdrop-blur-lg pb-7 shadow-md bg-white bg-opacity-30 sm:mr-20">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          {t("calculator.title")}
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("calculator.initialDeposit")}
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-lg">
              $
            </span>
            <input
              type="text"
              value={initialDeposit}
              onChange={(e) => handleNumberInput(e, setInitialDeposit)}
              className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-full text-lg focus:ring-0 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("calculator.contribution")}
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-lg">
              $
            </span>
            <input
              type="text"
              value={contribution}
              onChange={(e) => handleNumberInput(e, setContribution)}
              className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-full text-lg focus:ring-0 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("calculator.frequency")}
          </label>
          <div className="grid grid-cols-2 gap-4">
            {["daily", "weekly", "monthly", "annual"].map((option) => (
              <button
                key={option}
                onClick={() => setContributionFrequency(option)}
                className={`px-3 py-2 rounded-full text-base font-semibold shadow-sm focus:outline-none transition-all transform ${
                  contributionFrequency === option
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {t(`calculator.frequencyPeriod.${option}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-md font-medium text-gray-700">
              {t("calculator.yearsToGrow")}
            </label>
            <span className="text-blue-600 font-mono">
              {yearsToGrow} {t("calculator.years")}
            </span>
          </div>
          <div className="relative bg-gray-100 bg-opacity-50 backdrop-blur-md rounded-xl p-4 pb-5">
            <input
              type="range"
              min="1"
              max="30"
              value={yearsToGrow}
              onChange={(e) => setYearsToGrow(e.target.value)}
              className="slider-custom w-full"
              style={{
                "--thumb-image": `url(${LogoRatio})`,
              }}
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-md font-medium text-gray-700">
              {t("calculator.annualReturn")}
            </label>
            <span className="text-blue-600 font-mono">{annualReturn}%</span>
          </div>
          <div className="relative bg-gray-100 bg-opacity-50 backdrop-blur-md rounded-xl p-4 pb-5">
            <input
              type="range"
              min="1"
              max="99"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              className="slider-custom w-full"
              style={{
                "--thumb-image": `url(${LogoRatio})`,
              }}
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-3 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          {t("calculator.calculate")}
        </button>
      </div>

      {/* Chart */}
      <div className="w-full lg:w-1/2 p-8 rounded-3xl shadow-md backdrop-blur-lg shadow-md bg-gray-100 bg-opacity-20 border border-gray-200 z-10">
        {chartData.length > 0 ? (
          <>
            <div className="mb-6 text-center">
              <h2 className="text-xl font-light">
                {t("calculator.futureBalance")}
              </h2>
              <p className="text-4xl font-mono text-black">${futureBalance}</p>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 0, left: 20, bottom: 5 }}
                className="rounded-t-3xl overflow-hidden"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip />
                <Legend
                  wrapperStyle={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontSize: "14px",
                  }}
                />
                <Bar
                  dataKey="investment"
                  stackId="a"
                  fill="rgba(54, 162, 235, 0.6)"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey="profit"
                  stackId="a"
                  fill="rgba(75, 192, 192, 0.6)"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </>
        ) : (
          <p className="text-center text-gray-500">
            {t("calculator.chartInstruction")}
          </p>
        )}
      </div>
    </div>
  );
}
