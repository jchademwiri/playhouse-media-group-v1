import styles from '../../styles/services.module.scss';
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
			<h1>Our Service</h1>

			{services.map((service) => (
				<div key={service.id} className={styles.service}>
					<Image
						placeholder='blur'
						src={service.image}
						alt={service.name}
						blurDataURL={service.image}
						width={720}
						height={512}
					/>
					<h2>{service.name}</h2>
					<p>{service.description}</p>
					<Link href={`/services/${service.slug}`}>
						<a>{service.name}</a>
					</Link>
				</div>
			))}
		</>
	);
};

export default services;

// export async function getStaticProps() {
export async function getServerSideProps() {
	const response = await fetch(`${server}/api/services`);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			services: data
		}
	};
}
