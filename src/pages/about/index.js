import styles from './about.module.scss';
import Head from 'next/head';
const about = () => {
	return (
		<>
			<Head>
				<title>About</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className={styles.container}>
				<h1>About</h1>
			</section>
		</>
	);
};

export default about;
