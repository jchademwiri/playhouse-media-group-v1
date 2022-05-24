import style from 'react-syntax-highlighter/dist/cjs/styles/prism/xonokai';
import styles from './contactUs.module.scss';
const ContactUs = () => {
	return (
		<>
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
						<form className={styles.form}>
							<input
								className={styles.input}
								type='text'
								name='name'
								id=''
								placeholder='Your Name'
							/>
							<input
								className={styles.input}
								type='email'
								name='email'
								id=''
								placeholder='Your Email'
							/>
							<textarea
								className={styles.textarea}
								name='message'
								placeholder='Message'></textarea>
						</form>
						<button className={styles.btn} type='submit'>
							Send Message
						</button>
					</section>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
