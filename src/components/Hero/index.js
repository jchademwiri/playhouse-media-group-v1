import styles from './Hero.module.scss';
import Link from 'next/link';
const Hero = () => {
	return (
		<header className={styles.container}>
			<div className={styles.container__hero}>
				<div className={styles.container__left}>
					<h3 className={styles.title}>
						Welcome To the Home of Creative Design
					</h3>
					<h1 className={styles.hero_text}>
						Welcome To <br />
						<span className={styles.custom_web}>Playhouse Media Group</span>
						<br />
						Your Digital Agency.
					</h1>
					<small className={styles.quote}>
						We love to visualise ideas and make them come alive in a website.
						{/* Home Of Creative Designs */}
					</small>
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
