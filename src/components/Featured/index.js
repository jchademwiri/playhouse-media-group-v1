import styles from './Featured.module.scss';
import { offers } from '../../data/offers';
import Loading from '../Loading';
import Link from 'next/link';
const Featured = () => {
	return (
		<>
			<div className={styles.features}>
				{offers ? (
					offers.map((offer) => (
						<div className={styles.card} key={offer.id}>
							<h3 className={styles.title}>{offer.name}</h3>
							<p className={styles.desc}>{offer.description}</p>
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
