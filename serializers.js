export const serializers = {
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

		marks: {
			link: (props) => <pre> {JSON.stringify(props, null, 2)}</pre>,
		},

		
		img: ({ src, alt, ...props }) => (
			<Image
				src={src}
				alt={alt}
				{...props}
				width={1920}
				height={1080}
				placeholder='blur'
				blurDataURL={urlFor(post.mainImage).url()}
				objectFit='cover'
			/>
		),
	},
};

// export default serializers;
