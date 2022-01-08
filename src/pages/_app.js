import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Layout from '../components/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<DefaultSeo {...SEO} />

			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
