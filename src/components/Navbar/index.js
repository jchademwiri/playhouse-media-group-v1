import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div onClick={() => setOpen(false)} className={styles.brand}>
					<Link href='/' scroll className={styles.logo}>
						<span>
							<Image
								src={'/images/logo.svg'}
								width={50}
								height={50}
								blurDataURL='/images/logo.svg'
								placeholder='blur'
								alt='logo'
							/>
						</span>
					</Link>
				</div>
				<div className={styles.navigation}>
					<div className={styles.navbar}>
						<ul className={styles.navbar__links}>
							<li>
								<Link href='/' scroll>
									Home
								</Link>
							</li>

							<li>
								<Link href='/services'>Services</Link>
							</li>
							<li>
								<Link href='/projects'>Portfolio</Link>
							</li>
							<li>
								<Link href='/about'>About</Link>
							</li>
							<li>
								<Link href='/contact'>Contact</Link>
							</li>
						</ul>
					</div>
					<nav className={styles.mobileNav}>
						<div className={styles.hamburger} onClick={() => setOpen(!open)}>
							<svg
								width='30'
								height='24'
								viewBox='0 0 30 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<line
									x1='2'
									y1='2'
									x2='28'
									y2='2'
									stroke='#fafafa'
									strokeWidth='4'
									strokeLinecap='round'
								/>
								<line
									x1='12'
									y1='12'
									x2='28'
									y2='12'
									stroke='#fafafa'
									strokeWidth='4'
									strokeLinecap='round'
								/>
								<line
									x1='2'
									y1='22'
									x2='28'
									y2='22'
									stroke='#fafafa'
									strokeWidth='4'
									strokeLinecap='round'
								/>
							</svg>
						</div>
						<ul
							onClick={() => setOpen(false)}
							className={styles.menu}
							style={{ right: open ? '0px' : '-100vw' }}>
							<li className='menuItem'>
								<Link href='/' scroll>
									Home
								</Link>
							</li>

							<li className='menuItem'>
								<Link href='/services'>Services</Link>
							</li>
							<li className='menuItem'>
								<Link href='/projects'>Portfolio</Link>
							</li>
							<li className='menuItem'>
								<Link href='/about'>About</Link>
							</li>
							<li className='menuItem'>
								<Link href='/contact'>Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
