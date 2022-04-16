import styles from './Featured.module.scss';
import { offers } from '../../data/offers';
import Loading from '../Loading';
import Link from 'next/link';
const Featured = () => {
	return (
		<>
			<div className={styles.features}>
				{/* <div className={styles.card}> */}
				{offers ? (
					offers.map((offer) => (
						<div className={styles.card} key={offer.id}>
							<h3 className={styles.title}>{offer.name}</h3>
							<p className={styles.desc}>{offer.description}</p>
							<Link href='#'>
								<a className={styles.offer_link}>Learn More</a>
							</Link>
						</div>
					))
				) : (
					<>
						<Loading />
					</>
				)}
				
			</div>
		</>
	);
};

export default Featured;
