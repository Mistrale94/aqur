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
    }, []);

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            if (!contract) throw new Error("Contract not loaded!");

            const accounts = await web3.eth.getAccounts();
            const userData = await contract.methods.usersList(email).call();

            if (userData && userData.password === password) {
                alert('Connexion réussie. Redirection vers la page d’accueil.');
                router.push('/'); // Adjust the path as needed
            } else {
                alert('Échec de la connexion. Veuillez vérifier votre email ou mot de passe.');
            }
        } catch (error) {
            console.error("Erreur lors de la connexion: ", error);
            alert("Erreur lors de la connexion. Veuillez réessayer.");
        }
    };

    return (
        <div className="min-h-screen bg-white text-black flex flex-col">
            <Navbar />
            <div className="flex justify-center items-center py-12 flex-grow">
                <form className=" flex items-center justify-center bg-black-900" onSubmit={handleSignIn}>
                    <div className="w-full max-w-md">
                        <div className="bg-gray-300 p-8 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label className="block secondary text-sm font-bold mb-2" htmlFor="email">
                                    Email / Phone Number
                                </label>
                                <input
                                    className="appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-300 bg-white leading-tight focus:outline-none focus:border-yellow-500"
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block secondary text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-300 bg-white leading-tight focus:outline-none focus:border-yellow-500"
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                    type="submit"
                                >
                                    Log In
                                </button>
                            </div>

                        </div>
                    </div>
                </form>

            </div>
            <Footer />
        </div>
    );
};

export default Signin;
