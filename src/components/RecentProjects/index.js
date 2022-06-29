import styles from './RecentProjects.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '../Loading';
import { urlFor } from '../../../sanity';
const RecentProjects = ({ projects }) => {
	if (!projects)
		return (
			<div>
				<Loading />
			</div>
		);
	return (
		<section id='recentProjects'>
			<div className='w-11/12 mx-auto my-10 lg:max-w-[75rem]'>
				{projects.length > 0 ? (
					<>
						<h2 className='my-4 text-xl font-semibold md:text-2xl lg:text-4xl lg:font-bold'>
							Recent Websites We've{' '}
							<Link href='/projects'>
								<span>
									<a className='cursor-pointer text-accent'>Launched.</a>
								</span>
							</Link>
						</h2>
						<p>
							BlakSheep Creative is a full-service digital marketing agency
							specializing in web design and development, custom branding, logo
							design, and online reputation management. We can also help with
							social media marketing, email marketing, print ads, or social
							media ads – whatever your business’s goals need. we've got you
							covered.
						</p>
						<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
							{projects.length > 0 ? (
								projects.slice(0, 3).map((project) => (
									<>
										<div key={project.id} className='py-2 my-4'>
											<Image
												className=''
												src={urlFor(project.mainImage).url()}
												width={1920}
												height={1080}
												alt={project.title}
												placeholder='blur'
												blurDataURL={urlFor(project.mainImage).url()}
												objectFit='cover'
											/>
											{/* <h3>{project.title}</h3>
										<p> {project.description} </p>
										<div>
											<p className='my-2 text-xl text-secondary'>
												Services Rendered
											</p>
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
																		blurDataURL={urlFor(
																			projectType.image
																		).url()}
																		objectFit='cover'
																	/>
																</div>
																</div>
																)}
																<p className='pl-2'>{projectType.title}</p>
													</div>
												))}
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
									*/}
										</div>
									</>
								))
							) : (
								<>
									<p className='text-3xl font-semibold text-center col-span-full'>
										Projects
										<span className='font-medium text-secondary '>
											Coming Soon!
										</span>
									</p>
								</>
							)}
						</div>
					</>
				) : (
					<p>No projects found</p>
				)}
				<div className='py-5 mx-auto text-center md:text-start'>
					<Link href='/projects'>
						<a className='px-10 py-5 font-semibold uppercase bg-primary hover:bg-accent'>
							See More Of Our Websites
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default RecentProjects;
