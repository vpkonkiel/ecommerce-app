import Image from 'next/image';
import Link from 'next/link';

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
            <div className='flex items-center'>
                Right
            </div>
            {/* End of Right side of Navbar */}
        </nav>
    )
};

export default Navbar;