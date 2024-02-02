import Head from 'next/head'
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import Navbar from './components/Navbar';
import Footer from './components/Footer';



export default function Home() {
  const bitcoinData = {
    labels: ['Févr', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Sept', 'Oct', 'Nov', 'Déc', 'Jan'],
    datasets: [
      {
        label: 'Bitcoin',
        data: [29160.4, 30964.9, 29816.4, 31395.4, 31764.5, 30168.6, 27480.7, 35191.4, 38400.8, 44697.6, 48923.7, 43408.8],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const ethereumData = {
    labels: ['Févr', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Sept', 'Oct', 'Nov', 'Déc', 'Jan'],
    datasets: [
      {
        label: 'Ethereum',
        data: [1852.48, 2137.56, 2013.10, 1943.65, 2025.56, 1879.32, 1693.68, 1864.81, 2135.91, 2443.59, 2712.88, 2324.57],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };


  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">
      <Head>
        <title>Monnaie Verte - Échange de Crypto-monnaie</title>
        <meta name="description" content="Bienvenue sur notre site d'échange de crypto-monnaie dédié à la lutte contre les problématiques environnementales." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        <section className="text-center py-4">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-6 text-gray-200">Une nouvelle ère de la crypto-monnaie</h2>
            <p className="text-gray-200 mb-6">
              Contribuez à la protection de l'environnement tout en investissant dans les crypto-monnaies. Découvrez une plateforme sécurisée pour acheter, vendre et échanger.
            </p>
          </div>
        </section>

        <section className="py-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="bg-gray-700 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Évolution du Bitcoin</h3>
              <Line key="bitcoinGraph" data={bitcoinData} />
            </div>
            <div className="bg-gray-700 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Tendance de l'Ethereum</h3>
              <Line key="ethereumGraph" data={ethereumData} />
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  )
}
