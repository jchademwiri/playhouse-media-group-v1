import styles from './OurServices.module.scss';
import { helps } from '../../data/helps';
import Loading from '../Loading';

const OurServices = () => {
	return (
		<section className={styles.container}>
			<div className={styles.hed}>
				<h2>How can we help you?</h2>
			</div>
			<div className={styles.services}>
				{helps ? (
					helps.map((help) => (
						<div key={help.id} className={styles.service}>
							<h3>{help.name}</h3>
							<p> {help.description} </p>
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

export default OurServices;
