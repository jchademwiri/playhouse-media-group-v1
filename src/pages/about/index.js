import styles from './about.module.scss';
import { server } from '../../config';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
// import { useSWR } from 'swr';

const about = ({ details }) => {
	const SEO = {
		title: `Jacob Chademwiri | About`,
		description: `A professional web developer and digital marketing specialist bassed in South Africa.`,
		canonical: `${server}/about`,
		openGraph: {
			url: `${server}/about`,
			title: `Jacob Chademwiri | About`,
			description: `A professional web developer and digital marketing specialist`,
		},
	};

	// fetch data using swr hook
	// const { data, error } = useSWR(`${server}/api/projects`, {
	// 	initialData: details,
	// 	revalidateOnFocus: false,
	// 	revalidateOnReconnect: false
	// });

	return (
		<>
			<NextSeo {...SEO} />
			<section className={styles.container}>
				{details.map((detail) => (
					<div key={detail.id} className={styles.container__about}>
						<h1>About Me</h1>
						<h2>{detail.name}</h2>
						<p>{detail.description}</p>
						<h3>Skills</h3>
						<div className={styles.skills}>
							{detail.skills
								.toString()
								.split(',')
								.map((skill) => (
									<p key={skill} className={styles.skills}>
										{skill}
									</p>
								))}
						</div>
						<div className={styles.technologies}>
							<h3>Technologies</h3>
							{detail.technologies
								.toString()
								.split(',')
								.map((technology) => (
									<p key={technology} className={styles.technologies}>
										{technology}
									</p>
								))}
						</div>
						<div className={styles.container__social}>
							<h3>Social Links</h3>
							{detail.links.map((link) => (
								<a
									key={link.id}
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'>
									<div className={styles.container__social__link}>
										<Image
											src={`${link.icon}`}
											alt={link.name}
											height={50}
											width={50}
											objectFit='cover'
										/>
										<p>{link.name}</p>
									</div>
								</a>
							))}
						</div>
						<div>
							<h3>Contact Details </h3>
							{detail.contacts.map((contact) => (
								<div key={contact.id} className={styles.container__contact}>
									<p>{contact.name}</p>
									<p>{contact.url}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</section>
		</>
	);
};

export default about;

export async function getStaticProps() {
	// export async function getServerSideProps() {
	const response = await fetch(`${server}/api/about`);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			details: data,
		},
	};
}
