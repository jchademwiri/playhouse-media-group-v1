import styles from './contact.module.scss';
import { NextSeo } from 'next-seo';
import { server } from '../../config';
import Router from 'next/router';
import { icons } from '../../components/Navbar/data';

const contact = () => {
	// const router = useRouter();
	const SEO = {
		title: `Contact | Playhouse Media Group`,
		description: `A professional web developer and digital marketing specialist bassed in South Africa.`,
		canonical: `${server}/contact`,
		openGraph: {
			url: `${server}/contact`,
			title: `Contact | Playhouse Media Group`,
			description: `A professional web developer and digital marketing specialist`,
		},
	};

	async function handleOnSubmit(e) {
		e.preventDefault();
		try {
			const formData = {};
			Array.from(e.currentTarget.elements).forEach((field) => {
				if (!field.name) return;
				formData[field.name] = field.value;
			});

			fetch('/api/mail', {
				method: 'post',
				body: JSON.stringify(formData),
			});

			alert('Message sent successfully');
			console.log('sucsess');
			return Router.push('/');
		} catch (error) {
			console.error(error);
			console.log('failed');
		}
	}

	return (
		<>
			<NextSeo {...SEO} />
			<div className={styles.contact}>
				<div className={styles.contact__container}>
					<section className={styles.contact__container__left}>
						<h1 className={styles.title}>Say Hello</h1>
						<div className={styles.contactLinks}>
							<div className='py-1 mt-2'>
								<p>
									Mobile :<a href='tel:++27740491433'> +27 74 049 1433</a>
								</p>
							</div>
							<div className='py-1'>
								<p>
									Email :{' '}
									<a href='mailto:info@playhousemedia.net'>
										info@playhousemedia.net
									</a>
								</p>
							</div>
							<div className='py-1'>
								<p>
									Website :{' '}
									<a
										href='http://www.playhousemedia.net'
										target='_blank'
										rel='noopener noreferrer'>
										www.playhousemedia.net
									</a>
								</p>
							</div>
						</div>
						<div className='py-4'>
							<div className={styles.socialLinks}>
								{icons.map((icon) => (
									<a
										className={styles.link}
										key={icon.name}
										href={icon.link}
										target='_blank'
										rel='noopener noreferrer'>
										{icon.icon}
									</a>
								))}
							</div>
						</div>
					</section>
					<section className={styles.contact__container__right}>
						<h2 className='my-2 text-2xl'>Ask Your Queries</h2>
						<form
							method='post'
							className={styles.form}
							onSubmit={handleOnSubmit}>
							<p className={styles.formInput}>
								{/* <label htmlFor='name'>Name</label> */}
								<input
									required
									className={styles.input}
									type='text'
									name='name'
									id=''
									placeholder='Enter Your Fullname'
								/>
							</p>
							<p className={styles.formInput}>
								{/* <label htmlFor='email'>Email</label> */}
								<input
									required
									className={styles.input}
									type='email'
									name='email'
									id=''
									placeholder='Enter Your Email Address'
								/>
							</p>

							<p className={styles.formInput}>
								{/* <label htmlFor='message'>Message</label> */}
								<textarea
									required
									className={styles.textarea}
									name='message'
									placeholder='Enter Your Message'></textarea>
							</p>
							<p>
								<button className={styles.btn} type='submit'>
									Send Message
								</button>
							</p>
						</form>
					</section>
				</div>
			</div>
		</>
	);
};

export default contact;

// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(
		`https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJaYx3036glR4RIKQtssmwCrc&key=AIzaSyDJia8d-EpG9mcO8i5oYfRSlm4wh449iJ8`
	);
	const reviews = await res.json();
	console.log(reviews);

	// Pass data to the page via props
	return { props: { reviews } };
}

// `https://mybusiness.googleapis.com/v4/accounts/12230911554298719433/locations/ChIJZb_ij42hlR4RE4hPf99oLL4/reviews`
// GOOGLE_API_KEY=AIzaSyDJia8d-EpG9mcO8i5oYfRSlm4wh449iJ8
