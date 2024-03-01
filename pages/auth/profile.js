import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import ContractABI from '../../build/contracts/Auth.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
                console.log(tx)
                try {
                  const receipt = await web3.eth.getTransactionReceipt(tx.hash);
                  if (receipt) {
                    const from = tx.from;
                    const to = tx.to;
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
    <div>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : userAddress ? (
        <main>
          <h1>Profile Page</h1>
          <p>Connecter à Metamask avec l'adresse: {userAddress}</p>
          {tokenAddress && <p>Adresse du Token: {tokenAddress}</p>}
          <h2>Historique des transactions</h2>
          <ul>
            {transactions.map((tx, index) => (
              <li key={index}>
                De: {tx.from} - A: {tx.to} - Valeur: {Web3.utils.fromWei(tx.value, 'ether')} ETH
              </li>
            ))}
          </ul>
        </main>
      ) : (
        <p>Please connect to MetaMask to view your profile information.</p>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
