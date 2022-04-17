import moment from 'moment';
import { SanityClient, urlFor } from '../../../sanity';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/blog.module.scss';

const Blog = ({ posts }) => {
	return (
		<>
			<header className={styles.banner}>
				<div className={styles.banner__content}>
					<h1>Blog Page</h1>
					<p> A custom solution for your business </p>
				</div>
			</header>
			<section className={styles.container}>
				<div className={styles.posts}>
					{posts &&
						posts.map((post) => (
							<div key={post.id} className={styles.post}>
								<div>
									<Image
										src={urlFor(post.mainImage).url()}
										width={450}
										height={300}
										alt={post.title}
									/>
								</div>
								<h3>
									<Link href={`/blog/${post.slug.current}`}>
										<a>{post.title}</a>
									</Link>
								</h3>
								<p>{post.exempt}</p>

								<div className={styles.author}>
									<div className={styles.authorImage}>
										<Image
											className={styles.image}
											src={urlFor(post.author.image).url()}
											width={40}
											height={40}
											alt={post.author.image}
										/>
									</div>
									<div className={styles.authorDetails}>
										<small>{post.author.name}</small>

										<small>
											{moment(post.publishedAt).format('Do MMMM YYYY')}
										</small>
									</div>
								</div>
							</div>
						))}
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
