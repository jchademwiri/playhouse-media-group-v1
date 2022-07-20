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

const index = ({ projects }) => {
	return (
		<>
			{/* <NextSeo {...SEO} /> */}
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
