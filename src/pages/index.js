import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import styles from '../styles/home.module.scss';
import { NextSeo } from 'next-seo';
import { server } from '../config';
import WhatWeDo from '../components/WhatWeDo';
import Clients from '../components/Clients';
import Featured from '../components/Featured';
import StartProject from '../components/StartProject';
import { motion } from 'framer-motion';

const index = () => {
	const SEO = {
		title: 'PMG | Web Developer Specialists',
		canonical: `${server}/`,
		openGraph: {
			url: `${server}/`,
			title: 'PMG | Web Developer Specialists',
		},
	};
	return (
		<>
			<NextSeo {...SEO} />
			<main className={styles.container}>
				<Hero />
				<Featured />
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
export default index;
