import Navbar from '../Navbar';
import Footer from '../Footer';
import { SWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Layout = ({ children }) => {
	return (
		<>
			<SWRConfig value={{ fetcher }}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</SWRConfig>
		</>
	);
};

export default Layout;
