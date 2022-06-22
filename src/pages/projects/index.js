// import styles from '../../styles/projects.module.scss';
import styles from './projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { server } from '../../config';
import { NextSeo } from 'next-seo';
import Loading from '../../components/Loading';
import { SanityClient, urlFor } from '../../../sanity';
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
				<div className={styles.projects}>
					{projects ? (
						projects.slice(0, 10).map((project) => (
							<div key={project.id} className={styles.project}>
								<Image
									className={styles.mainImage}
									src={urlFor(project.mainImage).url()}
									width={1920}
									height={1080}
									alt={project.title}
									placeholder='blur'
									blurDataURL={urlFor(project.mainImage).url()}
									objectFit='cover'
								/>
								<h3>{project.title}</h3>
								<p> {project.description} </p>
								<p>{project.projectUrl}</p>
								<div>
									{project.projectTypes &&
										project.projectTypes.map((projectType) => (
											<>
												<p>{projectType.title}</p>
												<p>{projectType.description}</p>
												<div className='w-10 h-10'>
													<Image
														className='rounded-full '
														src={urlFor(projectType.image).url()}
														width={250}
														height={250}
														alt={projectType.title}
														placeholder='blur'
														blurDataURL={urlFor(projectType.image).url()}
														objectFit='cover'
													/>
												</div>
											</>
										))}
								</div>
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
	// const response = await fetch(`${server}/api/projects`);
	// const projects = await response.json();

	const query = `
	*[_type == "projects"] {
				_id,
				title,
		projectUrl,
		projectTypes[]->{
						_id,
						title,
						description,
				image,
						},
  description,
  mainImage,
}		
	`;

	const projects = await SanityClient.fetch(query);

	return {
		props: {
			projects,
		},
	};
}
