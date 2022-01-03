import styles from './services.module.scss';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { server } from '../../config';
const services = ({ services }) => {
	<Head>
		<title>Services</title>
		<meta
			name='description'
			content='A professional web developer and digital marketing specialist'
		/>
		<link rel='icon' href='/favicon.ico' />
	</Head>;
	return (
		<>
			<Head>
				<title>Our Services</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className={styles.container}>
				<h1>Our Services</h1>
				<div className={styles.services}>
					{services.map((service) => (
						<div key={service.id} className={styles.service}>
							<Image
								placeholder='blur'
								src={service.image}
								alt={service.name}
								blurDataURL={service.image}
								width={1440}
								height={1024}
								objectFit='cover'
							/>
							<h3>{service.name}</h3>
							<p> {service.description} </p>

							<Link href={`/services/${service.slug}`} className={styles.link}>
								Learn More
							</Link>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default services;

export async function getStaticProps() {
	const response = await fetch(`${server}/api/services`);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			services: data
		}
	};
}
