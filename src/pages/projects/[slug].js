import Head from 'next/head';
import Image from 'next/image';
import { server } from '../../config';
const project = ({ project }) => {
	return (
		<>
			<Head>
				<title> {project.name}</title>
				<meta
					name='description'
					content='A professional web developer and digital marketing specialist'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Image
				placeholder='blur'
				src={project.image}
				alt={project.name}
				blurDataURL={project.image}
				width={720}
				height={512}
			/>
			<h1>{project.name}</h1>
			<p>{project.description} </p>
			<p> {project.link} </p>
			<p> {project.github} </p>
		</>
	);
};

export default project;

// export async function getStaticPaths() {
// 	return {
// 		paths: [
// 			{ params: { slug: 'playhouse-media-group' } },
// 			{ params: { slug: 'sea-harvest-website' } },
// 			{ params: { slug: 'micro-finance' } }
// 		],
// 		fallback: false
// 	};
// }

export async function getStaticProps(context) {
	const { params } = context;
	const response = await fetch(`${server}/api/projects/${params.slug}`);
	const data = await response.json();

	return {
		props: {
			project: data
		}
	};
}
