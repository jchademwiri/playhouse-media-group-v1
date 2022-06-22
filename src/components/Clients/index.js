import styles from './Clients.module.scss';

const Clients = ({ projects }) => {
	return (
		<>
			<div className={styles.container}>
				<h2>Some of Our Clients</h2>
				<p>This is our clints</p>
				{projects &&
					projects.slice(0, 10).map((project) => (
						<div key={project.id} className={styles.project}>
							<h3>
								<Link href={`/projects/${project.slug}`}>
									<a>{project.name}</a>
								</Link>
							</h3>
							<p> {project.description} </p>
						</div>
					))}
			</div>
		</>
	);
};

export default Clients;

export async function getServerSideProps() {
	const response = await fetch(`${server}/api/projects`);
	const projects = await response.json();
	console.log(projects);

	return {
		props: {
			projects,
		},
	};
}
