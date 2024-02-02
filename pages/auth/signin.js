import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Web3 from 'web3';
import ContractABI from '../../build/contracts/Auth.json';

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
                router.push('/home'); // Adjust the path as needed
            } else {
                alert('Échec de la connexion. Veuillez vérifier votre email ou mot de passe.');
            }
        } catch (error) {
            console.error("Erreur lors de la connexion: ", error);
            alert("Erreur lors de la connexion. Veuillez réessayer.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSignIn}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Signin;
