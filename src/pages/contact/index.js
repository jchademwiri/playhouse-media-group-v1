import styles from './contact.module.scss';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { server } from '../../config';
const contact = () => {
	const SEO = {
		title: `Jacob Chademwiri | Contact`,
		description: `A professional web developer and digital marketing specialist bassed in South Africa.`,
		canonical: `${server}/contact`,
		openGraph: {
			url: `${server}/contact`,
			title: `Jacob Chademwiri | Contact`,
			description: `A professional web developer and digital marketing specialist`
		}
	};
	return (
		<>
			<NextSeo {...SEO} />
			<section className={styles.container}>
				<h1>Contact</h1>
			</section>
		</>
	);
};

export default contact;
