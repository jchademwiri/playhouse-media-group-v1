import styles from './Hero.module.scss';
const Hero = () => {
	return (
		<header className={styles.container}>
			<div className={styles.container__hero}>
				<div className={styles.container__left}>
					<h3 className={styles.title}>Welcome, I&apos;m Jacob</h3>
					<h1 className={styles.hero_text}>
						I design and build <br />
						<span className={styles.custom_web}>custom web solutions</span>{' '}
						<br /> for your Brand.
					</h1>
					<p>
						I love to visualise ideas and make them come alive in a website.
					</p>
					<div className={styles.buttons}>
						<div className={styles.btn}>Request A Quote</div>
						<div className={styles.btn}>View My Works</div>
					</div>
				</div>
				<div className={styles.container__right}>
					<p>
						<i>
							<span className={styles.quote}>“</span> Coming together is a
							beginning, staying together is progress, and working together is
							success.
							<span className={styles.quote}>”</span>
							<br /> <i>- Edward Everett Hale</i>
						</i>
					</p>
				</div>
			</div>
		</header>
	);
};

export default Hero;
