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
							Recent Websites We&apos;ve{' '}
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
