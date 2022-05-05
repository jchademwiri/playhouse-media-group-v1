import { SanityClient, urlFor } from '../../../sanity';
import Image from 'next/image';
import styles from '../../styles/post.module.scss';
import moment from 'moment';
import PortableText from 'react-portable-text';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { server } from '../../config';
import { serializers } from '../../../serializers';

const BlogPost = ({ post }) => {
	const SEO = {
		title: `${post.title ? post.title : post.slug} | Playhouse Media Group`,
		description: `${post.exempt ? post.excerpt : post.excerpt}`,
		canonical: `${server}/${post.slug}`,
		openGraph: {
			url: `${server}/${post.slug}`,
			title: `${post.title} | Playhouse Media Group`,
			description: `${post.exempt ? post.excerpt : post.excerpt}`,
		},
	};

	const serializers = {
		marks: {
			link: (props) => <pre>{JSON.stringify(props, null, 2)}</pre>,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<section className={styles.container}>
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
							{/* <small>
						Latst Updated: {moment(post._updatedAt).format('DD MMMM YYYY')}
					</small> */}
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
				<div className={styles.content}>
					<Image
						src={urlFor(post.mainImage).url()}
						width={1920}
						height={1080}
						alt={post.title}
						placeholder='blur'
						blurDataURL={urlFor(post.mainImage).url()}
						objectFit='cover'
					/>
				</div>
				<article className={styles.content}>
					<h1 className={styles.title}>{post.title}</h1>
					<div>
						<PortableText
							dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
							projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
							content={post.body}
							// serializers={serializers}
							serializers={{
								h1: (props) => <h1 className={styles.h1} {...props} />,
								h2: (props) => <h2 className={styles.h2} {...props} />,
								h3: (props) => <h3 className={styles.h3} {...props} />,
								li: ({ children }) => <li>{children}</li>,
								pre: (props) => <pre className={styles.pre} {...props} />,
								code: (props) => <pre>{JSON.stringify(props, null, 2)}</pre>,
								link: ({ href, children }) => (
									<a
										href={href}
										target='_blank'
										rel='noopener noreferrer'
										className={styles.link}>
										{children}
									</a>
								),
							}}
						/>
					</div>

					<pre>{JSON.stringify(post.title, null, 2)}</pre>
				</article>
			</section>
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
