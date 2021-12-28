import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import RecentProjects from '../components/RecentProjects';
import styles from '../styles/home.module.scss';

const index = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Jacob C - Web Developer</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero />
			<OurServices />
			<RecentProjects />
		</div>
	);
};
export default index;
