import styles from './OurServices.module.scss';
import { services } from '../../data/index';
import Link from 'next/link';
import Image from 'next/image';

const OurServices = () => {
	return (
		<section className={styles.container}>
			<div className={styles.hed}>
				<h2>Services</h2>
			</div>
			<div className={styles.services}>
				{services.map((service) => (
					<div key={service.id} className={styles.service}>
						<Image
							placeholder='blur'
							src={service.image}
							alt={service.name}
							blurDataURL={service.image}
							width={1440}
							height={1024}
							layout='responsive'
							objectFit='cover'
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
