import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="bg-green-100 text-black py-6">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
                <Link href="/">
                    <img src="/aqulogo.png" alt="AQULogo" style={{ width: '70px' }} />
                </Link>
                <nav>
                    <ul className="flex align-center space-x-4">
                        <li><Link href="/" className="text-green-800 hover:text-green-600 font-medium text-l">Accueil</Link></li>
                        <li><Link href="/about" className="text-green-800 hover:text-green-600 font-medium text-l">A Propos</Link></li>
                        <li>
                            <a href="/livre_blanc.pdf" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-600 font-medium text-l">
                                Livre Blanc
                            </a>
                        </li>
                        <li><Link href="/partner" className="text-green-800 hover:text-green-600 font-medium text-l">Partenariat</Link></li>
                        <li><Link href="/auth/profile" className="text-green-800 hover:text-green-600 font-medium text-l">Profil</Link></li>
                        <li><Link href="/auth/signin" className="text-green-800 hover:text-green-600 font-medium text-l">
                            <button className="bg-white border-2 border-green-300 rounded-lg px-4 py-2 text-green-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">
                                Connexion
                            </button>
                        </Link></li>

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
