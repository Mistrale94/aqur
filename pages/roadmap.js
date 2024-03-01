import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faSeedling, faTools, faRocket, faSyncAlt, faSun, faUserShield, faFlagCheckered, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

const Roadmap = () => {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col">
            <Head>
                <title>Monnaie Verte - Roadmap</title>
            </Head>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">Roadmap Condensée du Projet</h1>
                <p className="text-lg mb-10 text-center text-gray-600">Exploration de la Technologie Blockchain Éco-Énergétique (Sur 2 Ans)</p>

                <div className="space-y-6">
                    <div className="bg-blue-100 rounded-lg shadow-lg p-8  flex items-center">
                        <FontAwesomeIcon icon={faLightbulb} size="3x" className="text-blue-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Mois 1-2 : Préparation et Analyse</h2>
                            <p>Focus initial sur l'analyse des mécanismes de consensus existants, notamment la preuve de travail, pour identifier les opportunités de rendre la blockchain plus éco-énergétique.</p>
                        </div>
                    </div>

                    <div className="bg-green-100 rounded-lg shadow-lg p-8  flex items-center">
                        <FontAwesomeIcon icon={faSeedling} size="3x" className="text-green-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Mois 3-5 : Exploration des Alternatives de Consensus</h2>
                            <p>Étude des alternatives éco-énergétiques comme la preuve d'enjeu, visant à sélectionner la blockchain la plus adaptée à nos objectifs environnementaux.</p>
                        </div>
                    </div>

                    <div className="bg-yellow-100 rounded-lg shadow-lg p-8  flex items-center">
                        <FontAwesomeIcon icon={faTools} size="3x" className="text-yellow-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Mois 6-8 : Définition des Objectifs et des Fonctionnalités</h2>
                            <p>Détermination précise des objectifs du projet et des fonctionnalités blockchain nécessaires pour atteindre un impact éco-énergétique significatif.</p>
                        </div>
                    </div>

                    <div className="bg-red-100 rounded-lg shadow-lg p-8  flex items-center">
                        <FontAwesomeIcon icon={faRocket} size="3x" className="text-red-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Mois 9-12 : Mise en Œuvre des Mécanismes de Consensus</h2>
                            <p>Développement et intégration des prototypes de blockchain, avec un focus particulier sur la preuve d'enjeu et les mécanismes incitatifs pour encourager une utilisation éco-énergétique.</p>
                        </div>
                    </div>

                    <div className="bg-purple-100 rounded-lg shadow-lg p-8  flex items-center">
                        <FontAwesomeIcon icon={faSyncAlt} size="3x" className="text-purple-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Mois 13-15 : Évaluation de la Performance et de la Sécurité</h2>
                            <p>Tests approfondis pour évaluer la performance et la sécurité de la blockchain, avec un effort particulier pour optimiser les mécanismes de consensus dans un souci d'efficacité énergétique.</p>
                        </div>
                    </div>

                    <div className="bg-teal-100 rounded-lg shadow-lg p-8  flex items-center">
                        <FontAwesomeIcon icon={faSun} size="3x" className="text-teal-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Mois 16-18 : Utilisation de Sources Durables</h2>
                            <p>Intégration d'énergie renouvelable et établissement de partenariats stratégiques avec des fournisseurs d'énergie verte pour alimenter notre infrastructure blockchain.</p>
                        </div>
                    </div>

                    <div className="bg-orange-100 rounded-lg shadow-lg p-8  flex items-center">
                        <FontAwesomeIcon icon={faUserShield} size="3x" className="text-orange-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Mois 19-21 : Validation sur un Environnement Restreint</h2>
                            <p>Lancement d'une version pilote de la blockchain pour tester sa performance dans un environnement contrôlé, recueillir des retours d'utilisateurs et affiner notre approche.</p>
                        </div>
                    </div>

                    <div className="bg-indigo-100 rounded-lg shadow-lg p-8  flex items-center">
                        <FontAwesomeIcon icon={faFlagCheckered} size="3x" className="text-indigo-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Mois 22-24 : Finalisation de la Version Stable</h2>
                            <p>Finalisation et ajustements de la blockchain basés sur l'analyse des données collectées durant la phase pilote, en vue de préparer le lancement officiel.</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg shadow-lg p-8  flex items-center">
                        <FontAwesomeIcon icon={faShoppingCart} size="3x" className="text-gray-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Mois 25 : Introduction sur le Marché</h2>
                            <p>Lancement officiel de notre solution blockchain éco-énergétique, accompagné de campagnes de sensibilisation pour promouvoir son adoption.</p>
                        </div>
                    </div>

                    <div className="bg-green-200 rounded-lg shadow-lg p-8 flex items-center">
                        <FontAwesomeIcon icon={faSyncAlt} size="3x" className="text-green-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold">Post-Lancement : Maintenance et Améliorations Continues</h2>
                            <p>Engagement dans une démarche d'amélioration continue, avec des mises à jour régulières pour intégrer les dernières avancées technologiques et répondre aux besoins des utilisateurs.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Roadmap;
