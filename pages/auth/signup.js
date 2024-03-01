import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Web3 from 'web3';
import ContractABI from '../../build/contracts/Auth.json';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signup = () => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
        
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
    
            // Hachage du mot de passe
            const passwordHash = web3Instance.utils.sha3(password);
    
            // Appel de la fonction createUser du smart contract avec le hachage du mot de passe
            await instance.methods.createUser(email, passwordHash).send({ from: accounts[0] });
            alert('Inscription réussie. Redirection vers la page de profil.');
            router.push('/auth/profile');
        } catch (error) {
            console.error("Erreur lors de l'inscription: ", error);
            alert("Erreur lors de l'inscription. Veuillez réessayer.");
        }
    };

    return (
    <div className="min-h-screen bg-black flex flex-col">
        <Head>
            <title>Monnaie Verte - Création de compte</title>
        </Head>
        <Navbar />
        <div className="flex-grow flex justify-center items-center py-12">
            <form className="w-full max-w-md" onSubmit={handleSignup}>
                <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-yellow-500 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:border-yellow-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-yellow-500 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:border-yellow-500"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Créer mon compte
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <Footer />
    </div>
    );
};

export default Signup;