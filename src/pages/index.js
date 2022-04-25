import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import StartProject from '../components/StartProject';
import styles from '../styles/home.module.scss';
import { NextSeo } from 'next-seo';
import { server } from '../config';
import WhatWeDo from '../components/WhatWeDo';
import Clients from '../components/Clients';
import Featured from '../components/Featured';
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
				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
						},
						visible: {
							scale: 1,
							opacity: 1,
							transition: {
								delay: 0.4,
							},
						},
					}}>
					<Hero />
				</motion.div>
				<Featured />
				<OurServices />
				<WhatWeDo />
				{/* <Clients /> */}
				<StartProject />
			</main>
		</>
	);
};
export default index;
