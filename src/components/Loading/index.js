import styles from './loading.module.scss';
const Loading = () => {
	return (
		<>
			<div className={styles.loader}>
				<div className={styles.bouncer}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</>
	);
};

export default Loading;
