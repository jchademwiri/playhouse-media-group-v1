import styles from './WhatWeDo.module.scss';

const WhatWeDo = () => {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>What We Do</h2>
			<div className={styles.content}>
				<div className={styles.item}>
					<h3 className={styles.titles}>
						I help people to build their <br />
						<span className={styles.digital}>
							Digital products successfully
						</span>
					</h3>
					{/* </div> */}
					<div className={styles.boxes}>
						<div className={styles.box}>
							<div className={styles.icon}>Icon Placeholder</div>
							<h4>Analysis</h4>
						</div>
						<div className={styles.box}>
							<div className={styles.icon}>Icon Placeholder</div>
							<h4>Design</h4>
						</div>
						<div className={styles.box}>
							<div className={styles.icon}>Icon Placeholder</div>
							<h4>Development</h4>
						</div>
						<div className={styles.box}>
							<div className={styles.icon}>Icon Placeholder</div>
							<h4>Testing & Deploy</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatWeDo;
