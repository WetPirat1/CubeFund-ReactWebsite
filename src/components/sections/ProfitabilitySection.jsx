import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import FloatingSquares from "../ui/FloatingSquares";
import CubeLogo from '../../assets/favicons/android-chrome-512x512.png'

// Регистрируем компоненты Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ProfitabilitySection() {
  // Замокапленные данные
  const mockData = [
    { date: '2024-01-01', dailyReturn: 1.2 },
    { date: '2024-01-02', dailyReturn: -0.5 },
    { date: '2024-01-03', dailyReturn: 2.3 },
    { date: '2024-01-04', dailyReturn: -0.8 },
    { date: '2024-01-05', dailyReturn: 1.5 },
  ];

  const [data, setData] = useState(mockData);

  useEffect(() => {
    // Если будете подключать API, замените setData на fetch запрос
    // setData(mockData) используется только для демонстрации
    setData(mockData);
  }, []);

  // Функция для преобразования даты в нужный формат
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options); // Формат: "01 January 2024"
  };

  // Настройка данных для Chart.js
  const chartData = {
    labels: data.map(item => formatDate(item.date)), // Преобразуем дату в новый формат
    datasets: [
      {
        label: 'Daily Return (%)',
        data: data.map(item => item.dailyReturn), // Данные о доходности
        fill: false,
        borderColor: '#8884d8',
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
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Daily Return (%)'
        },
        ticks: {
          callback: (value) => `${value}%`
        }
      }
    }
  };

  return (
    <div className="relative p-16 flex flex-col lg:flex-row justify-center items-center">
      {/* Блок с текстом */}
      <div className="ml-16 w-full lg:w-[30%] mb-8 lg:mb-0">
        <FloatingSquares overflowEnabled={true} />
        
        {/* Text */}
        <div className="text-left font-light text-6xl mb-10">
            <div className="flex items-center justify-start space-x-2"> 
                {/* Логотип и текст */}
                <span className=''>CUBE</span>
                <img src={CubeLogo} alt="Cube Logo" className="h-16 mb-2" />

            </div>

            {/* Текст "Profitability" под логотипом */}
            <span className=" font-thin">Profitability</span>
        </div>

        </div>

      {/* Chart */}
      <div className="ml-10 w-full lg:w-[70%]"> {/* Установлено 70% ширины */}
        {/* Контейнер с размытым фоном для графика */}
        <div
          className="shadow-s"
          style={{
            background: 'rgba(255, 255, 255, 0.0)', // Прозрачный фон
            backdropFilter: 'blur(8px)', // Эффект размытия
            borderRadius: '1px'
          }}
        >
          {/* Увеличиваем размер графика */}
          <div style={{ height: '500px', width: '100%' }}> {/* Увеличена высота и добавлена ширина */}
            {/* График с размерами */}
            <Line data={chartData} options={options} height={500} width={700} />
          </div>
        </div>
      </div>
    </div>
  );
}
