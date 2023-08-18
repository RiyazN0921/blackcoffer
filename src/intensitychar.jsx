import React from 'react';
import { Bar } from 'react-chartjs-2';

const IntensityChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.city),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.intensity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default IntensityChart;
