// const code = (props) => {
// 	<pre>{JSON.stringify(props, null, 2)}</pre>;
// };

export default {
	name: 'code',
	title: 'Code',
	type: 'object',
	fields: [
		{
			name: 'code',
			title: 'Code',
			type: 'code',
		},
	],
	// preview: {
	// 	select: {
	// 		code: 'code',
	// 	},
	// 	component: code,
	// },
};
