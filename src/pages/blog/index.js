import moment from 'moment';
import { SanityClient, urlFor } from '../../../sanity';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/blog.module.scss';
import Loading from '../../components/Loading';
import { NextSeo } from 'next-seo';
import { server } from '../../config';

const Blog = ({ posts }) => {
	const SEO = {
		title: `Blog | Playhouse Media Group`,

		canonical: `${server}/blog`,
		openGraph: {
			url: `${server}/blog`,
			title: `Blog | Playhouse Media Group`,
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<header className={styles.banner}>
				<div className={styles.banner__content}>
					<h1 className='text-4xl font-bold mx-9'>Blog Page</h1>
					<p className='font-semibold'> A custom solution for your business </p>
				</div>
			</header>
			<section className={styles.container}>
				<div>
					<h2 className='my-4 text-2xl font-semibold'>Latest posts</h2>
				</div>
				<div className={styles.posts}>
					{posts.length > 0 ? (
						posts.map((post) => (
							<div key={post._id} className={styles.post}>
								{/* <div> */}
								<Link href={`/${post.slug.current}`}>
									<a>
										<Image
											className={styles.mainImage}
											src={urlFor(post.mainImage).url()}
											width={1920}
											height={1080}
											alt={post.title}
											placeholder='blur'
											blurDataURL={urlFor(post.mainImage).url()}
											objectFit='cover'
											priority={true}
										/>
										<h3 className='text-xl font-semibold hover:text-secondary'>
											{post.title}
										</h3>
										<small className='text-secondary'>
											{moment(post.publishedAt).format('DD MMMM YYYY')}
										</small>
									</a>
								</Link>
								{/* </div> */}
								<p>{post.exempt.slice(0, 150)}</p>

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
											priority={true}
										/>
									</div>
									<div className={styles.authorDetails}>
										<small>{post.author.name}</small>
									</div>
								</div>
							</div>
						))
					) : (
						<>
							<Loading />
						</>
					)}
				</div>
			</section>
		</>
	);
};

export default Blog;

export const getServerSideProps = async (pageContext) => {
	const query = `*[_type == "post"] | order(publishedAt desc){
		_id,
		title,
		author -> {
		name,
		image,
	  },
	  exempt,
	  mainImage,
	  slug,
	  publishedAt
	  }`;

	const posts = await SanityClient.fetch(query);

	return {
		props: {
			posts,
		},
	};
};
