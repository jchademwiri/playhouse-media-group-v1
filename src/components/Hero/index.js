import styles from './Hero.module.scss';
import Link from 'next/link';
const Hero = () => {
	return (
		<header className={styles.container}>
			<div className={styles.container__hero}>
				<div className={styles.container__left}>
					<h3 className={styles.title}>Welcome, to our website</h3>
					<h1 className={styles.hero_text}>
						I design and build <br />
						<span className={styles.custom_web}>custom web solutions</span>
						<br /> for your Brand.
					</h1>
					<p>
						We know how to get results. We'll take you through the exact same
						process we've used to generate over 20 000 leads a month.
					</p>
					<div className={styles.buttons}>
						<div className={styles.btn}>
							<Link href='/contact'>Request A Quote</Link>
						</div>
						<div className={styles.btn}>
							<Link href='/projects'>View My Works</Link>
						</div>
					</div>
				</div>
				<div className={styles.container__right}>
					<p className={styles.quote__text}>
						<span className={styles.quotes}>“</span> Coming together is a
						beginning, staying together is progress, and working together is
						success.
						<span className={styles.quotes}>”</span>
						<br />
						<small className={styles.quote__author}>
							- Edward Everett Hale
						</small>
					</p>
				</div>
			</div>
		</header>
	);
};

export default Hero;
