const FormInput = (props) => {
	return (
		<div className='w-[400px]'>
			<label htmlFor='username'>Username</label>
			<input type='text' id='username' placeholder={props.placeholder} />
		</div>
	);
};

export default FormInput;
