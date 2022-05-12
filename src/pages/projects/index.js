// import styles from '../../styles/projects.module.scss';
import styles from './projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { server } from '../../config';
import { NextSeo } from 'next-seo';
import Loading from '../../components/Loading';
const projects = ({ projects }) => {
	// console.log(projects.slice(0, 10));

	const SEO = {
		title: 'Portfolio | Playhouse Media Group',

		canonical: `${server}/projects`,
		openGraph: {
			url: `${server}/projects`,
			title: 'Portfolio | Playhouse Media Group',
		},
	};
	return (
		<>
			<NextSeo {...SEO} />

			<header className={styles.banner}>
				<div className={styles.banner__content}>
					<h1>Portfolio</h1>

					<p> A custom solution for your business </p>
				</div>
			</header>
			<main className={styles.container}>
				{/* <h1>Completed Projects</h1> */}
				<div className={styles.projects}>
					{projects ? (
						projects.slice(0, 10).map((project) => (
							<div key={project.id} className={styles.project}>
								<Image
									placeholder='blur'
									src={project.image}
									alt={project.name}
									blurDataURL={project.image}
									width={1440}
									height={1024}
									objectFit='cover'
								/>
								<h3>{project.name}</h3>
								<p> {project.description} </p>

								<p className={styles.technology}>
									{project.technologies ? (
										project.technologies
											.toString()
											.split(',')
											.map((technology) => (
												<span key={technology}>{technology}</span>
											))
									) : (
										<span>No technologies found</span>
									)}
								</p>
								{/* <div className={styles.links}>
									<a
										href={`${project.github}`}
										target='_blank'
										rel='noreferrer'
										className={styles.link}>
										View on Github
									</a>
									<a
										href={`${project.website}`}
										target='_blank'
										rel='noreferrer'
										className={styles.link}>
										View Live
									</a>
								</div> */}
								{/* <Link
									href={`/projects/${project.slug}`}
									className={styles.link}>
									View Project
								</Link> */}
							</div>
						))
					) : (
						<>
							<Loading />
						</>
					)}
				</div>
			</main>
		</>
	);
};

export default projects;

// export async function getStaticProps() {
export async function getServerSideProps() {
	const response = await fetch(`${server}/api/projects`);
	const projects = await response.json();
	// console.log(projects);

	return {
		props: {
			projects,
		},
	};
}
