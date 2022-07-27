import FormInput from './formInput';

const RegisterForm = () => {
	return (
		<form>
			<div className=''>
				<FormInput placeholder='Please enter your username' />
				<FormInput placeholder='Please enter your email address' />
				<FormInput placeholder='Please enter your Full Name' />
			</div>
		</form>
	);
};

export default RegisterForm;
