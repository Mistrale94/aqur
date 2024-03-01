import Head from 'next/head'
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EthereumChart from './components/EthereumChart';
import BitcoinChart from './components/BitcoinChart';



export default function Home() {

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Head>
        <title>Monnaie Verte - Échange de Crypto-monnaie</title>
        <meta name="description" content="Bienvenue sur notre site d'échange de crypto-monnaie dédié à la lutte contre les problématiques environnementales." />
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" type="image/x-icon" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" /> 
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/png"/>
      </Head>

      <Navbar />

      <main className="flex-grow">
        <section className="text-center py-4">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-semibold mt-8 mb-12 text-black primary">Une nouvelle ère de la crypto-monnaie</h2>
            <p className="text-black mb-6">
              Contribuez à la protection de l'environnement tout en investissant dans les crypto-monnaies. Découvrez une plateforme sécurisée pour acheter, vendre et échanger.
            </p>
          </div>
        </section>

        <section className="py-4">
          <div className="max-w-4xl mx-auto px-4">
            <div className='mb-20'>
              <h2 className="text-2xl font-semibold mb-4">Prix de l'Ethereum</h2>
              <EthereumChart />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Prix du Bitcoin</h2>
              <BitcoinChart />
            </div>
            <br />
          </div>
        </section>
      </main>

      <Footer />

    </div>
  )
}
