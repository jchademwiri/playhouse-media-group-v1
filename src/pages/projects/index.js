import styles from '../../styles/projects.module.scss';
import Head from 'next/head';
const projects = () => {
	return (
		<>
			<Head>
				<title>Our Projects</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Projects</h1>
		</>
	);
};

export default projects;
