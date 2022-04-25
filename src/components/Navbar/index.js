import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Navbar = () => {
	const [open, setOpen] = useState(false);

	const humNav = (
		<>
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
		</>
	);

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div onClick={() => setOpen(false)} className={styles.brand}>
					<Link passHref href='/' scroll className={styles.logo}>
						<span>
							<a>
								<Image
									src={'/images/logo.svg'}
									width={68}
									height={54}
									blurDataURL='/images/logo.svg'
									placeholder='blur'
									alt='logo'
								/>
							</a>
						</span>
					</Link>
				</div>
				<div className={styles.navigation}>
					<div className={styles.navbar}>
						<ul className={styles.navbar__links}>
							<li>
								<Link href='/' scroll>
									<a>Home</a>
								</Link>
							</li>

							<li>
								<Link href='/services'>
									<a>Services</a>
								</Link>
							</li>
							<li>
								<Link href='/projects'>
									<a>Portfolio</a>
								</Link>
							</li>
							{/* <li>
								<Link href='/blog'>
									<a>Blog</a>
								</Link>
							</li> */}

							{/* <li>
								<Link href='/about'>
								<a>About</a>
								</Link>
							</li> */}
							<li>
								<Link href='/contact'>
									<a>Contact</a>
								</Link>
							</li>
							<li>
								<Link href='learn'>
									<a>Learn</a>
								</Link>
							</li>
						</ul>
					</div>
					<nav className={styles.mobileNav}>
						<div className={styles.hamburger} onClick={() => setOpen(!open)}>
							{humNav}
						</div>
						<ul
							onClick={() => setOpen(false)}
							className={styles.menu}
							style={{ right: open ? '0px' : '-100vw' }}>
							{/* <li className={styles.closebtn}>X</li> */}
							<li className='menuItem'>
								<Link passHref href='/' scroll>
									<a>Home</a>
								</Link>
							</li>

							<li className='menuItem'>
								<Link passHref href='/services'>
									<a>Services</a>
								</Link>
							</li>
							<li className='menuItem'>
								<Link passHref href='/projects'>
									<a>Portfolio</a>
								</Link>
							</li>
							{/* <li>
								<Link href='/blog'>
									<a>Blog</a>
								</Link>
							</li> */}
							{/* <li className='menuItem'>
								<Link passHref href='/about'>
									<a>About</a>
								</Link>
							</li> */}
							<li className='menuItem'>
								<Link passHref href='/contact'>
									<a>Contact</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
