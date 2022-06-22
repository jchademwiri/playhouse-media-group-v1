import styles from './RecentProjects.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '../Loading';
import { server } from '../../config';
import { projects } from '../../data/projects';
const RecentProjects = ({ projects }) => {
	console.log(projects);
	return (
		<section id='recentProjects' className={styles.container}>
			<h2>Recent Projects</h2>
			<div className={styles.projects}>
				{projects ? (
					projects.map((project) => (
						<div className={styles.card} key={project.id}>
							<h3 className={styles.title}>{project.name}</h3>
							<p className={styles.desc}>{project.description}</p>
						</div>
					))
				) : (
					<>
						<Loading />
					</>
				)}
			</div>
		</section>
	);
};

export default RecentProjects;
