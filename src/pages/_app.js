import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<NextSeo
				title='Jacob Chademwiri | Web Developer'
				description='A professional web developer and digital marketing specialist'
				canonical='https://www.playhousemedia.net/'
				openGraph={{
					url: 'https://www.url.ie/a',
					title: 'Jacob Chademwiri | Web Developer',
					description:
						'A professional web developer and digital marketing specialist',
					images: [
						{
							url: 'https://www.playhousemedia.net/images/og-image-01.jpg',
							width: 800,
							height: 600,
							alt: 'Og Image Alt',
							type: 'image/jpeg'
						},
						{
							url: 'https://www.playhousemedia.net/images/og-image-02.jpg',
							width: 900,
							height: 800,
							alt: 'Og Image Alt Second',
							type: 'image/jpeg'
						},
						{ url: 'https://www.playhousemedia.net/images/og-image-03.jpg' },
						{ url: 'https://www.playhousemedia.net/images/og-image-04.jpg' }
					],
					site_name: 'SiteName'
				}}
				twitter={{
					handle: '@jchademwiri',
					site: '@jchademwiri',
					cardType: 'summary_large_image',
					image: 'https://www.playhousemedia.net/images/og-image-01.jpg'
				}}
			/>

			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
