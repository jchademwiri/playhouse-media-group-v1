import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import * as ga from '../lib/ga';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on('routeChangeComplete', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return (
		<Layout>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
