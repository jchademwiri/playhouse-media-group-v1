import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import RecentProjects from '../components/RecentProjects';
import StartProject from '../components/StartProject';
import styles from '../styles/home.module.scss';
import { NextSeo } from 'next-seo';
import { server } from '../config';
import WhatWeDo from '../components/WhatWeDo';

const index = () => {
	const SEO = {
		title: 'Jacob Chademwiri | Web Developer',
		canonical: `${server}/`,
		openGraph: {
			url: `${server}/`,
			title: 'Jacob Chademwiri | Web Developer'
		}
	};
	return (
		<>
			<NextSeo {...SEO} />
			<main className={styles.container}>
				<Hero />
				<OurServices />
				<WhatWeDo />
				<RecentProjects />
				<StartProject />
			</main>
		</>
	);
};
export default index;
