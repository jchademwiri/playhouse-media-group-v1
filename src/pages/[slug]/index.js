import { SanityClient, urlFor } from '../../../sanity';
import Image from 'next/image';
import styles from '../../styles/post.module.scss';
import moment from 'moment';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { server } from '../../config';
import ScrollIndicator from '../../components/ScrollIndicator';
import BlockContent from '@sanity/block-content-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';

const BlogPost = ({ post }) => {
	// console.log(`${urlFor(post.mainImage).url()}`);
	const SEO = {
		url: `${server}/${post.slug.current}`,
		title: `${post.title} | Playhouse Media Group`,
		description: `${post.exempt}`,
		canonical: `${server}/${post.slug.current}`,
		openGraph: {
			url: `${server}/${post.slug.current}`,
			title: `${post.title} | Playhouse Media Group`,
			description: `${post.exempt}`,
			type: 'article',
			images: [
				{
					url: `${urlFor(post.mainImage).url()}`,
					width: 800,
					height: 600,
					alt: 'Playhouse Media Group',
					type: 'image/jpeg',
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
		marks: {
			annotations: [
				{
					title: 'Youtube Embed',
					name: 'youtube',
					type: 'object',
					fields: [
						{
							title: 'URL',
							name: 'href',
							type: 'url',
						},
					],
				},
			],
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<ScrollIndicator />

			{/* <div className=" bg-[url('/images/bg.jpg')] bg-no-repeat  min-h-[400px] shadow-[inset_0_0_1000px_rgb(27,25,52,0.8)]"> */}
			<div className='  min-h-[400px] shadow-[inset_0_0_1000px_rgb(27,25,52,0.8)]'>
				<div className='h-[90px]'></div>
				{/* <div className="bg-[url('/images/bg.jpg')]  min-h-[400px] shadow-[inset_0_0_1000px_rgb(27,25,52,0.8)]"> */}
				{/* <div className=' min-h-[400px] shadow-[inset_0_0_1000px_rgb(27,25,52,0.8)]'> */}
				<div className=' min-h-[400px]'>
					<div className='sm:w-11/12 lg:w-7/12 mx-auto rounded-t-lg  bg-[#1b1934]/80'>
						<Image
							className='rounded-t-lg'
							src={urlFor(post.mainImage).url()}
							width={1920}
							height={1080}
							alt={post.title}
							placeholder='blur'
							blurDataURL={urlFor(post.mainImage).url()}
							objectFit='cover'
						/>
						<div className='p-4'>
							<div className={styles.meta}>
								<div className={styles.author}>
									<div className='grid place-items-center bg-gradient-to-r p-[2px] rounded-full from-primary to-secondary'>
										<Image
											className='rounded-full'
											src={urlFor(post.author.image).url()}
											width={40}
											height={40}
											alt={post.author.name}
											placeholder='blur'
											blurDataURL={urlFor(post.author.image).url()}
											objectFit='cover'
										/>
									</div>
									<div className={styles.author_details}>
										<small className={styles.author_name}>
											{post.author.name}
										</small>
										<small>
											Published:{' '}
											{moment(post.publishedAt).format('DD MMMM YYYY')}
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

							<article>
								<h1 className='text-2xl font-bold'>{post.title}</h1>
								<BlockContent blocks={post.body} serializers={serializers} />
							</article>
							<div>
								<hr className='my-4' />
							</div>
							<div className={styles.postLinks}>
								<div className='my-4'>
									<Link href={`/#`}>
										<a className={styles.postLink}>
											<div className='flex items-center '>
												<span className='pr-2'>
													<BiArrowToLeft />
												</span>
												<span>Previous Post</span>
											</div>
										</a>
									</Link>
								</div>

								<div>
									<Link href={`/${post.slug.current}`}>
										<a className={styles.postLink}>
											<div className='flex items-center '>
												<span>Next Post</span>
												<span className='pl-2'>
													<BiArrowToRight />
												</span>
											</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className='relative w-full h-[600px] overflow-hidden'>
				<div className='absolute top-0 left-0 z-10 w-full h-full bg-body opacity-60'></div>
				<div className='grid'>
					<div className='absolute z-30  grid w-[500px] h text-center '>
						<h1 className='text-5xl font-bold'>{post.title}</h1>
						<h2 className='text-xl '>{post.exempt}</h2>
					</div>
				</div>

				<Image
					className='object-cover '
					src={urlFor(post.mainImage).url()}
					width={1920}
					height={1080}
					alt={post.title}
					placeholder='blur'
					blurDataURL={urlFor(post.mainImage).url()}
					objectFit='cover'
				/>
			</div> */}

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
			slug,
			publishedAt,
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
