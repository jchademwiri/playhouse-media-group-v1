import Navbar from '../Navbar';
import Footer from '../Footer';
import { SWRConfig } from 'swr';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Layout = ({ children, useRouter }) => {
	return (
		<>
			<SWRConfig value={{ fetcher }}>
				<Navbar />
				<motion.main
					initial='pageInitial'
					animate='pageAnimate'
					variants={{
						pageInitial: {
							opacity: 0,
						},
						pageAnimate: {
							opacity: 1,
						},
					}}>
					{children}
				</motion.main>
				<Footer />
			</SWRConfig>
		</>
	);
};

export default Layout;
