import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import FloatingSquares from "../ui/FloatingSquares";
import CubeLogo from '../../assets/favicons/android-chrome-512x512.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const mockData = [
    { date: '2024-01-01', dailyReturn: 1.2 },
    { date: '2024-01-02', dailyReturn: -0.5 },
    { date: '2024-01-03', dailyReturn: 2.3 },
    { date: '2024-01-04', dailyReturn: -0.8 },
    { date: '2024-01-05', dailyReturn: 1.5 },
    { date: '2024-01-06', dailyReturn: 0.3 },
    { date: '2024-01-07', dailyReturn: 1.8 },
    { date: '2024-01-08', dailyReturn: -0.4 },
    { date: '2024-01-09', dailyReturn: 2.5 },
    { date: '2024-01-10', dailyReturn: 1.0 },
    { date: '2024-01-11', dailyReturn: -0.2 }
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to select 7 random entries from the mock data
    const getRandomEntries = (data, count) => {
      const shuffled = [...data].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    setData(getRandomEntries(mockData, 7));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const chartData = {
    labels: data.map(item => formatDate(item.date)),
    datasets: [
      {
        label: 'Daily Return (%)',
        data: data.map(item => item.dailyReturn),
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
          text: ''
        }
      },
      y: {
        title: {
          display: true,
          text: ''
        },
        ticks: {
          callback: (value) => `${value}%`
        }
      }
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center min-h-screen p-6">
      {/* Text Block */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-8 lg:mb-0 lg:mr-8 max-w-lg">
        <FloatingSquares overflowEnabled={true} />
        <div className="text-6xl mb-6">
          <div className="flex items-center justify-center lg:justify-start space-x-2">
            <span className="font-medium">CUBE</span>
            <img src={CubeLogo} alt="Cube Logo" className="h-16 mb-2" />
          </div>
          <span className="font-light">Profitability</span>
        </div>
        {/* Link "Learn More" */}
        <a
          target='_blank'
          href='https://www.bybit.com/copyTrade/trade-center/detail?leaderMark=rwj0pR7CZoOs22QjgrHnCA%3D%3D&copyFrom=Search'
          className='hover:underline border items-center flex justify-center border-black border py-2 px-4 backdrop-blur-lg hover:text-slate-950 transition-colors ml-1 rounded-lg text-slate-700 text-md'>
          Learn more
          <span className='text-md'> 
            <FontAwesomeIcon icon={faArrowRight} className='ml-3 text-sm' />  
          </span>
        </a>
      </div>

      {/* Chart Section */}
      <div className="flex justify-center items-center w-full max-w-3xl lg:max-w-4xl relative">
        <div 
          className="absolute inset-0 backdrop-blur-lg rounded-lg"
          style={{ zIndex: -1 }} 
        />
        <div style={{ height: '100%', width: '100%' }}>
          <Line data={chartData} options={options} />
        </div>
      </div>

    </div>
  );
}
