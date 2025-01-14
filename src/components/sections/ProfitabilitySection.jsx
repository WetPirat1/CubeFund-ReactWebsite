// ProfitabilitySection.js
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useTranslation } from 'react-i18next';
import FloatingSquares from "../ui/FloatingSquares";
import CubeLogo from '../../assets/favicons/android-chrome-512x512.png';
import { fetchDailyPnL } from '../../api/supabaseClient';

// Регистрация модулей Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export default function ProfitabilitySection() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState(1); // Таймфрейм в месяцах

  // Загружаем данные из Supabase при монтировании компонента
  useEffect(() => {
    const loadData = async () => {
      try {
        const pnlData = await fetchDailyPnL();
        if (pnlData) {
          const formattedData = pnlData.map((item) => ({
            date: item.date,
            dailyReturn: parseFloat(item.daily_pnl) // Приведение значений PnL к числовому типу
          }));
          setData(formattedData);
        }
      } catch (error) {
        console.error(t('profitability.errors.loadDataError'), error);
      }
    };

    loadData();
  }, [t]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Фильтруем данные по текущему таймфрейму
  const filteredData = data.filter((item) => {
    const date = new Date(item.date);
    const today = new Date();
    const timeframeStart = new Date(
      today.getFullYear(),
      today.getMonth() - timeframe,
      today.getDate()
    );
    return date >= timeframeStart;
  });

  const chartData = {
    labels: filteredData.map(item => formatDate(item.date)),
    datasets: [
      {
        label: t('profitability.chart.dailyProfitReturn'),
        data: filteredData.map(item => item.dailyReturn),
        fill: true,
        borderColor: '#8884d8',
        backgroundColor: (context) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(136, 132, 216, 0.3)');
          gradient.addColorStop(1, 'rgba(136, 132, 216, 0.1)');
          return gradient;
        },
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`
        }
      }
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxRotation: 45,
          minRotation: 45,
        },
        title: {
          display: false,
        }
      },
      y: {
        ticks: {
          callback: (value) => `${value}%`
        },
        title: {
          display: false,
        }
      }
    },
    elements: {
      point: {
        radius: 8,
        hoverRadius: 15,
        backgroundColor: '#8884d8',
        borderWidth: 1,
      }
    },
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center min-h-full max-w-full px-2 py-2">
      {/* Text Block */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-lg px-4">
        <FloatingSquares overflowEnabled={true} />
        <img src={CubeLogo} alt={t('profitability.alt.cubeLogo')} className="h-20" />
        <div className="flex mb-3">
          <div className="text-center lg:text-start items-center justify-center lg:justify-start space-x-1">
            <span className="font-bold text-xl lg:text-5xl">
              {t('profitability.title.cubeFund')}
              <br />
              <span className="font-light text-5xl">{t('profitability.title.profitability')}</span>
            </span>
          </div>
        </div>
        {/* Кнопки для выбора таймфрейма */}
        <div className="flex space-x-2 mt-4">
          {[1, 2, 3].map((month) => (
            <button
              key={month}
              onClick={() => setTimeframe(month)}
              className={` px-5 py-2 rounded-xl transition-all duration-300 ease-in-out transform ${
                timeframe === month ? 'bg-blue-500 text-white scale-110' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {t(`profitability.timeframes.${month}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex justify-center items-center w-full max-w-3xl lg:max-w-4xl relative mt-8 mb-2 p-2">
        <div
          className="absolute inset-0 backdrop-blur-lg rounded-lg"
          style={{ zIndex: -1 }}
        />
        <div className="w-full lg:h-[600px] flex justify-center items-center rounded-xl">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}
