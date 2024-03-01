import Web3 from 'web3';

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Demander l'accès au compte
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error("Access to your Ethereum account denied.");
        }
    } else if (window.web3) {
        // Attention : l'utilisation de window.web3 est déconseillée et devrait être évitée
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}

export default loadWeb3;
