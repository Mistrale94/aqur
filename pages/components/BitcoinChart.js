import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const BitcoinChart = () => {
  const [prices, setPrices] = useState([]);
  const [dates, setDates] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
        params: {
          vs_currency: 'usd',
          days: '7',
        },
      });

      const priceData = response.data.prices;
      const formattedPrices = priceData.map((entry) => entry[1]);
      const formattedDates = priceData.map((entry) => {
        const date = new Date(entry[0]);
        return `${date.getDate()}/${date.getMonth() + 1}`;
      });

      setPrices(formattedPrices);
      setDates(formattedDates);
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Prix du Bitcoin (USD)',
        data: prices,
        fill: false,
        backgroundColor: 'rgb(247, 147, 26)',
        borderColor: 'rgba(247, 147, 26, 1)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7 // Limite le nombre de ticks à 7 pour améliorer la lisibilité
        }
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BitcoinChart;
