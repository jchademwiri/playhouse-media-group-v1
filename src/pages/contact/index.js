import styles from './contact.module.scss';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
// import useSWR, { mutate } from 'swr';
import useSWR from 'swr';
import { server } from '../../config';
import Link from 'next/link';
import Image from 'next/image';

//  fetch data using swr hook and mutate data
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const contact = () => {
	const SEO = {
		title: `PMG | Contact`,
		description: `A professional web developer and digital marketing specialist bassed in South Africa.`,
		canonical: `${server}/contact`,
		openGraph: {
			url: `${server}/contact`,
			title: `PMG | Contact`,
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
				<div className={styles.about}>
					<>
						{/* <h1 className={styles.title}>Web Developer Specialist</h1> */}
						<h1 className={styles.title}>
							Full Stack Web & Digital Specialist
						</h1>
						<h2 className={styles.subTitle}>
							{/* Hi, I am <br /> */}
							{/* <span className={styles.name}>Jacob</span> Chademwiri */}
							<span className={styles.name}>Plahouse</span> Media Group
						</h2>
					</>
					<div className={styles.text}>
						<p>
							We are a group of professionals specialized in web development,
							SEO optimization and digital marketing and other business
							solutions to help you run your business smoothly. We also provide
							you with office solutions which includes Microsoft 365 licensing.
						</p>
					</div>
					<div className={styles.contact}>
						<div className={styles.contact_phone}>
							<Image
								className={styles.icon}
								src='/images/phone.png'
								alt='phone'
								width='31'
								height='31'
							/>
							<address className={styles.address}>061 691 1656</address>
						</div>
						<div className={styles.contact_email}>
							<Image
								className={styles.icon}
								src='/images/email.png'
								alt='phone'
								width='31'
								height='31'
							/>
							<address className={styles.address}>
								info@playhousemedia.net
							</address>
						</div>
					</div>
				</div>

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
