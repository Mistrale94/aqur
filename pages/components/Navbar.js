import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="bg-gray-800 text-white py-6">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold">Monnaie Verte</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/"><p className="hover:text-gray-300">Accueil</p></Link></li>
                        <li><Link href="/auth/signin"><p className="hover:text-gray-300">Connexion</p></Link></li>
                        <li><Link href="/auth/signup"><p className="hover:text-gray-300">Inscription</p></Link></li>
                        <li><Link href="#"><p className="hover:text-gray-300">Échanger</p></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
