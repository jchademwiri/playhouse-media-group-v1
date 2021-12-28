import styles from './OurServices.module.scss';
import { services } from './serviceData';
import Link from 'next/link';
import Image from 'next/image';

const OurServices = () => {
	console.log(services);

	return (
		<section className={styles.container}>
			<h2>Services</h2>
			<div className={styles.services}>
				{services.map((service) => (
					<div key={service.id} className={styles.service}>
						<Image
							src={service.image}
							alt={service.name}
							width={1440}
							height={1024}
						/>
						<h3>{service.name}</h3>
						<p> {service.description} </p>
						<Link href={`/services/${service.slug}`} className={styles.link}>
							Learn More
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurServices;
