import Image from 'next/image';
import styles from './Footer.module.scss';
import { consulting } from './data';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.container__title}>
				<Image
					src='/images/logo.svg'
					alt='logo'
					width={60}
					height={60}
					placeholder='blur'
					blurDataURL='/images/logo.svg'
				/>
				<h2>Web Solutions</h2>
			</div>
			<div className={styles.container__content}>
				{consulting.map((consulting) => (
					<div key={consulting.id} className={styles.container__content__item}>
						<Image
							src={consulting.image}
							alt={consulting.name}
							width={36}
							height={36}
						/>
						<h3>{consulting.name}</h3>
						<p>{consulting.description}</p>
						<a
							className={styles.project_link}
							target='_blank'
							href='https://wa.me/+27740491433'
							rel='noopener noreferrer'>
							Let&apos;s get started
						</a>
					</div>
				))}

				<div className={styles.container__content__links}>
					<h3 className={styles.container__content__links__menu}>
						Our Services
					</h3>
					<ul>
						<li>
							<Link href={'/services/web-development'}>Web Development</Link>
						</li>
						<li>
							<Link href={'/services/search-engine-optimization'}>
								Search Engine Optmization
							</Link>
						</li>
						<li>
							<Link href={'/services/digital-marketing'}>
								Digital Marketing
							</Link>
						</li>
						<li>
							<Link href={'/projects'}>Portfolio</Link>
						</li>
					</ul>
				</div>
				<div className={styles.container__content__links}>
					<h3 className={styles.container__content__links__social}>
						Social Links
					</h3>
					<ul>
						<li>
							<a
								target='_blank'
								href={'https://www.facebook.com/playhousemediagroup'}>
								Facebook
							</a>
						</li>
						<li>
							<a
								target='_blank'
								href={'https://www.instagram.com/playhousemediagroup'}>
								Instagram
							</a>
						</li>
						<li>
							<a
								target='_blank'
								href={'https://www.linkedin.com/in/jchademwiri/'}>
								Linkedin
							</a>
						</li>
						<li>
							<a
								target='_blank'
								href={
									'https://www.youtube.com/channel/UCgnCtM2Ih8L5xNXXpBREmEg'
								}>
								Youtube
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* </div> */}
		</footer>
	);
};

export default Footer;
