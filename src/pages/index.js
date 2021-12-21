import Head from 'next/head';
import Image from 'next/image';

import Whatsapp from '../components/CTA/Whatsapp';
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

			<h1>Home Page with CTA</h1>

			<Whatsapp whatsapp='+27 616 91 1656' />
		</div>
	);
}
