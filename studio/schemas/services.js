export default {
	name: 'services',
	title: 'Services',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			description: 'Keep titles short!',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},

		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},

		{
			name: 'coverImage',
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
			media: 'coverImage',
		},
	},
};
