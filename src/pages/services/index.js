import styles from './services.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { server } from '../../config';
import { NextSeo } from 'next-seo';
import Loading from '../../components/Loading';

// import { useSWR } from 'swr';
// import OurServices from '../../components/OurServices';

const services = ({ services }) => {
	const SEO = {
		title: `Our Services | Playhouse Media Group`,
		canonical: `${server}/services`,
		openGraph: {
			url: `${server}/services`,
			title: `Our Services | Playhouse Media Group`,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />

			<header className={styles.banner}>
				<h1>Digital Strategy</h1>
				<p>Web Development, Internet Strategy, SEO, SEM, Social Media, </p>
			</header>
			<main className={styles.container}>
				<section className={styles.container__content}>
					<div className={styles.container__content__title}>
						<h2>Our Services</h2>
						<p>
							We provide website design and development, Internet strategy and
							consulting, search engine optimization and marketing, and social
							media management services, Microsoft 365, and other IT solutions.
						</p>
					</div>

					<div className={styles.container__content__services}>
						{services ? (
							services.slice(0, 3).map((service) => (
								<div
									key={service.id}
									className={styles.container__content__services__service}>
									<Image
										placeholder='blur'
										blurDataURL={service.image}
										src={service.image}
										alt={service.name}
										width={1440}
										height={1024}
										objectFit='cover'
										priority={true}
									/>
									<h3 className='py-2 text-xl'>
										<Link href={`/services/${service.slug}`}>
											<a>{service.name}</a>
										</Link>
									</h3>
									<p> {service.description} </p>

									{/* <Link
										href={`/services/${service.slug}`}
										className={styles.link}>
										Learn More
									</Link> */}
								</div>
							))
						) : (
							<>
								<Loading />
							</>
						)}
					</div>
				</section>
			</main>
		</>
	);
};

export default services;

// export async function getStaticProps() {
export async function getServerSideProps() {
	const response = await fetch(`${server}/api/services`);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			services: data,
		},
	};
}
