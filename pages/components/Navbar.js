import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="bg-gray-300 text-black py-6">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
                <Link href="/">
                    <img src="/aqulogo.png" alt="AQULogo" style={{ width: '70px' }} />
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="hover:text-green-600">Accueil</Link></li>
                        <li><Link href="/auth/signin" className="hover:text-green-600">Connexion</Link></li>
                        <li><Link href="#" className="hover:text-green-600">Échanger</Link></li>
                        <li><Link href="/abbout" className="hover:text-green-600">A Propos</Link></li>
                        <li><Link href="/white-book" className="hover:text-green-600">Livre Blanc</Link></li>
                        <li><Link href="/partner" className="hover:text-green-600">Partenariat</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
