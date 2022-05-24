import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import { server } from '../../config';
import styles from './project.module.scss';
import Link from 'next/link';

const project = ({ project }) => {
	const SEO = {
		title: `${project.name} | Playhouse Media Group`,
		description: `${project.description}`,
		canonical: `${server}/projects/${project.slug}`,
		openGraph: {
			url: `${server}/projects/${project.slug}`,
			title: `${project.name} | Playhouse Media Group`,
			description: `${
				project.description
					? project.description
					: 'A professional web developer and digital marketing specialist'
			}`,
		},
	};
	return (
		<>
			<NextSeo {...SEO} />
			<header className={styles.banner}>
				<Image
					className={styles.banner__image}
					placeholder='blur'
					src={project.image}
					alt={project.name}
					blurDataURL={project.image}
					width={1440}
					height={1024}
					objectFit='cover'
				/>
			</header>
			<main className={styles.container}>
				<h1>{project.name}</h1>
				<p>{project.description} </p>
				<div className={styles.technology}>
					<p>Technologies we have used.</p>
					{project.technologies ? (
						project.technologies
							.toString()
							.split(',')
							.map((technology) => (
								<span className={styles.technologies} key={technology}>
									{technology},{'  '}
								</span>
							))
					) : (
						<span>No technologies available</span>
					)}
				</div>
				<div className={styles.links}>
					<a
						href={project.github}
						target='_blank'
						rel='noopener noreferrer'
						className={styles.link}>
						{project.github ? 'Github' : <span>No Github available</span>}
					</a>
					{'  '}
					<a
						href={project.website}
						target='_blank'
						rel='noopener noreferrer'
						className={styles.link}>
						{project.website ? 'Website' : <span>No Website available</span>}
					</a>
				</div>
			</main>
		</>
	);
};

export default project;

export async function getStaticPaths() {
	const res = await fetch(`${server}/api/projects`);
	const projects = await res.json();
	const paths = projects.map((project) => ({
		params: { slug: project.slug },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps(context) {
	const { params } = context;
	const res = await fetch(`${server}/api/projects/${params.slug}`);
	const data = await res.json();

	return {
		props: {
			project: data,
		},
	};
}
