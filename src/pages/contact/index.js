import styles from './contact.module.scss';
import { NextSeo } from 'next-seo';
import { server } from '../../config';
import Router from 'next/router';

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

			await fetch('/api/mail', {
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
							<p>
								Mobile :<a href='tel:++27740491433'> +27 74 049 1433</a>
							</p>
							<p>
								Email :
								<a href='mailto:info@playhousemedia.net'>
									{' '}
									info@playhousemedia.net
								</a>
							</p>
							<p>
								Website :
								<a
									href='http://www.playhousemedia.net'
									target='_blank'
									rel='noopener noreferrer'>
									{' '}
									www.playhousemedia.net
								</a>
							</p>
						</div>
						<div className={styles.socialLinks}>
							<span className={styles.link}>1</span>
							<span className={styles.link}>2</span>
							<span className={styles.link}>3</span>
							<span className={styles.link}>4</span>
							<span className={styles.link}>5</span>
						</div>
					</section>
					<section className={styles.contact__container__right}>
						<h2>Ask Your Queries</h2>
						<form
							method='post'
							className={styles.form}
							onSubmit={handleOnSubmit}>
							<p className={styles.formInput}>
								<label htmlFor='name'>Name</label>
								<input
									required
									className={styles.input}
									type='text'
									name='name'
									id=''
									placeholder='Your Full Name'
								/>
							</p>
							<p className={styles.formInput}>
								<label htmlFor='email'>Email</label>
								<input
									required
									className={styles.input}
									type='email'
									name='email'
									id=''
									placeholder='Your Email Address'
								/>
							</p>
							<p className={styles.formInput}>
								<label htmlFor='message'>Message</label>
								<textarea
									required
									className={styles.textarea}
									name='message'
									placeholder='Message'></textarea>
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
