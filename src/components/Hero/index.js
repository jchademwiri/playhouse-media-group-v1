import styles from './Hero.module.scss';
import Link from 'next/link';
const Hero = () => {
	return (
		<header className={styles.container}>
			<div className={styles.container__hero}>
				<div className={styles.container__left}>
					{/* <h3 className={styles.title}>
						Welcome To the Home of Creative Design
					</h3> */}
					<h1 className={styles.hero_text}>
						Building beautiful <br />
						<span className='text-primary'>Web experiences</span>
						<br />
						For your web business.
					</h1>
					<small className={styles.quote}>
						{/* We love to visualise ideas and make them come alive in a website. */}
						{/* Home Of Creative Designs */}
					</small>
					<div className={styles.buttons}>
						{/* <div className={styles.btn}> */}
						<div className='my-3 mr-2 '>
							<a
								className='p-3 rounded bg-primary'
								target='_blank'
								href='https://wa.me/+27740491433'
								rel='noopener noreferrer'>
								Request A Quote
							</a>
						</div>
						{/* <div className={styles.btn}> */}
						<div className='my-3 ml-2 '>
							<Link href='/projects'>
								<a className='p-3 rounded bg-accent'>View Projects</a>
							</Link>
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
