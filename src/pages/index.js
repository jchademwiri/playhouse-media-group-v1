import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import StartProject from '../components/StartProject';
import styles from '../styles/home.module.scss';
import { NextSeo } from 'next-seo';
import { server } from '../config';
import WhatWeDo from '../components/WhatWeDo';
import Clients from '../components/Clients';
import Featured from '../components/Featured';

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
				<StartProject />
			</main>
		</>
	);
};
export default index;
