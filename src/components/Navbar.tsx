import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Bell, House, ShoppingCart, SquareArrowRightEnter } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-1">
            {/* Left side of Navbar */}
                <Link href='/' className='flex items-center'>
                    <Image 
                        src='/e-conomical-logo.svg' 
                        alt='E-Conomical Logo'
                        width={50}
                        height={36}
                        className='w-6 h-6 md:w-20 md:h-18'
                        loading='eager'
                    />
                </Link>
            {/* End of Left side of Navbar */}

            {/* Right side of Navbar */}
            <div className='flex items-center gap-4'>
                <SearchBar />
                <Link href='/'>
                    <House className='w-4 h-4 text-gray-600' aria-label="Home"/>
                    <span 
                        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100"
                    >
                        Home
                    </span>
                </Link>
                <Bell className='w-4 h-4 text-gray-600' />
                <Link href='/login'>
                <SquareArrowRightEnter className='w-4 h-4 text-gray-600' />
                </Link>
                <ShoppingCart className='w-4 h-4 text-gray-600' />
            </div>
            {/* End of Right side of Navbar */}
        </nav>
    )
};

export default Navbar;