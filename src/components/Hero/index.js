import styles from './Hero.module.scss';
import Link from 'next/link';
import Image from 'next/image';
const Hero = () => {
	return (
		<header className={styles.container}>
			<div className={styles.container__hero}>
				<div className={styles.container__left}>
					<h1 className={styles.hero_text}>
						Building beautiful <br />
						<span className='text-primary'>Web experiences</span>
						<br />
						For your web business.
					</h1>

					<div className='flex my-10'>
						{/* <div className={styles.btn}> */}
						<div className='my-3 mr-2'>
							<a
								className='px-5 py-5 rounded md:font-semibold md:px-10 bg-primary'
								target='_blank'
								href='https://wa.me/+27740491433'
								rel='noopener noreferrer'>
								Request A Quote
							</a>
						</div>
						{/* <div className={styles.btn}> */}
						<div className='my-3 ml-2'>
							<Link href='/projects'>
								<a className='px-5 py-5 rounded md:font-semibold md:px-10 bg-accent'>
									See our work
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.container__right}>
					{/* <p className={styles.quote__text}>
						<span className={styles.quotes}>“</span> Coming together is a
						beginning, staying together is progress, and working together is
						success.
						<span className={styles.quotes}>”</span>
						<br />
						<small className={styles.quote__author}>
							- Edward Everett Hale
						</small>
					</p> */}
					{/* <Image src='/images/top-seo-company.svg' priority={true} width='100%' hight='100%'> */}
					{/* <div> */}
					<a
						className='grid h-full'
						href='https://www.designrush.com/agency/search-engine-optimization'
						target='_blank'
						rel='noopener noreferrer'>
						<Image
							className=''
							src='/images/top-seo-company.svg'
							width='100%'
							height='100%'
							alt='Top SEO Company '
							placeholder='blur'
							blurDataURL='/images/top-seo-company.svg'
							objectFit='cover'
							priority={true}
						/>
					</a>
					{/* </div> */}
				</div>
			</div>
		</header>
	);
};

export default Hero;
