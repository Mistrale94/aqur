import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the import paths according to your project structure
import Footer from '../components/Footer';
import ContractABI from '../../build/contracts/Auth.json'; // Ensure this path is correct

const Profile = () => {
  // Assuming your Ganache network ID is 5777, adjust if different
  const networkId = '5777'; 
  const tokenAddress = ContractABI.networks[networkId] ? ContractABI.networks[networkId].address : 'Token not deployed on current network';

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <h1>Profile Page</h1>
        <p>Token Address: {tokenAddress}</p>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
