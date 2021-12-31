import styles from './StartProject.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const StartProject = () => {
	return (
		<section className={styles.container}>
			<div className={styles.container__content}>
				<div className={styles.container__content__text}>
					<h2>Have a Project on mind?</h2>
					<p>
						Whether you have a small business that needs a web presence or a
						more customized ecommerce shopping cart solution, our specialized
						team will collaborate with you to develop a strategic solution to
						strengthen your brand.
					</p>
					<Link className={styles.project_link} href='#'>
						Let&apos;s get started
					</Link>
				</div>
			</div>
		</section>
	);
};

export default StartProject;
