import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Web3 from 'web3';
import ContractABI from '../../build/contracts/Auth.json';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signin = () => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        const initWeb3 = async () => {
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                setWeb3(web3);

                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    // Un compte MetaMask est connecté, redirige vers la page de profil
                    router.push('/auth/profile');
                }

                const deployedNetwork = ContractABI.networks[Object.keys(ContractABI.networks)[0]];
                const instance = new web3.eth.Contract(
                    ContractABI.abi,
                    deployedNetwork && deployedNetwork.address,
                );
                setContract(instance);
            } else {
                console.error('Ethereum browser extension not detected.');
            }
        };

        initWeb3();
    }, [router]);

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            if (web3 && contract) {
                const accounts = await web3.eth.getAccounts();
                await contract.methods.createUser(email, password).send({ from: accounts[0] });
                alert('Inscription réussie. Redirection vers la page de profil.');
                router.push('/auth/profile');
            }
        } catch (error) {
            console.error("Erreur lors de l'inscription: ", error);
            alert("Erreur lors de l'inscription. Veuillez réessayer.");
        }
    };

    return (
    <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <div className="flex-grow flex justify-center items-center py-12">
            <form className="w-full max-w-md" onSubmit={handleSignUp}>
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
                            Connexion
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <Footer />
    </div>
    );
};

export default Signin;