import styles from './Button.module.scss';
import Link from 'next/link';

const Button = ({ children, onClick, type, buttonStyle, buttonSize }) => {
	const STYLES = ['btnPrimary', 'btnOutline', 'btnTest'];
	const SIZES = ['btnMedium', 'btnLarge'];
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<Link href='/' passHref className={styles.btnMobile}>
			<button
				className={`${styles.btnOutline} ${checkButtonStyle} ${checkButtonSize}`}
				onClick={onClick}
				type={type}>
				{children}
			</button>
		</Link>
	);
};

export default Button;
