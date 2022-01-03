import Head from 'next/head';
import Image from 'next/image';
import { server } from '../../config';
import styles from './service.module.scss';
const service = ({ service }) => {
	return (
		<>
			<Head>
				<title>{service.name} | Our Services</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className={styles.container}>
				<Image
					placeholder='blur'
					src={service.image}
					alt={service.name}
					blurDataURL={service.image}
					width={720}
					height={512}
					objectFit='cover'
				/>
				<h1>{service.name}</h1>
				<p>{service.description} </p>
			</section>
		</>
	);
};

export default service;

export async function getStaticPaths() {
	const res = await fetch(`${server}/api/services`);
	const services = await res.json();
	const paths = services.map((service) => ({
		params: { slug: service.slug }
	}));
	return { paths, fallback: false };
}

export async function getStaticProps(context) {
	const { params } = context;
	const res = await fetch(`${server}/api/services/${params.slug}`);
	const data = await res.json();

	return {
		props: {
			service: data
		}
	};
}
