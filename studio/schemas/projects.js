export default {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			description: 'Keep titles short!',
			type: 'string',
		},
		{
			title: 'Project URL',
			name: 'projectUrl',
			description: 'example: https://playhousemedia.net',
			type: 'url',
		},
		{
			name: 'projectTypes',
			title: 'Project Type',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'projectType' } }],
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},

		{
			name: 'mainImage',
			title: 'Project Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'mainImage',
		},
	},
};
