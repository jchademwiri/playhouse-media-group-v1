import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import { server } from '../../config';
import styles from './project.module.scss';
const project = ({ project }) => {
	const SEO = {
		title: `Jacob Chademwiri | ${project.name}`,
		description: `${project.description}`,
		canonical: `${server}/projects/${project.slug}`,
		openGraph: {
			url: `${server}/projects/${project.slug}`,
			title: `Jacob Chademwiri | ${project.name}`,
			description:
				'A professional web developer and digital marketing specialist'
		}
	};
	return (
		<>
			<NextSeo {...SEO} />

			<main className={styles.container}>
				{/* <Image
					placeholder='blur'
					src={project.image}
					alt={project.name}
					blurDataURL={project.image}
					width={720}
					height={512}
					objectFit='cover'
				/> */}
				<h1>{project.name}</h1>
				<p>{project.description} </p>
				<p> {project.link} </p>
				<p> {project.github} </p>
			</main>
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
