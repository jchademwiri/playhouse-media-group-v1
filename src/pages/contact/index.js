import styles from './contact.module.scss';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
// import useSWR, { mutate } from 'swr';
import useSWR from 'swr';
import { server } from '../../config';
import Link from 'next/link';

//  fetch data using swr hook and mutate data
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const contact = () => {
	const SEO = {
		title: `Jacob Chademwiri | Contact`,
		description: `A professional web developer and digital marketing specialist bassed in South Africa.`,
		canonical: `${server}/contact`,
		openGraph: {
			url: `${server}/contact`,
			title: `Jacob Chademwiri | Contact`,
			description: `A professional web developer and digital marketing specialist`,
		},
	};

	// fetch data using swr hook
	// const { data, error } = useSWR(
	// 	`${server}/api/projects`,
	// 	{
	// 		initialData: details,
	// 		revalidateOnFocus: false,
	// 		revalidateOnReconnect: false,
	// 	},
	// 	fetcher
	// );

	// if (error) return <div>failed to load</div>;
	// if (!data) return <div>loading...</div>;

	return (
		<>
			<NextSeo {...SEO} />
			<section className={styles.container}>
				<h1>Contact</h1>
				{/* <h3>{data.name}</h3> */}
				{/* {data ? (
					data.map((detail) => (
						<div key={detail.id}>
							<h2>{detail.name}</h2>
							<p>{detail.description}</p>
						</div>
					))
				) : (
					<div>loading...</div>
				)} */}
			</section>
		</>
	);
};

export default contact;
