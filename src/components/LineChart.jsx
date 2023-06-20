import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="flex flex-col  lg:w-full items-center justify-center -ml-9 p-5 w-96 ">
      <div className="text-center flex flex-col lg:flex-row  items-center  lg:gap-96    mb-4">
        <Title level={5}>{coinName} Price Chart</Title>
        <Title level={5} className="mb-1">Change: {coinHistory?.data?.change}%</Title>
        <Title level={5}>Current {coinName} Price: $ {currentPrice}</Title>
      </div>
      
 
        <Line data={data} options={options} />
      
    </div>
  );
};

export default LineChart;
