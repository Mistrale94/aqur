import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const EthereumChart = () => {
  const [prices, setPrices] = useState([]);
  const [dates, setDates] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart', {
        params: {
          vs_currency: 'usd',
          days: '7', // Récupère les données des 7 derniers jours
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
      console.error('Error fetching Ethereum data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Prix de l\'Ethereum (USD)',
        data: prices,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
              // Assurez-vous que chaque tick (marque) correspond à un jour
              autoSkip: true,
              maxTicksLimit: 7 // Limite le nombre de ticks à 7
            }
          },
      y: {
        beginAtZero: false,
      },
    },
    elements: {
      line: {
        tension: 0.4 // Applique une légère courbure aux lignes, pour un aspect plus lisse
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default EthereumChart;
