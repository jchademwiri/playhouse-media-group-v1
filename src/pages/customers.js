import useSWR from 'swr';
import { server } from '../config';
import Loading from '../components/Loading';

// const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const customers = () => {
	const { data: customers, error } = useSWR(`${server}/api/customers`);
	if (error) return <div>failed to load</div>;
	return (
		<>
			<section>
				<h1>Customers</h1>
				{customers ? (
					customers.map((customer) => (
						<div key={customer.id}>
							<h3>{customer.name}</h3>
							<p>{customer.description}</p>
						
						</div>
					))
				) : (
					<>
						<Loading />
					</>
				)}
			</section>
		</>
	);
};

export default customers;
