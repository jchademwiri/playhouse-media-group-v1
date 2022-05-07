import Link from 'next/link';
<<<<<<< HEAD:src/pages/mdx/index.js
import { SanityClient } from '../../../sanity';
=======
// import { getSanityContent } from '../utils/sanity';
import { SanityClient } from '../../../sanity';

>>>>>>> ab8d8792796ad4622e0c29bca7576e97cfca2dc0:src/pages/learn/mdx.js

export default function Index({ blogs }) {
	return (
		<div>
			<h1>This Site Loads MDX From Sanity.io</h1>

			<ul>
				{blogs.map(({ title, slug, content }) => (
					<div key={slug}>
						<Link href={`/mdx/${slug.current}`}>
							<a>{title}</a>
						</Link>
					</div>
				))}
			</ul>
		</div>
	);
}

export const getServerSideProps = async (pageContext) => {
	const query = `*[_type == "blogPost"] {
			_id,
            slug,
            title,
            content
        }`;

	const blogs = await SanityClient.fetch(query);

	return {
		props: {
			blogs,
		},
	};
};
