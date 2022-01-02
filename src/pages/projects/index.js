import styles from '../../styles/projects.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
const projects = ({ projects }) => {
	// console.log(projects);
	return (
		<>
			<Head>
				<title>Our Projects</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Our Projects</h1>
			{projects.map((project) => (
				<div key={project.id} className={styles.service}>
					<Image
						placeholder='blur'
						src={project.image}
						alt={project.name}
						blurDataURL={project.image}
						width={720}
						height={512}
					/>
					<h2>{project.name}</h2>
					<p>{project.description}</p>
					<Link href={`/projects/${project.slug}`}>
						<a>{project.name}</a>
					</Link>
				</div>
			))}
		</>
	);
};

export default projects;

export async function getStaticProps() {
	const response = await fetch(
		'https://jacobc.playhousemedia.net/api/projects'
	);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			projects: data
		}
	};
}
