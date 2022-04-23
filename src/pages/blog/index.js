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
		title: 'PMG | Blog',

		canonical: `${server}/blog`,
		openGraph: {
			url: `${server}/blog`,
			title: 'PMG | Blog',
		},
	};

	return (
		<>
			<NextSeo {...SEO} />
			<header className={styles.banner}>
				<div className={styles.banner__content}>
					<h1>Blog Page</h1>
					<p> A custom solution for your business </p>
				</div>
			</header>
			<section className={styles.container}>
				<div>
					<h2>Latest posts</h2>
				</div>
				<div className={styles.posts}>
					{posts ? (
						posts.map((post) => (
							<div key={post.id} className={styles.post}>
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
										/>
										<h3 className={styles.title}>{post.title}</h3>
									</a>
								</Link>
								{/* </div> */}
								<p>{post.exempt.slice(0, 150)}</p>

								<div className={styles.author}>
									<div className={styles.authorImage}>
										<Image
											className={styles.image}
											src={urlFor(post.author.image).url()}
											width={40}
											height={40}
											alt={post.author.name}
											placeholder='blur'
											blurDataURL={urlFor(post.author.image).url()}
											objectFit='cover'
										/>
									</div>
									<div className={styles.authorDetails}>
										<small>{post.author.name}</small>

										<small>
											Published:{' '}
											{moment(post.publishedAt).format('DD MMMM YYYY')}
										</small>
									</div>
								</div>
							</div>
						))
					) : (
						<>
							<Loading />
							{/* <span>No Categories found</span> */}
						</>
					)}
				</div>
			</section>
		</>
	);
};

export default Blog;

export const getServerSideProps = async (pageContext) => {
	const query = `*[_type == "post"]{
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
