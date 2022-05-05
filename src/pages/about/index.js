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

	// fetch data using swr hook
	// const { data, error } = useSWR(`${server}/api/projects`, {
	// 	initialData: details,
	// 	revalidateOnFocus: false,
	// 	revalidateOnReconnect: false
	// });

	return (
		<>
			<NextSeo {...SEO} />
			<header className={styles.header}>
				<section className={styles.content}>
					{details &&
						details.map((detail) => (
							<div key={detail.id}>
								<h1>{detail.name}</h1>
								{/* <small> {detail.profession} </small> */}
								<p>{detail.description}</p>
							</div>
						))}
				</section>
			</header>
			<section className={styles.container}>
				{details &&
					details.map((detail) => (
						<div key={detail.id} className={styles.about}>
							{/* <h1>{detail.name}</h1>
							<small> {detail.profession} </small>
							<p>{detail.description}</p> */}
							<div className={styles.about__mission}>
								<div>
									<h3>Mission Statement</h3>
									<p>{detail.mission}</p>
								</div>
								<div>
									<h3>Our Core Values</h3>
									<p>{detail.values}</p>
								</div>
								<div>
									<h3>Our Goals</h3>
									<p>{detail.goals}</p>
								</div>
							</div>

							{/* <div className={styles.about__skills__details}>
								<h3>We have Professionals To Help You Grow Your Business</h3>
								<div className={styles.about__skills__details__skills}>
									{detail.skills
										.toString()
										.split(',')
										.map((skill) => (
											<p
												key={skill}
												className={styles.about__skills__details__skill}>
												{skill}
											</p>
										))}
								</div>
							</div> */}
							<div className={styles.contact}>
								<h3>Contact Us Anytime</h3>
								<div className={styles.about__social}>
									<h4>Flollow us on social networks</h4>
									<div className={styles.about__social__links}>
										{detail.links.map((link) => (
											<a
												className={styles.about__social__links__link}
												key={link.id}
												href={link.url}
												target='_blank'
												rel='noopener noreferrer'>
												<Image
													src={`${link.icon}`}
													alt={link.name}
													height={50}
													width={50}
													objectFit='cover'
												/>
												<p>{link.name}</p>
											</a>
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
			</section>
			<motion.div initial={{ x: -250 }} animate={{ x: 0 }}>
				<StartProject />
			</motion.div>
		</>
	);
};

export default about;

export async function getStaticProps() {
	// export async function getServerSideProps() {
	const response = await fetch(`${server}/api/about`);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			details: data,
		},
	};
}
