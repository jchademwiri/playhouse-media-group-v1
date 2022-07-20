import { SanityClient, urlFor } from '../../../sanity';
import Image from 'next/image';
import styles from '../../styles/post.module.scss';
import moment from 'moment';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { server } from '../../config';
import ScrollIndicator from '../../components/ScrollIndicator';
// import BlockContent from '@sanity/block-content-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const BlogPost = ({ post }) => {
	const SEO = {
		title: `${post.title ? post.title : post.slug} | Playhouse Media Group`,
		description: `${
			post.exempt
				? post.excerpt
				: 'Playhouse Media Group takes pride in having worked with and advised many Business Start-Ups, Entrepreneurs, and Established Businesses Globally on their Strategic Marketing Initiatives. We welcome the opportunity to offer your Business the chance to build a successful Marketing Strategy to better dominate your market segment quickly and effectively.'
		}`,
		canonical: `${server}/${post.slug}`,
		openGraph: {
			url: `${server}/${post.slug}`,
			title: `${post.title} | Playhouse Media Group`,
			description: `${
				post.exempt
					? post.excerpt
					: 'Playhouse Media Group takes pride in having worked with and advised many Business Start-Ups, Entrepreneurs, and Established Businesses Globally on their Strategic Marketing Initiatives. We welcome the opportunity to offer your Business the chance to build a successful Marketing Strategy to better dominate your market segment quickly and effectively.'
			}`,
			images: [
				{
					url: `${urlFor(post.mainImage).url()} ? ${urlFor(
						post.mainImage
					).url()} : ${server}/images/pmg-social.jpg`,
					width: 800,
					height: 600,
					alt: 'Playhouse Media Group',
					type: 'image/jpeg',
				},
				{
					url: `${urlFor(post.mainImage).url()} ? ${urlFor(
						post.mainImage
					).url()} : ${server}/images/pmg-social.jpg`,
				},
			],
		},
	};
	const serializers = {
		types: {
			code: ({ node = {} }) => {
				const { code, language } = node;
				if (!code) {
					return null;
				}
				return (
					<SyntaxHighlighter language={language || 'text'}>
						{code}
					</SyntaxHighlighter>
				);
			},
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<ScrollIndicator />

			<div className='relative w-full h-screen '>
				<div className='absolute top-0 left-0 z-10 w-full h-full bg-body opacity-60'></div>
				<div className='grid'>
					<div className='absolute z-30 flex flex-col items-center justify-center w-full h-full text-center '>
						<h1 className='text-5xl font-bold'>{post.title}</h1>
						<h2 className='text-xl '>{post.exempt}</h2>
					</div>
				</div>
				<Image
					className=''
					src={urlFor(post.mainImage).url()}
					width={960}
					height={540}
					alt={post.title}
					placeholder='blur'
					blurDataURL={urlFor(post.mainImage).url()}
					objectFit='cover'
				/>
			</div>

			{/* <section className={styles.container}>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.meta}>
					<div className={styles.author}>
						<Image
							className={styles.author_image}
							src={urlFor(post.author.image).url()}
							width={50}
							height={50}
							alt={post.author.name}
							placeholder='blur'
							blurDataURL={urlFor(post.author.image).url()}
							objectFit='cover'
						/>
						<div className={styles.author_details}>
							<small className={styles.author_name}>{post.author.name}</small>
							<small>
								Published: {moment(post.publishedAt).format('DD MMMM YYYY')}
							</small>
						</div>
					</div>

					<div className={styles.categories}>
						<div>
							{post.categories &&
								post.categories.map((category) => (
									<span key={category.slug}>{category.title}</span>
								))}
						</div>
					</div>
				</div>

				<article className={styles.content}>
					<h1 className={styles.title}>{post.title}</h1>
					<div>
						<BlockContent blocks={post.body} serializers={serializers} />
					</div>
					<small>
						Latst Updated: {moment(post._updatedAt).format('DD MMMM YYYY')}
					</small>
				</article>
				<hr />

				<div className={styles.postLinks}>
					<div>
						<Link href={`/#`}>
							<a className={styles.postLink}>Previous Post</a>
						</Link>
					</div>

					<div>
						<Link href={`/#`}>
							<a className={styles.postLink}>Next Post</a>
						</Link>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default BlogPost;

export const getStaticPaths = async () => {
	const query = `*[_type == "post"]{
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
	const query = `*[_type == "post" && slug.current == $slug][0]{
			_id,
			_createdAt,
			_updatedAt,
			title,
			author->{
			name,
			image
			},
			exempt,
			mainImage,
			body,
			categories[]->{
				_id,
				title,
				description
				}
			}
		`;
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
