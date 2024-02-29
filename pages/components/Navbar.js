import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="bg-green-100 text-black py-6">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
                <Link href="/">
                    <img src="/aqulogo.png" alt="AQULogo" style={{ width: '70px' }} />
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="text-green-800 hover:text-green-600 font-medium text-l">Accueil</Link></li>
                        <li><Link href="#" className="text-green-800 hover:text-green-600 font-medium text-l">Échanger</Link></li>
                        <li><Link href="/about" className="text-green-800 hover:text-green-600 font-medium text-l">A Propos</Link></li>
                        <li><Link href="/white-book" className="text-green-800 hover:text-green-600 font-medium text-l">Livre Blanc</Link></li>
                        <li><Link href="/partner" className="text-green-800 hover:text-green-600 font-medium text-l">Partenariat</Link></li>
                        <li><Link href="/auth/profile" className="text-green-800 hover:text-green-600 font-medium text-l">Profil</Link></li>
                        <li><Link href="/auth/signin" className="text-green-800 hover:text-green-600 font-medium text-l">Connexion</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
