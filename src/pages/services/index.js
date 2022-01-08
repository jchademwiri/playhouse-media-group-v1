import styles from './services.module.scss';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { server } from '../../config';
import { NextSeo } from 'next-seo';
const services = ({ services }) => {
	const SEO = {
		title: `Jacob Chademwiri | Services`,
		description:
			'A professional web developer and digital marketing specialist',
		canonical: `${server}/services`,
		openGraph: {
			url: `${server}/services`,
			title: `Jacob Chademwiri | Services`,
			description:
				'A professional web developer and digital marketing specialist'
		}
	};

	return (
		<>
			<NextSeo {...SEO} />

			<header className={styles.banner}>
				<h1>Digital Strategy</h1>
				<p>Web Development, Internet Strategy, SEO, SEM, Social Media, </p>
			</header>
			<main className={styles.container}>
				<section className={styles.container__content}>
					<div className={styles.container__content__title}>
						<h2>Our Services</h2>
						<p>
							We provide website design and development, Internet strategy and
							consulting, search engine optimization and marketing, and social
							media management services.
						</p>
					</div>

					<div className={styles.container__content__services}>
						{services.map((service) => (
							<div
								key={service.id}
								className={styles.container__content__services__service}>
								<Image
									placeholder='blur'
									src={service.image}
									alt={service.name}
									blurDataURL={service.image}
									width={1440}
									height={1024}
									objectFit='cover'
								/>
								<h3>
									<Link href={`/services/${service.slug}`}>{service.name}</Link>
								</h3>
								<p> {service.description} </p>

								<Link
									href={`/services/${service.slug}`}
									className={styles.link}>
									Learn More
								</Link>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default services;

export async function getStaticProps() {
	// export async function getServerSideProps() {
	const response = await fetch(`${server}/api/services`);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			services: data
		}
	};
}
