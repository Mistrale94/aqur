import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import ContractABI from '../../build/contracts/Auth.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const Profile = () => {
  const [tokenBalance, setTokenBalance] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          setLoading(true);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          setUserAddress(accounts[0]);
      
          // Fetch the last 10 transactions for the connected account
          const latest = await web3.eth.getBlockNumber();
          const fetchedTransactions = [];
          let i = latest;
          while (i >= 0 && i >= latest - 10n) {
            const block = await web3.eth.getBlock(i, true);
            if (block.transactions) {
              block.transactions.forEach(async tx => {
                try {
                  const receipt = await web3.eth.getTransactionReceipt(tx.hash);
                  if (receipt) {
                    const from = tx.from;
                    const to = tx.to;
                    // Assurez-vous de convertir la valeur BigInt en chaîne avant de la passer à fromWei
                    const value = web3.utils.fromWei(tx.value.toString(), 'ether');
                    fetchedTransactions.push({ from, to, value });
                  }
                } catch (error) {
                  console.error("Error processing transaction:", error);
                }
              });
            }
            i--;
          }
          setTransactions(fetchedTransactions);
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    };          
    initWeb3();
  }, []);

  const networkId = '5777';
  const tokenAddress = userAddress && ContractABI.networks[networkId] ? ContractABI.networks[networkId].address : null;

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Head>
        <title>Monnaie Verte - Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center">
            <p className="text-lg">Loading...</p>
          </div>
        ) : userAddress ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
            <p className="mb-2">Connecté à Metamask avec l'adresse : <span className="font-mono text-sm bg-gray-200 p-2 rounded">{userAddress}</span></p>
            {tokenAddress && <p className="mb-4 mt-6">Adresse du Token : <span className="font-mono text-sm bg-gray-200 p-2 rounded">{tokenAddress}</span></p>}
            <h2 className="text-xl font-semibold mb-2">Historique des transactions</h2>
            <ul className="list-disc pl-5">
              {transactions.map((tx, index) => (
                <li key={index} className="mb-1">
                  De : <span className="font-mono">{tx.from}</span> - A : <span className="font-mono">{tx.to}</span> - Valeur : <span className="font-bold">{tx.value} ETH</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center">Please connect to MetaMask to view your profile information.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;