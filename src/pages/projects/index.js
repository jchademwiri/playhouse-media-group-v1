// import styles from '../../styles/projects.module.scss';
import styles from './projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { server } from '../../config';
import { NextSeo } from 'next-seo';
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
					{projects.length > 0 ? (
						projects.map((project) => (
							<>
								<div key={project.id} className={styles.project}>
									<div className=''>
										<Image
											// className={styles.mainImage}
											className='rounded-t-lg'
											src={urlFor(project.mainImage).url()}
											width={1920}
											height={1080}
											alt={project.title}
											placeholder='blur'
											blurDataURL={urlFor(project.mainImage).url()}
											objectFit='cover'
											priority={true}
										/>
									</div>
									<h3>{project.title}</h3>
									<p> {project.description} </p>

									<p className='my-2 text-xl text-secondary'>
										Services Rendered
									</p>
									<div>
										{project.projectTypes &&
											project.projectTypes.map((projectType, index) => (
												<div key={index} className='flex py-1 my-1 '>
													{project.mainImage && (
														<div className='w-6 h-auto '>
															<div className='grid rounded-full p-[2px] place-content-center bg-secondary'>
																<Image
																	className='rounded-full '
																	src={urlFor(projectType.image).url()}
																	width={1080}
																	height={1080}
																	alt={projectType.title}
																	placeholder='blur'
																	blurDataURL={urlFor(projectType.image).url()}
																	objectFit='cover'
																	priority={true}
																/>
															</div>
														</div>
													)}
													<p className='pl-2'>{projectType.title}</p>
												</div>
											))}
										<div className='flex'>
											{project.tags &&
												project.tags.map((tag, index) => (
													<div key={index} className='my-2 mr-2 '>
														<span className='p-2 text-sm rounded bg-accent/80'>
															{tag}
														</span>
													</div>
												))}
										</div>
									</div>
									{project.projectUrl && (
										<div className='py-3 my-2'>
											<a
												href={project.projectUrl}
												target='_blank'
												rel='noopener noreferrer'
												className='p-3 bg-primary/50 hover:bg-primary'>
												View Project
											</a>
										</div>
									)}
								</div>
							</>
						))
					) : (
						<>
							<p className='text-3xl font-semibold text-center col-span-full'>
								Projects{' '}
								<span className='font-medium text-secondary '>
									Coming Soon!
								</span>
							</p>
						</>
					)}
				</div>
			</main>
		</>
	);
};

export default projects;

export async function getServerSideProps() {
	const query = `
	*[_type == "projects"] | order(publishedAt desc) {
		_id,
		title,
	projectUrl,
	projectTypes[]->{
			_id,
			title,
			image,
		},
	tags,
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
