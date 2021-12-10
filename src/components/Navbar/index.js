import styles from './navbar.module.scss';
import Link from 'next/link';
const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__brand}>
				<Link href='/' scroll>
					<h2>Jacob C.</h2>
				</Link>
			</div>
			<ul className={styles.nav__links}>
				<li>
					<Link href='/' scroll>
						Home
					</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/services'>Services</Link>
				</li>
				<li>
					<Link href='/projects'>Projects</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
