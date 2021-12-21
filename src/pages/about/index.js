import styles from '../../styles/about.module.scss';
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
			;<h1>About</h1>
		</>
	);
};

export default about;
