import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import styles from '../styles/home.module.scss';

import { server } from '../config';
import WhatWeDo from '../components/WhatWeDo';
import Featured from '../components/Featured';
import StartProject from '../components/StartProject';

import { motion } from 'framer-motion';

import RecentProjects from '../components/RecentProjects';
import { SanityClient } from '../../sanity';
import Head from 'next/head';

const index = ({ projects }) => {
	const title = 'Playhouse Media Group | Web Developer';
	const description =
		'We takes pride in having worked with and advised many Business	Start-Ups, Entrepreneurs, & Established Businesses Globally on their Strategic Marketing Initiatives. We welcome the opportunity to offer your Business the chance to build a successful Marketing Strategy to better dominate your market segment quickly and effectively.';
	const previewImage = `https://www.playhousemedia.net/images/pmg-social.jpg`;
	const twitterHandle = '@JChademwiri';

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta property='og:title' content={title} key='ogtitle' />
				<meta property='og:description' content={description} key='ogdesc' />
				{/* Twitter */}
				<meta name='twitter:card' content='summary' key='twcard' />
				<meta name='twitter:creator' content={twitterHandle} key='twhandle' />
				{/* Open Graph */}
				<meta property='og:url' content={server} key='ogurl' />
				<meta property='og:image' content={previewImage} key='ogimage' />
				<meta property='og:site_name' content={title} key='ogsitename' />
			</Head>

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
