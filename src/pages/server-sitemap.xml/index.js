import { getServerSideSitemap } from 'next-sitemap';
import { SanityClient } from '../../../sanity';
import { server } from '../../config';

export const getServerSideProps = async (ctx) => {
	const query = `*[_type == "post"]{
	  slug,
	  }`;
	const posts = await SanityClient.fetch(query);
	const fields = posts.map((post) => ({
		loc: `${server}/${post.slug.current}`,
		lastmod: new Date().toString(),
		changefreq: 'daily',
		priority: 0.8,
	}));

	return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
