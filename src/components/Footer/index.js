import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by &nbsp;<i>Playhouse Media Group</i>
				</a>
			</footer>
		</>
	);
};

export default Footer;
