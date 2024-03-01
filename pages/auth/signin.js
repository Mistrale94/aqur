import React, { useState } from 'react';
import Web3 from 'web3';
import { useRouter } from 'next/router';
import ContractABI from '../../build/contracts/Auth.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignin = async (e) => {
        e.preventDefault();
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3Instance = new Web3(window.ethereum);
        
            const networkId = await web3Instance.eth.net.getId();
            const deployedNetwork = ContractABI.networks[networkId];
            
            if (!deployedNetwork) {
                alert('Le smart contract n\'est pas déployé sur le réseau détecté.');
                return;
            }
    
            const instance = new web3Instance.eth.Contract(
                ContractABI.abi,
                deployedNetwork.address,
            );
    
            // Hachez le mot de passe avant de le vérifier
            const passwordHash = web3Instance.utils.sha3(password);
    
            // Utilisez call pour les fonctions view/pure
            const verified = await instance.methods.verifyUser(email, passwordHash).call();
    
            if (verified) {
                alert('Connexion réussie. Redirection vers la page de profil.');
                router.push('/auth/profile');
            } else {
                alert('Échec de la connexion. Veuillez vérifier vos identifiants.');
            }
        } catch (error) {
            console.error("Erreur lors de la connexion: ", error);
            alert("Erreur lors de la connexion. Veuillez réessayer.");
        }
    };    

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Head>
                <title>Monnaie Verte - Connexion</title>
            </Head>
            <Navbar />
            <div className="flex-grow flex justify-center items-center py-12">
                <form className="w-full max-w-md" onSubmit={handleSignin}>
                <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-yellow-500 text-sm font-bold mb-2">Email</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:border-yellow-500" />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="password" className="block text-yellow-500 text-sm font-bold mb-2">Password</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:border-yellow-500" />
                    </div>
                    <div className="flex items-center justify-between">
                    <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Sign In</button>
                    </div>
                </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Signin;
