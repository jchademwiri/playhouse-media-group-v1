import Footer from '../Footer';

import { motion } from 'framer-motion';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
	return (
		<>
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
		</>
	);
};

export default Layout;
