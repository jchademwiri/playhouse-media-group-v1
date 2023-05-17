import styles from './about.module.scss';
import { server } from '../../config';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import StartProject from '../../components/StartProject';
import { motion } from 'framer-motion';
// import { useSWR } from 'swr';

const about = ({ details }) => {
	const SEO = {
		title: `Jacob Chademwiri | About`,
		description: `A professional web developer and digital marketing specialist bassed in South Africa.`,
		canonical: `${server}/about`,
		openGraph: {
			url: `${server}/about`,
			title: `Jacob Chademwiri | About`,
			description: `A professional web developer and digital marketing specialist`,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />

			<header className={styles.header}>
				<section className='grid w-11/12 max-w-[1200px] content-center h-full mx-auto justify-content'>
					{details &&
						details.map((detail) => (
							<div key={detail.id}>
								<h1 className='text-4xl font-bold sm:text-6xl'>
									{detail.name}
								</h1>
								<p className='my-4 text-2xl'>{detail.profession}</p>
							</div>
						))}
				</section>
			</header>
			<section className='grid w-11/12 max-w-[1200px] gap-4 my-4 grid-cols-3 content-center h-full mx-auto justify-content'>
				<div>
					<Image
						className='rounded'
						src={'/images/bg.jpg'}
						alt='Jacob Chademwiri'
						width={1920}
						height={1080}
						objectFit='cover'
						priority={true}
					/>
				</div>
				<div className='col-span-2 '>
					<h3 className='my-4 text-4xl font-semibold'>
						Building Awesome Websites
					</h3>
					<p>
						We are web Developers and online marketing professionals with more
						than 5 years of experience in the field of web development and
						digital marketing. We specialize in building websites that are SEO
						friendly and digital marketing campaigns to increase sales and
						conversions for your business. We have a strong passion for creating
						clean and elegant designs that aims in converting visitors in to
						clients.
					</p>
				</div>
			</section>
			{/* <section className={styles.container}>
				{details &&
					details.map((detail, index) => (
						<div
							key={index}
							className='grid w-11/12 mx-auto my-4 max-w-[1200px] '>
							<div className='grid gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 '>
								<div>
									<h3 className='my-2 text-2xl font-semibold'>
										Mission Statement
									</h3>
									<p>{detail.mission}</p>
								</div>
								<div>
									<h3 className='my-2 text-2xl font-semibold'>
										Our Core Values
									</h3>
									<p>{detail.values}</p>
								</div>
								<div>
									<h3 className='my-2 text-2xl font-semibold'>Our Goals</h3>
									<p>{detail.goals}</p>
								</div>
							</div>

							<div className={styles.contact}>
								<h3>Contact Us Anytime</h3>
								<div className={styles.about__social}>
									<h4>Flollow us on social networks</h4>
									<div className={styles.about__social__links}>
										{detail.links.map((link, index) => (
											<>
												<a
													className={styles.about__social__links__link}
													key={index}
													href={link.url}
													target='_blank'
													rel='noopener noreferrer'>
													<p>{link.icon}</p>
													<p className='pb-4'>{link.name}</p>
												</a>
											</>
										))}
									</div>
								</div>
								<div className={styles.about__contact}>
									<h4>Contact Us Now </h4>
									<address className={styles.about__contact__details}>
										{detail.contacts.map((contact) => (
											<div key={contact.id}>
												<div>
													<p>{contact.name}</p>
													<small>
														<a
															href={`${contact.urlto}`}
															target='_blank'
															rel='noreferrer'>
															{contact.url}
														</a>
													</small>
												</div>
											</div>
										))}
									</address>
								</div>
							</div>
						</div>
					))}
			</section> */}
			<motion.div initial={{ x: -250 }} animate={{ x: 0 }}>
				<StartProject />
			</motion.div>
			<section className='grid w-11/12 max-w-[1200px] gap-4 my-4 content-center h-full mx-auto justify-content'>
				<h3>Google Reviews</h3>
			</section>
		</>
	);
};

export default about;

export async function getStaticProps() {
	const response = await fetch(`${server}/api/about`);
	const data = await response.json();

	return {
		props: {
			details: data,
		},
	};
}


