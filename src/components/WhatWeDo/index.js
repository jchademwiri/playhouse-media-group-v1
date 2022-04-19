import styles from './WhatWeDo.module.scss';
import Image from 'next/image';

const WhatWeDo = () => {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>What We Do</h2>
			<div className={styles.content}>
				<div className={styles.item}>
					<h3 className={styles.titles}>
						We help people to build their <br />
						<span className={styles.digital}>
							Digital products successfully
						</span>
					</h3>

					<div className={styles.boxes}>
						<div className={styles.box}>
							<div className={styles.icon}>
								<Image
									src={'/images/analysis.svg'}
									width={100}
									height={100}
									alt='Analysis'
									blurDataURL='/images/analysis.svg'
									placeholder='blur'
								/>
							</div>
							<h4>Analysis</h4>
						</div>
						<div className={styles.box}>
							<div className={styles.icon}>
								<Image
									src={'/images/design.svg'}
									width={100}
									height={100}
									alt='Design'
									blurDataURL='/images/design.svg'
									placeholder='blur'
								/>
							</div>
							<h4>Design</h4>
						</div>
						<div className={styles.box}>
							<div className={styles.icon}>
								<Image
									src={'/images/development-01.svg'}
									width={100}
									height={100}
									alt='Development'
									blurDataURL='/images/development-01.svg'
									placeholder='blur'
								/>
							</div>
							<h4>Development</h4>
						</div>
						<div className={styles.box}>
							{/* <div className={styles.icon}> */}
							<Image
								src={'/images/testing.svg'}
								width={100}
								height={100}
								alt='Testing'
								blurDataURL='/images/testing.svg'
								placeholder='blur'
							/>
							<h4>Testing</h4>
							{/* </div> */}
						</div>
						<div className={styles.box}>
							<div className={styles.icon}>
								<Image
									src={'/images/deployment.svg'}
									width={100}
									height={100}
									alt='Deployment'
									blurDataURL='/images/deployment.svg'
									placeholder='blur'
								/>
							</div>

							<h4>Deployment</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatWeDo;
