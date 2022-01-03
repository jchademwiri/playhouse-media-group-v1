import Head from 'next/head';
import Image from 'next/image';
import { server } from '../../config';
import styles from './project.module.scss';
const project = ({ project }) => {
	return (
		<>
			<Head>
				<title> {project.name}</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className={styles.container}>
				<Image
					placeholder='blur'
					src={project.image}
					alt={project.name}
					blurDataURL={project.image}
					width={720}
					height={512}
					objectFit='cover'
				/>
				<h1>{project.name}</h1>
				<p>{project.description} </p>
				<p> {project.link} </p>
				<p> {project.github} </p>
			</section>
		</>
	);
};

export default project;

export async function getStaticPaths() {
	const res = await fetch(`${server}/api/projects`);
	const projects = await res.json();
	const paths = projects.map((project) => ({
		params: { slug: project.slug }
	}));
	return { paths, fallback: false };
}

export async function getStaticProps(context) {
	const { params } = context;
	const res = await fetch(`${server}/api/projects/${params.slug}`);
	const data = await res.json();

	return {
		props: {
			project: data
		}
	};
}
