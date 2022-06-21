import styles from './OurServices.module.scss';
import { helps } from '../../data/helps';
import Loading from '../Loading';

const OurServices = () => {
	return (
		<section className={styles.container}>
			<div className={styles.servicces__container}>
				<div className={styles.header}>
					<h2 className='py-2 text-3xl font-semibold'>How can we help you?</h2>
				</div>
				<div className={styles.services}>
					{helps ? (
						helps.map((help) => (
							<div key={help.id} className={styles.service}>
								<h3 className='text-2xl'>{help.name}</h3>
								<p className='text-gray-300'> {help.description} </p>
							</div>
						))
					) : (
						<>
							<Loading />
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default OurServices;
