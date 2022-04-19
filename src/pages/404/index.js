import Link from 'next/link';

const NotFound = () => {
	return (
		<>
			<h1>404</h1>
			<h3>page not found</h3>
			<small>
				<Link href='/'>Go to home page</Link>
			</small>
		</>
	);
};

export default NotFound;
