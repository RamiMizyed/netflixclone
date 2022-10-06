import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
function Header() {
	const [isScrolled, setisScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setisScrolled(true);
			} else {
				setisScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${isScrolled && 'bg-[#141414]'}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<img
					src='https://rb.gy/ulxxee'
					width={100}
					height={100}
					alt=''
					className='cursor-pointer object-contain'
				/>
				<ul className='hidden space-x-4 md:flex'>
					<li className='headerLink'>Home</li>
					<li className='headerLink'>TV Shows</li>
					<li className='headerLink'>Movies</li>
					<li className='headerLink'>New & Popular</li>
					<li className='headerLink'>My List</li>
				</ul>
				<h1>Made for Educational Purposes</h1>
			</div>
			<div className='flex items-center space-x-4 text-sm font-light'>
				<AiOutlineSearch className='hidden sm:inline h-6 w-6' />
				<p className='hidden lg:inline'>Kids</p>
				<AiOutlineBell className='h-6 w-6' />
				<Link href='/account'>
					<img
						src='https://rb.gy/g1pwyx'
						alt=''
						className='cursor-pointer rounded'
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;
