import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import styles from '../styles/home.module.scss';
import { NextSeo } from 'next-seo';
import { server } from '../config';
import WhatWeDo from '../components/WhatWeDo';
import Featured from '../components/Featured';
import StartProject from '../components/StartProject';

import { motion } from 'framer-motion';

import RecentProjects from '../components/RecentProjects';
import { SanityClient } from '../../sanity';
import Head from 'next/head';

const index = ({ projects }) => {
	const description =
		'We takes pride in having worked with and advised many Business Start-Ups, Entrepreneurs, & Established Businesses Globally on their Strategic Marketing Initiatives. We welcome the opportunity to offer your Business the chance to build a successful Marketing Strategy to better dominate your market segment quickly and effectively.';
	const title = 'Playhouse Media Group| Web Developer';

	return (
		<>
			<Head>
				<og:title>{title}</og:title>
				<og:description>{description}</og:description>
				<og:url>`${server}`</og:url>
				<og:image>`${server}/images/pmg-social.jpg`</og:image>
			</Head>
			<NextSeo {...SEO} />
			<main className={styles.container}>
				<Hero />

				<Featured />
				{projects.length > 0 && <RecentProjects projects={projects} />}
				<OurServices />

				<WhatWeDo />
				{/* <Clients /> */}
				<motion.div initial={{ x: -250 }} animate={{ x: 0 }}>
					<StartProject />
				</motion.div>
			</main>
		</>
	);
};

export async function getServerSideProps() {
	const query = `
	*[_type == "projects"] | order(publishedAt desc) {
		_id,
		title,
	projectUrl,
	projectTypes[]->{
			_id,
			title,
			image,
		},
	tags,
	description,
	mainImage,
	}		
	`;

	const projects = await SanityClient.fetch(query);

	return {
		props: {
			projects,
		},
	};
}

export default index;
