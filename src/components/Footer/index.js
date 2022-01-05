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
						<Link className={styles.project_link} href='#'>
							Let&apos;s get started
						</Link>
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
							<Link href={'https://www.facebook.com/playhousemediagroup'}>
								Facebook
							</Link>
						</li>
						<li>
							<Link href={'https://www.instagram.com/playhousemediagroup'}>
								Instagram
							</Link>
						</li>
						<li>
							<Link href={'https://www.linkedin.com/in/jchademwiri/'}>
								Linkedin
							</Link>
						</li>
						<li>
							<Link
								href={
									'https://www.youtube.com/channel/UCgnCtM2Ih8L5xNXXpBREmEg'
								}>
								Youtube
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* </div> */}
		</footer>
	);
};

export default Footer;
