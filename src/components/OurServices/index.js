import styles from './OurServices.module.scss';
import { helps } from '../../data/index';
import Link from 'next/link';
import Image from 'next/image';

const OurServices = () => {
	return (
		<section className={styles.container}>
			<div className={styles.hed}>
				<h2>How can we help you?</h2>
			</div>
			<div className={styles.services}>
				{helps.map((help) => (
					<div key={help.id} className={styles.service}>
						<h3>{help.name}</h3>
						<p> {help.description} </p>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurServices;
