import styles from './contact.module.scss';
import Head from 'next/head';
const contact = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className={styles.container}>
				<h1>Contact</h1>
			</section>
		</>
	);
};

export default contact;
