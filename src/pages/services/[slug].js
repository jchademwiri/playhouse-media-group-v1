import Head from 'next/head';
import Image from 'next/image';
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

			<Image
				placeholder='blur'
				src={service.image}
				alt={service.name}
				blurDataURL={service.image}
				width={720}
				height={512}
			/>
			<h1>{service.name}</h1>
			<p>{service.description} </p>
		</>
	);
};

export default service;

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: 'web-development' } },
			{ params: { slug: 'digital-marketing' } },
			{ params: { slug: 'search-engine-optimization' } }
		],
		fallback: false
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(
		`http://localhost:3000/api/services/${params.slug}`
	);
	const data = await response.json();

	return {
		props: {
			service: data
		}
	};
}
