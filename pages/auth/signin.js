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
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <div className="flex-grow flex justify-center items-center py-12">
                <form className="w-3/4 max-w-2xl" onSubmit={handleSignUp}>
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <h2 className='text-xl pb-6 primary font-medium'>Conexion à Meta Mask</h2>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-green-600 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="bg-green-100 appearance-none border border-green-100 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-green-600 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="bg-green-100 appearance-none border border-green-100 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-10 mt-4 rounded focus:outline-none focus:shadow-outline m-auto transition-colors duration-150"
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