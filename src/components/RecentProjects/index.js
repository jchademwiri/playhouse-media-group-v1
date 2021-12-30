import styles from './RecentProjects.module.scss';
import { recentProjects } from '../../data/index';
import Link from 'next/link';
import Image from 'next/image';
const RecentProjects = () => {
	return (
		<section className={styles.container}>
			<h2>Recent Projects</h2>
			<div className={styles.services}>
				{recentProjects.map((project) => (
					<div key={project.id} className={styles.service}>
						<Image
							placeholder='blur'
							src={project.image}
							alt={project.name}
							blurDataURL={project.image}
							width={1440}
							height={1024}
						/>
						<h3>{project.name}</h3>
						<p> {project.description} </p>
						<h4 className={styles.techstack}>View Project</h4>
						<p className={styles.technology}>
							{project.technologies
								.toString()
								.split(',')
								.map((technology) => (
									<span key={technology}>{technology}</span>
								))}
						</p>
						<Link href={`/projects/${project.slug}`} className={styles.link}>
							Learn More
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default RecentProjects;
