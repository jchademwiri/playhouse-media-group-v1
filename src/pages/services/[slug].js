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
			<header className={styles.banner}>
				<div className={styles.banner__content}>
					<h1>{service.name}</h1>
					<p>{service.description}</p>
				</div>
			</header>
			<main className={styles.container}>
				{/* <section className={styles.container__content}> */}
				{service.details.map((detail) => (
					<div key={detail.id} className={styles.container__content}>
						<h3>{detail.title}</h3>
						<p>{detail.description}</p>
					</div>
				))}
				{/* </section> */}
			</main>
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
	// export async function getServerSideProps(context) {
	const { params } = context;
	const res = await fetch(`${server}/api/services/${params.slug}`);
	const data = await res.json();

	return {
		props: {
			service: data
		}
	};
}
