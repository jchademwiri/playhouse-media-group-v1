import styles from './StartProject.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const StartProject = () => {
	return (
		<section className={styles.container}>
			<div className={styles.container__text}>
				<h2>Have a Project on mind?</h2>
				<p>
					Whether you have a small business that needs a web presence or a more
					customized ecommerce shopping cart solution, our specialized team will
					collaborate with you to develop a strategic solution to strengthen
					your brand.
				</p>
				<Link className={styles.project_link} href='#'>
					Let&apos;s get started
				</Link>
			</div>
			<div className={styles.container__image}>
				{/* <Image
					className={styles.container__image__image}
					placeholder='blur'
					blurDataURL='/images/start-a-project.jpg'
					src='/images/start-a-project.jpg'
					width={800}
					height={574}
					alt='Start a project'
				/> */}
			</div>
		</section>
	);
};

export default StartProject;
