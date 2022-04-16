import styles from './Hero.module.scss';
import Link from 'next/link';
const Hero = () => {
	return (
		<header className={styles.container}>
			<div className={styles.container__hero}>
				<div className={styles.container__left}>
<<<<<<< HEAD
					<h3 className={styles.title}>Welcome, to our website</h3>
=======
					{/* <h3 className={styles.title}>
						Welcome To the Home of Creative Design
					</h3> */}
>>>>>>> c355305a6509be49846910477ed1df52d264cdcd
					<h1 className={styles.hero_text}>
						Welcome To <br />
						<span className={styles.custom_web}>Playhouse Media Group</span>
						<br />
						Your Digital Agency.
					</h1>
<<<<<<< HEAD
					<p>
						We know how to get results. We'll take you through the exact same
						process we've used to generate over 20 000 leads a month.
					</p>
=======
					<small className={styles.quote}>
						{/* We love to visualise ideas and make them come alive in a website. */}
						{/* Home Of Creative Designs */}
					</small>
>>>>>>> c355305a6509be49846910477ed1df52d264cdcd
					<div className={styles.buttons}>
						<div className={styles.btn}>
							<a
								target='_blank'
								href='https://wa.me/+27740491433'
								rel='noopener noreferrer'>
								Request A Quote
							</a>
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
