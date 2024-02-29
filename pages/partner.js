import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Partnership() {
    return (
        <div className="min-h-screen text-gray-900 flex flex-col bg-white">
            <Head>
                <title>Partnership - Monnaie Verte</title>
                <meta name="description" content="Explore partnership opportunities with Monnaie Verte." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="flex-grow container mx-auto px-4">
                <section aria-labelledby="community-header" className='mx-auto mb-16'>
                    <div className='px-10 max-w-600 text-center py-12'>
                        <h2 id="community-header" className="text-3xl font-bold my-8 primary">Communauté</h2>
                        <div className='mt-3'>
                            <p>Découvrez les coulisses de notre projet blockchain en nous suivant sur les réseaux sociaux. <br />
                                Connectez avec des experts, participez à nos discussions et soyez à la pointe de l'innovation.
                            </p>
                        </div>

                    </div>

                    <div className="flex space-x-4 px-20 max-w-600 flex-bottom">
                        <span className='text-green-600 text-xl mt-8'>#BlockchainAvecMonnaieVerte</span>
                        <div className="flex space-x-5">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-green-800" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" className="text-green-800" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-green-800" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="text-green-800" />
                            </a>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="partners-header">
                    <div className='p-20'>
                        <h2 id="partners-header" className="text-3xl font-bold mt-14 primary max-w-600 px-20">Partenaires</h2>
                        <div className="mt-6 w-100">
                            <img src="/partners.png" alt="Partner 1" />
                        </div>

                    </div>
                </section>

                <section aria-labelledby="opportunities-header">
                    <h2 id="opportunities-header" className="text-3xl font-bold mt-14 primary">Opportunités de Partenariat</h2>
                    <p className="mt-3">
                        We’re always looking for new partners who share our vision. If you’re interested in exploring collaboration opportunities, we’d love to hear from you.
                    </p>
                    <a href="/contact" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">Contact us</a>
                </section>
            </main>

            <Footer />
        </div >
    );
}
