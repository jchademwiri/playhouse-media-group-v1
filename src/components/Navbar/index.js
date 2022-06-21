import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { links, icons } from './data';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('transparent');

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
				setNavBg('#1b1934');
			} else {
				setShadow(false);
				setNavBg('transparent');
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		// main nav
		<>
			<nav
				style={{ backgroundColor: `${navBg}` }}
				className={
					shadow
						? 'fixed top-0 z-[100] h-20 w-full	shadow-sm shadow-primary/80'
						: 'fixed top-0 z-[100] h-20 w-full bg-transparent'
				}>
				<div className='mx-auto flex h-full w-11/12 items-center justify-between px-2 lg:max-w-[1240px] '>
					<h1 className='text-xl lg:text-2xl'>
						<Link href='/'>
							<a className='font-bold uppercase'>Playhouse Media Group</a>
						</Link>
					</h1>
					<div>
						<ul className='hidden md:flex'>
							{links.map((link, index) => (
								<li
									key={index}
									className='ml-10 text-sm font-semibold uppercase '>
									<Link href={link.link}>
										<a className='pb-2 border-primary hover:border-b-2 '>
											{link.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
						<div onClick={handleNav} className='md:hidden'>
							<svg
								width='26'
								height='18'
								viewBox='0 0 26 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z'
									fill='white'
								/>
							</svg>
						</div>
					</div>
				</div>
				{/* Mobile nav  */}
				<div
					// onClick={() => setNav(false)}
					className={
						nav ? 'fixed left-0 top-0 h-screen w-full bg-body/70 md:hidden' : ''
					}>
					<div
						className={
							nav
								? ' fixed left-0 top-0 h-screen bg-body p-10 duration-500 ease-in md:w-[70%]'
								: 'fixed left-[-150%] top-0 p-10 duration-500 ease-in'
						}>
						<div>
							<div className='flex items-center justify-between w-full'>
								<h1 className='text-base lg:text-2xl'>
									<Link href='/'>
										<a className='font-semibold uppercase'>
											Playhouse Media Group
										</a>
									</Link>
								</h1>
								<div
									onClick={handleNav}
									className='p-3 m-3 rounded-full shadow-md cursor-pointer bg-primary/50 '>
									<AiOutlineClose />
								</div>
							</div>
							<div className='my-4 border-b border-accent'>
								<p className='py-4 '>
									Building beautiful web experiences for your web business.
								</p>
							</div>
						</div>
						<div className='flex flex-col py-4'>
							<ul className='uppercase'>
								{links.map((link, index) => (
									<li
										key={index}
										onClick={() => setNav(false)}
										className='py-4 text-sm font-semibold'>
										<Link href={link.link}>
											<a>{link.name}</a>
										</Link>
									</li>
								))}
							</ul>
							<div className='pt-40'>
								<p className='tracking-widest uppercase text-accent'>
									Let&apos;s Connect
								</p>

								<div className='my-4 flex w-full items-center justify-between  sm:w-[80%]'>
									{icons.map((icon, index) => (
										<a
											href={icon.link}
											target='_blank'
											rel='noreferrer'
											key={index}
											className='p-4 duration-300 ease-in rounded-full bg-primary/50 hover:scale-110 sm:p-5'>
											{icon.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
