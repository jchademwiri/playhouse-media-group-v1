import Link from 'next/link';
import styles from './404.module.scss';

const NotFound = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>404</h1>
				<h3>page not found</h3>
				<div className={styles.nav}>
					<em>here are some links that may be useful</em>
					<ul>
						<li>
							<Link href='/'>
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
						<li>
							<Link href='/contact'>
								<a>Contact</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
