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
								<h3>
									<Link href={`/projects/${project.slug}`}>
										<a>{project.name}</a>
									</Link>
								</h3>
								<p> {project.description} </p>
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

	return {
		props: {
			projects,
		},
	};
}
