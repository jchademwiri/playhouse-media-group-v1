import styles from './StartProject.module.scss';

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

					<a
						className={styles.project_link}
						target='_blank'
						href='https://wa.me/+27740491433'
						rel='noopener noreferrer'>
						Let&apos;s get started
					</a>
				</div>
			</div>
		</section>
	);
};

export default StartProject;
