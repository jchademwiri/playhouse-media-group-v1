import { SanityClient } from '../../../sanity';
// import hydrate from 'next-mdx-remote/hydrate';
// import renderToString from 'next-mdx-remote/render-to-string';
// import { serialize } from 'next-mdx-remote/serialize';
import moment from 'moment';
import { MDXRemote } from 'next-mdx-remote';

const post = ({ post }) => {
	console.log(post);
	return (
		<>
			<small>
				Published: {moment(post.publishedAt).format('DD MMMM YYYY')}
			</small>
			<h1> Post Title: {post.title} </h1>
			<em> Post Slug: {post.slug.current} </em>
			<p>Post Content: {post.content}</p>
		</>
	);
};

export default post;

export const getStaticPaths = async () => {
	const query = `*[_type == "blogPost"]{
		_id,
	  	slug {
			current
		}
	  }`;

	const posts = await SanityClient.fetch(query);

	const paths = posts.map((post) => ({
		params: {
			slug: post.slug.current,
		},
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params }) => {
	const query = `*[_type == "blogPost" && slug.current == $slug][0]{
		_id,
		_createdAt,
		slug,
		title,
		content
	}`;
	const post = await SanityClient.fetch(query, {
		slug: params.slug,
	});

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post,
		},
		revalidate: 60,
	};
};
