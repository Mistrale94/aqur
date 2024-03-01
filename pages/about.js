import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function About() {
    return (
        <div className="min-h-scree text-gray-900 flex flex-col">
            <Head>
                <title>Monnaie Verte - A propos</title>
                <meta name="description" content="Learn more about Monnaie Verte - the cryptocurrency exchange platform dedicated to environmental issues." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="flex-grow">
                <section className="text-center py-20 bg-gray-100">
                    <div className="mx-auto">

                        <div className='p-20 max-w-600'>
                            <h1 className="text-5xl font-bold mb-6 primary">Notre objectif</h1>
                            <p className="text-lg mb-12">
                                Une blockchain éco-énergétique, réduisant la surconsommation énergétique. Création d'une crypto-monnaie sécurisée, décentralisée, et fiable, avec des mécanismes de consensus innovants pour économiser l'énergie. Nous visons à mener l'industrie blockchain vers la durabilité.</p>

                        </div>

                        <div className='flex g-20 mx-12'>
                            <div className="bg-white shadow rounded-lg p-14 flex flex-col items-center w-25 h-100">
                                <h2 className="text-3xl font-semibold mb-10 primary">Notre Equipe</h2>
                                <div className="space-y-8 text-left">
                                    <div className="flex space-x-8">
                                        <img src="../kent1.png" className="h-20 w-20 rounded-full" alt="Quentin LAPUJADE" />
                                        <div className='flex flex-col justify-center'>
                                            <span className="block font-semibold">Quentin LAPUJADE</span>
                                            <span>Developpeur Back-End</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-8">
                                        <img src="../alex.png" className="h-20 w-20 rounded-full" alt="Alexis NOVINC" />
                                        <div className='flex flex-col justify-center'>
                                            <span className="block font-semibold">Alexis NOVINC</span>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-8">
                                        <img src="../renar.png" className="h-20 w-20 rounded-full" alt="Renaud VERNAGEAU" />
                                        <div className='flex flex-col justify-center'>
                                            <span className="block font-semibold">Renaud VERNAGEAU</span>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-8">
                                        <img src="../ulysse.jpg" className="h-20 w-20 rounded-full" alt="Ulysse ROUARD" />
                                        <div className='flex flex-col justify-center'>
                                            <span className="block font-semibold">Ulysse ROUARD</span>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow rounded-lg p-14 w-50">
                                <h2 className="text-3xl font-semibold mb-10 primary">Vision et Mission</h2>
                                <div>
                                    <span className="block font-semibold mb-2">Notre Vision</span>
                                    <p>Pionniers dans la création d'une crypto-monnaie qui résout les problèmes énergétiques des systèmes actuels.</p>
                                    <span className="block font-semibold mt-4 mb-2">Notre Mission</span>
                                    <p> Réduire la consommation énergétique des transactions, promouvoir la durabilité, et garantir une expérience utilisateur sécurisée et fiable. Nous recherchons des solutions novatrices, alliant efficacité énergétique et performances réseau, sans compromettre la sécurité et la décentralisation</p>
                                    <span className="block font-semibold mt-4 mb-2">Notre Engagement</span>
                                    <p>Equilibrer progrès technologique et responsabilité environnementale.</p>
                                </div>
                            </div>

                            <div className="space-y-10 w-25">
                                <div className="bg-white shadow rounded-lg p-14 h-100">
                                    <h2 className="text-3xl font-semibold mb-10 primary">Notre Histoire</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <span className="block font-semibold">Fondée en 2024</span>
                                            <span>Paris, France</span>
                                        </div>
                                        <div>
                                            <span className="block font-semibold">Lancement de notre premier produit</span>
                                            <span>© Monnaie Verte</span>
                                        </div>
                                        <div>
                                            <span className="block font-semibold">Levée de fonds : 1 million d'euros</span>
                                            <span>Paris, France</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
