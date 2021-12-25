import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import styles from '../styles/home.module.scss';

export default function home() {
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
		</div>
	);
}
