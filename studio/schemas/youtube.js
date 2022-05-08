import React from 'react';
import getYouTubeID from 'get-youtube-id';

const YoutubePreview = ({ value }) => {
	const youtubeId = getYouTubeID(value.url);
	const url = `https://www.youtube.com/embed/${youtubeId}`;

	if (!youtubeId) {
		return <div>No YouTube ID found</div>;
	}

	return <iframe src={url} title='YouTube video player'></iframe>;
};

export default {
	name: 'youtube',
	title: 'Youtube Embed',
	type: 'object',
	fields: [
		{
			name: 'url',
			title: 'URL',
			type: 'url',
		},
	],
	preview: {
		select: {
			url: 'url',
		},
		component: YoutubePreview,
	},
};
