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
    <div className="relative flex flex-col lg:flex-row justify-center items-center min-h-full max-w-full px-2 py-2">
      {/* Text Block */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-lg px-4">
        <FloatingSquares overflowEnabled={true} />
        <img src={CubeLogo} alt="Cube Logo" className="h-20" />
        <div className="flex mb-3">
          <div className="text-center lg:text-start items-center justify-center lg:justify-start space-x-1">

            <span className="font-bold text-xl  lg:text-5xl">CUBE 
              
              <br></br><span className='font-light text-5xl'>Profitability</span></span>
          </div>
        </div>
        {/* Link "Learn More" */}
        <a
          target='_blank'
          href='https://www.bybit.com/copyTrade/trade-center/detail?leaderMark=rwj0pR7CZoOs22QjgrHnCA%3D%3D&copyFrom=Search'
          className='hover:underline border items-center lg:mt-2 flex justify-center border-black py-1 px-3 backdrop-blur-lg hover:text-slate-950 transition-colors lg:ml-1 rounded-lg text-slate-700 text-md'>
          Learn more
          <span className='text-md'>
            <FontAwesomeIcon icon={faArrowRight} className='max-lg:ml-2 text-sm' />
          </span>
        </a>
      </div>

{/* Chart Section */}
<div className="flex justify-center items-center w-full max-w-3xl lg:max-w-4xl relative mt-8 mb-2 mr-6  px-4">
  <div
    className="absolute inset-0 backdrop-blur-lg rounded-lg"
    style={{ zIndex: -1 }}
  />
  {/* Fixed height on chart container with more compact size */}
  <div className="w-full h-[400px] sm:h-[100px] lg:h-[600px] flex justify-center items-center">
    {/* Explicitly setting the height of the chart */}
    <Line
      data={chartData}
      options={{
        ...options,
        responsive: true,
        maintainAspectRatio: false,  // This prevents the aspect ratio from being maintained
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 10,
            bottom: 30, // Add some padding to the bottom to prevent overflow of labels
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend if it's causing overflow
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.raw}%`, // Ensure percentage is displayed neatly
            },
          },
        },
        scales: {
          x: {
            ticks: {
              autoSkip: true, // Automatically skip ticks if they overflow
              maxRotation: 45, // Rotate the X-axis labels to prevent overlap
              minRotation: 45,
            },
            title: {
              display: false, // No need for axis title
            },
          },
          y: {
            ticks: {
              callback: (value) => `${value}%`, // Display percentage on the Y-axis
            },
            title: {
              display: false, // No need for axis title
            },
          },
        },
        elements: {
          point: {
            radius: 8,  // Increased size of data points (default is 3)
            hoverRadius: 15,  // Make the points bigger on hover for better interaction
            backgroundColor: '#8884d8',  // Customize the color of the points
            borderWidth: 2,  // Add border width to make points stand out
          },
        },
      }}
    />
  </div>
</div>




    </div>
  );
}
