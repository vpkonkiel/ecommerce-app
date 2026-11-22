import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="">
            {/* Left side of Navbar */}
                <Link href='/'>
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
            {/* End of Right side of Navbar */}
        </div>
    )
};

export default Navbar;